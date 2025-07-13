"use client";
import { useEffect, useState } from "react";
import BgGradient from "@/components/common/bg-gradient";
import { MotionDiv } from "@/components/common/motion-wrapper";
import UploadForm from "@/components/upload/upload-form";
import UploadHeader from "@/components/upload/upload-header";
import UpgradeRequired from "@/components/common/upgrade-required";
import { containerVariants } from "@/utils/constants";

export default function UploadPage() {
  const [freeLimitReached, setFreeLimitReached] = useState(false);

  useEffect(() => {
    const usage = parseInt(localStorage.getItem("free_upload_count") || "0", 10);
    if (usage >= 2) {
      setFreeLimitReached(true);
    }
  }, []);

  return (
    <section className="min-h-screen">
      <BgGradient />
      <MotionDiv
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8"
      >
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <UploadHeader />
          {freeLimitReached ? <UpgradeRequired /> : <UploadForm />}
        </div>
      </MotionDiv>
    </section>
  );
}
