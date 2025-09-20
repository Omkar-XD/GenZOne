# 🌐 GenZOne – AI-Powered Trends Platform

GenZOne is a **full-stack Next.js application** that delivers the **latest global trends** in  
**fashion, food, culture, technology**, and more.  
It’s designed for **Gen Z and future generations** to explore real-time trends,  
chat with an AI trend expert, and generate creative text & images.

---

## ✨ Features
- 📰 **Global Trend News** – Live Gen Z–focused news feed (via [GNews API](https://gnews.io/)).
- 💬 **AI Trend Chat** – Ask questions about current trends using **Gemini 2.5 Pro**.
- 🖼 **AI Image & Text Generation** – Create trend-based visuals and content.
- 🔐 **Authentication** – Secure login/signup with **Firebase Auth**.
- ☁️ **Database & Storage** – Store user data & generated images in **Firestore & Firebase Storage**.
- 🎨 **Modern UI** – Built with **Next.js + React + TypeScript + Tailwind CSS + shadcn/ui**.
- 🎞 **Smooth Animations** – Powered by **Framer Motion** for scroll & component transitions.
- ⚡ **Fast & Secure** – All AI calls are handled **server-side** to protect API keys.

---

## 🛠 Tech Stack
| Category           | Technology |
|--------------------|------------|
| Frontend Framework | [Next.js 15](https://nextjs.org/) (React + App Router) |
| Styling            | [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/), Framer Motion |
| Language           | TypeScript |
| AI Models          | [Google Gemini API](https://ai.google.dev/) |
| Database/Auth      | Firebase (Auth, Firestore, Storage) |
| News Source        | [GNews API](https://gnews.io/) |

---

## 🚀 Getting Started

### 1️⃣ Clone the repo
```bash
git clone https://github.com/<your-username>/GenZOne.git
cd GenZOne
2️⃣ Install dependencies
bash
Copy code
npm install
# or
yarn install
3️⃣ Create .env.local
Create a file named .env.local in the project root:

bash
Copy code
# Firebase (client-side)
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Server-only
GEMINI_API_KEY=your_gemini_api_key
GNEWS_API_KEY=your_gnews_api_key
⚠️ Do not commit this file – it contains secrets.

4️⃣ Run the dev server
bash
Copy code
npm run dev
Visit http://localhost:3000 to view the app.

📂 Folder Structure
bash
Copy code
/app
  /api
    /chat/route.ts         # Gemini text generation
    /news/route.ts         # GNews trending fetch
    /generate/route.ts     # Gemini image generation
  /chat/page.tsx
  /news/page.tsx
  /generate/page.tsx
  /dashboard/page.tsx
/components
/lib
  firebase.ts              # Firebase initialization
  gemini.ts                # Gemini helper
/contexts
  auth-context.tsx         # AuthProvider + hooks
🔑 Key Environment Notes
GEMINI_API_KEY and GNEWS_API_KEY are used only on the server (API routes).
Never expose them in client components.

Firebase config keys are safe to expose with the NEXT_PUBLIC_ prefix.

🌍 Deployment
You can deploy to:

Vercel (recommended for Next.js)

Firebase Hosting

Netlify

Steps for Vercel:

Push your code to GitHub.

Connect the repo to Vercel.

Add the same .env.local variables to Vercel → Project Settings → Environment Variables.

Deploy.

📈 Roadmap / Ideas
🔔 Trend Alerts – Notify users of breaking trends.

💡 Saved Chats & Favorites.

🏷 User-Generated Trends – Let users submit & vote.

🌐 Multi-language support.

🧑‍💻 Contributing
Pull requests and feature suggestions are welcome!
Open an issue first to discuss what you’d like to change.

📜 License
MIT License – feel free to use and modify for personal or commercial projects.

Made with ❤️ by Omkar for the Gen Z community.
