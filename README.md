# ConciseDocs

> Effortlessly summarize your PDFs with AI. ConciseDocs helps you extract key insights from documents in seconds, with a beautiful, modern interface.

---

## 🚀 Features

- ✨ Summarize PDF documents with AI
- 🆓 Free plan: 2 summaries for new users (no signup required)
- 💳 Paid plans: More uploads per month, tracked per user
- 🔊 Voice Summaries: Listen to your summaries with text-to-speech
- 📥 Download summaries as text
- 📊 Dashboard to view and manage your summaries
- 🔒 Secure authentication (Clerk)
- 🌗 Modern, responsive UI with dark mode
- ⚡ Fast, serverless backend (Next.js API routes)

---

## 🖼️ Demo

![ConciseDocs Demo](./public/demo-screenshot.png)

> _Replace the above with your own screenshot or GIF_

Try it live: [https://your-deployment-url.com](https://your-deployment-url.com)

---

## 🛠️ Tech Stack

- [Next.js 14 (App Router)](https://nextjs.org/)
- [React 18](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Clerk](https://clerk.com/) (Authentication)
- [Neon](https://neon.tech/) (PostgreSQL Database)
- [Prisma](https://www.prisma.io/) (ORM)
- [Zod](https://zod.dev/) (Validation)
- [UploadThing](https://uploadthing.com/) (File uploads)
- [Gemini AI](https://ai.google.dev/) (Summarization)
- [LangChain](https://www.langchain.com/) (AI orchestration)

---

## 🧑‍💻 Local Development

1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/concisedocs.git
   cd concisedocs
   ```
2. **Install dependencies:**
   ```bash
   npm install
   # or yarn install
   ```
3. **Set up environment variables:**
   - Copy `.env.example` to `.env.local` and fill in your API keys and secrets.
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ⚙️ Environment Variables

You’ll need to set up the following in your `.env.local`:

- `DATABASE_URL` (Neon PostgreSQL/Prisma)
- `CLERK_SECRET_KEY`, `CLERK_PUBLISHABLE_KEY`
- `UPLOADTHING_SECRET`, `UPLOADTHING_APP_ID`
- `GEMINI_API_KEY`

> _See `.env.example` for the full list._

---

## 📦 Deployment

Deploy easily to [Vercel](https://vercel.com/) (recommended):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

Or use your preferred cloud provider.

---

## 🙌 Contributing

Contributions are welcome! Please open an issue or pull request for suggestions, bug fixes, or new features.

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

---

## 📄 License

MIT License. See [LICENSE](./LICENSE) for details.

---

## 👤 Credits

Built by [Krishna](https://your-portfolio-link.com).

---

© 2025 Krishna. All rights reserved.
