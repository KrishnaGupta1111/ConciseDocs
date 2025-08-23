"use server";

import { getDbConnection } from "@/lib/db";
import { generateSummaryFromGemini } from "@/lib/gemini-ai";
import { fetchAndExtractPdfText } from "@/lib/langchain";
import { formatFileNameAsTitle } from "@/utils/format-utils";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

interface PdfSummaryType {
  userId?: string;
  fileUrl: string;
  summary: string;
  title: string;
  fileName: string;
  email?: string;
}

export async function generatePdfSummary({
  fileUrl,
  fileName,
}: {
  fileUrl: string;
  fileName: string;
}) {
  if (!fileUrl) {
    return {
      success: false,
      message: "File upload failed",
      data: null,
    };
  }

  try {
    const pdfText = await fetchAndExtractPdfText(fileUrl);
    console.log("Extracted PDF text:", pdfText); // Add this log

    if (!pdfText || pdfText.trim().length === 0) {
      return {
        success: false,
        message: "The uploaded PDF appears to be empty or could not be read.",
        data: null,
      };
    }

    let summary;
    try {
      summary = await generateSummaryFromGemini(pdfText);
      console.log(summary);
    } catch (error) {
      console.log("Failed to generate summary", error);
    }

    if (!summary) {
      return {
        success: false,
        message: "Failed to generate summary",
        data: null,
      };
    }

    const formattedFileName = formatFileNameAsTitle(fileName);

    return {
      success: true,
      message: "Summary generated successfully",
      data: {
        title: formattedFileName,
        summary,
      },
    };
  } catch (error) {
    return {
      success: false,
      message: "File upload failed",
      data: null,
    };
  }
}

async function savePdfSummary({
  userId,
  fileUrl,
  summary,
  title,
  fileName,
}: PdfSummaryType) {
  try {
    const sql = await getDbConnection();
    console.log("Attempting to insert summary for userId:", userId);
    const [savedSummary] = await sql`
      INSERT INTO pdf_summaries (
        user_id,
        original_file_url,
        summary_text,
        title,
        file_name
      ) VALUES (
        ${userId},
        ${fileUrl},
        ${summary},
        ${title},
        ${fileName}
      ) RETURNING id, summary_text`;
    console.log("Saved summary:", savedSummary);
    return savedSummary;
  } catch (error) {
    console.error("Error saving PDF summary", error);
    throw error;
  }
}

export async function storePdfSummaryAction({
  fileUrl,
  summary,
  title,
  fileName,
  userId, // accept userId from client
  email,
}: PdfSummaryType) {
  let savedSummary: any;
  try {
    // Use the passed userId, not auth()
    if (!userId) {
      console.error("No userId provided to storePdfSummaryAction");
      return {
        success: false,
        message: "User not found",
      };
    }
    if (!email) {
      throw new Error("No email provided for user upsert!");
    }
    const sql = await getDbConnection();

    // Always upsert the user row for every signed-in user
    console.log("Upserting user row for userId:", userId, "email:", email);
    await sql`
      INSERT INTO users (id, email, price_id, status)
      VALUES (${userId}, ${email}, ${null}, 'active')
      ON CONFLICT (id) DO UPDATE SET email = EXCLUDED.email
    `;
    console.log("User upserted for userId:", userId);

    // ✅ 3. Save the summary
    savedSummary = await savePdfSummary({
      userId,
      fileUrl,
      summary,
      title,
      fileName,
    });

    if (!savedSummary) {
      console.error("Failed to save PDF summary, savePdfSummary returned null");
      return {
        success: false,
        message: "Failed to save PDF summary, please try again",
      };
    }
  } catch (error) {
    console.error("Error in storePdfSummaryAction:", error);
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Error saving PDF summary",
    };
  }

  // ✅ 4. Revalidate cache for the new summary page and dashboard
  revalidatePath("/dashboard");
  revalidatePath(`/summaries/${savedSummary.id}`);

  return {
    success: true,
    message: "PDF summary saved successfully",
    data: {
      id: savedSummary.id,
    },
  };
}
