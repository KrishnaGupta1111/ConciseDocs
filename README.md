
## 📄 ConciseDocs – AI Powered PDF Summarization
[![Screenshot-2025-07-18-235259.png](https://i.postimg.cc/FHbxJBb4/Screenshot-2025-07-18-235259.png)](https://postimg.cc/bZJn7LFC)

**ConciseDocs** is a modern, full-stack AI SaaS platform that lets users upload PDFs and receive **clear, structured, and visually engaging summaries** — like an Instagram reel for your documents.

Built using **Next.js 15**, **LangChain**, and **Gemini/GPT-4**, this application provides both **free and paid tiers**, ensuring users can try it out before subscribing. The UI is fully responsive and beautifully crafted using **ShadCN UI + Tailwind CSS v4**.



## ✨ Features

- 🧠 **AI Summarization**: Get concise key points from any PDF using Gemini or GPT-4 via LangChain.
- 🎨 **Instagram-style Visual Viewer**: Interactive, swipeable summaries that look beautiful.
- 🔐 **Protected Routes & Secure API**: Authentication and route protection via Clerk.
- 📂 **Secure File Uploads**: Upload PDFs (up to 32MB) using UploadThing.
- 💳 **Stripe Subscription Plans**: Basic (free 2-use trial) & Pro plan with auto webhook handling.
- 🧾 **Dashboard**: Users can view, manage, and export summaries in markdown format.
- 🔄 **Real-Time UI & SEO-Friendly Paths**: Server-side revalidation with instant updates.
- 📱 **Fully Responsive**: Mobile-first design using Tailwind v4 and ShadCN.
- 🚀 **Production-Ready Deployment**: Optimized for performance, accessibility, and SEO.
- 🔔 **Toasts & Feedback**: Real-time user notifications for uploads, errors, and actions.

## 🔗 Demo

> 🟢 [Live Demo](https://concisedocs.vercel.app) 
 
 > 💻 [Source Code](https://github.com/KrishnaGupta1111/ConciseDocs) 


## 🛠️ Tech Stack

| Category     | Technologies                                                                 |
|--------------|------------------------------------------------------------------------------|
| 🖥️ Frontend   | Next.js 15, React 19, Tailwind CSS v4, ShadCN UI                             |
| 🧠 Backend    | LangChain, Gemini AI / OpenAI (GPT-4)                                         |
| 🔐 Auth       | Clerk (Passkeys, GitHub, Google login)                                       |
| 📦 Database   | NeonDB (PostgreSQL)                                                          |
| 📁 Uploads    | UploadThing                                                                  |
| 💳 Payments   | Stripe (with webhook support)                                                |
| 🔔 Notifications | React Hot Toast                                                        |
| 🔤 Language    | TypeScript                                                                  |

## 💸 Pricing Plans


| Plan   | Features                                                         |
|--------|------------------------------------------------------------------|
| Free   | 2 summaries, markdown export, basic PDF parsing                  |
| Basic    | 5 summaries, fast processing, premium UI , Free Donwload      |
| Pro    | Unlimited usage, fast processing, premium UI, full access  , Free Donwload     |


## 🧩 Folder Structure

```bash
ConciseDocs/
├── components/
├── lib/
├── app/              # Next.js 15 App Router
├── public/
├── styles/
└── utils/
```
## 🐛 Known Issues

- PDF files larger than 32MB are not supported
- Free tier has limited Gemini/OpenAI credits
- No dark mode yet (coming soon!)

> If you encounter bugs, please create an issue or open a PR!
## 🎯 Why I Built This

This project helped me deeply understand:

- Server Actions and App Router in Next.js 15
- API authentication with Clerk
- Building secure Stripe billing flows
- LangChain integration with LLMs (Gemini/GPT-4)
- Uploading and handling large files securely





## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```



## 🔐 Environment Variables

Create a `.env.local` file in the root and add the following:

```env
CLERK_SECRET_KEY=your_clerk_secret
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_public_key

OPENAI_API_KEY=your_openai_or_gemini_key
LANGCHAIN_API_KEY=optional

STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_WEBHOOK_SECRET=your_webhook_secret

DATABASE_URL=your_neondb_url

UPLOADTHING_SECRET=your_uploadthing_secret
UPLOADTHING_APP_ID=your_uploadthing_app_id
```
## 🤝 Contributing

Contributions are welcome!

If you want to improve something or fix bugs, feel free to:

- Fork the repo
- Create a branch (`git checkout -b feature/your-feature`)
- Commit your changes (`git commit -m "Add your feature"`)
- Push and create a PR

Please follow the [Code of Conduct](./CODE_OF_CONDUCT.md) and [Contributing Guide](./CONTRIBUTING.md).

## 🙋‍♂️ Author

**Krishna Gupta**  
🌐 [Portfolio](https://krishna03.vercel.app)  
💼 [LinkedIn](https://linkedin.com/in/krishnagupta111/)  
📧 guptakrish1947@gmail.com


## 📜 License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and distribute.


## 🙏 Acknowledgements


- Thanks to the open-source tools that power this project: LangChain, Clerk, UploadThing, Stripe, and TailwindCSS
