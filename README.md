Strong Blog
A modern blog/admin application built with Next.js (App Router) and TypeScript, styled with Tailwind CSS and a reusable UI kit. Deployed on Vercel.
Live site: https://strong-blog.vercel.app/

✨ Features

⚡ Next.js (App Router) + React + TypeScript
🎨 Tailwind CSS with component primitives
🧩 Modular components (cards, dialogs, forms, tables, etc.)
👩‍💻 Admin area for posts, users, categories, settings
📰 Public blog with post listing & detail pages
📱 Responsive, accessible UI
🔧 Ready for Vercel deployments

Note: Feature names reflect the folder structure in app/ and components/. Customize this list to match your exact functionality.
🧱 Tech Stack

Framework: Next.js (App Router)
Language: TypeScript
Styling: Tailwind CSS
Build/Deploy: Vercel
Package Manager: npm, pnpm, or yarn (your choice)

🚀 Getting Started (Local)

Clone
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>


Install dependencies
# pick one
npm install
# or
pnpm install
# or
yarn


Environment variables (if any)
Create a .env.local at the project root:
# .env.local
# EXAMPLE ONLY — add your real keys as needed
# DATABASE_URL=
# NEXT_PUBLIC_SITE_URL=http://localhost:3000

Next.js automatically loads .env.local and excludes it from Git by default.

Run the dev server
npm run dev
# or: pnpm dev / yarn dev

Open http://localhost:3000 in your browser.

Build & start (production)
npm run build
npm run start



📁 Project Structure (excerpt)
app/
  ├─ page.tsx                 # Home
  ├─ about/
  ├─ blog/
  │   ├─ page.tsx             # Blog index
  │   └─ [id]/page.tsx        # Blog post
  ├─ admin/
  │   ├─ page.tsx             # Admin dashboard
  │   ├─ layout.tsx
  │   ├─ posts/
  │   │   ├─ page.tsx
  │   │   ├─ loading.tsx
  │   │   └─ [id]/edit/page.tsx
  │   ├─ categories/
  │   │   ├─ page.tsx
  │   │   └─ loading.tsx
  │   ├─ users/
  │   │   ├─ page.tsx
  │   │   └─ loading.tsx
  │   ├─ settings/
  │   │   ├─ page.tsx
  │   │   └─ loading.tsx
  │   └─ login/page.tsx
  ├─ globals.css
  └─ layout.tsx
components/
  ├─ admin-sidebar.tsx
  ├─ blog-card.tsx
  ├─ strong-navigation.tsx
  ├─ theme-provider.tsx
  └─ ui/… (accordion, dialog, table, etc.)
public/
  ├─ placeholder.svg
  └─ images…
styles/
  └─ globals.css
lib/
  └─ utils.ts
next.config.mjs
postcss.config.mjs
tsconfig.json

Adjust as your repo evolves.
🧩 Available Scripts
npm run dev       # start dev server
npm run build     # build for production
npm run start     # run production server
npm run lint      # lint (if configured)

☁️ Deploying to Vercel

Push your code to GitHub/GitLab/Bitbucket.
In Vercel, click New Project → import your repo.
Framework preset: Next.js (auto-detected).
Set any required environment variables in Project Settings → Environment Variables.
Deploy!

Every push to main (or your chosen branch) will trigger a new deployment.
📝 Contributing

Fork the repo
Create a branch: git checkout -b feature/amazing-feature
Commit: git commit -m "feat: add amazing feature"
Push: git push origin feature/amazing-feature
Open a Pull Request

🧰 Windows Line Endings (CRLF warnings)
If you see messages like “LF will be replaced by CRLF”, you can normalize line endings:
git config core.autocrlf true    # checkout CRLF on Windows, commit as LF
# or force LF in repo:
# echo "* text=auto eol=lf" > .gitattributes
# git add --renormalize .
# git commit -m "chore: normalize line endings"

📜 License
This project is licensed under the MIT License.See LICENSE for details. (Create one if you haven’t yet.)
🙌 Acknowledgements

Next.js team & docs
Tailwind CSS
UI component libraries and open-source contributors

📬 Contact
For issues or feature requests, open an Issue or reach out via your GitHub profile.
