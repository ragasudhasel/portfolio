# 🌌 Ragasudha S.S | AI Engineer Portfolio Website

A futuristic, clean, professional, and highly responsive portfolio website designed for recruiters. Built using ReactJS, Vite, Tailwind CSS, Framer Motion, and Lucide/React Icons.

---

## 🚀 Key Features

*   **Interactive AI Prompt Sandbox**: A futuristic terminal simulation showing structured prompting, chaining workflows, and AI debugging capabilities in action.
*   **Fully Responsive**: Fluid, mobile-first design, optimized for screen sizes from 320px mobile to 4K ultra-wide monitors.
*   **Aesthetics**: Glassmorphism cards, glowing emerald-to-cyan gradients, subtle grids, and smooth scrolling animations.
*   **Real Data Only**: Accurately showcases real education, certifications, leadership, and projects.

---

## 🛠️ Required Packages (Dependencies)

The project leverages the following libraries (pre-configured in `package.json`):
*   `react` & `react-dom` (v18+) — Core UI engine
*   `framer-motion` (v12+) — Smooth physics-based UI transitions & entrance animations
*   `lucide-react` & `react-icons` — Modern vector iconography
*   `tailwindcss` & `autoprefixer` — Glassmorphism grid, utility layout system
*   `vite` — Fast dev server & bundler

---

## 💻 Local Installation & Setup

1.  **Clone the repository or navigate to the project directory**:
    ```bash
    cd "d:\Resumes\Ragasudha Portfolio"
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Start the development server**:
    ```bash
    npm run dev
    ```
    The server will open locally at `http://localhost:5173/Portfolio/` (or the local port listed in your terminal).

4.  **Create a production build**:
    ```bash
    npm run build
    ```
    This compiles code to optimized chunks in the `/dist` directory.

---

## 📦 Deployment Guide

### Option 1: Deploying to Vercel

#### Method A: Vercel Git Integration (Recommended)
1.  Push your code to **GitHub**, **GitLab**, or **Bitbucket**.
2.  Go to [Vercel Dashboard](https://vercel.com/) and click **Add New Project**.
3.  Import your repository.
4.  Configure Settings:
    *   **Framework Preset**: Select `Vite` or `Other`.
    *   **Build Command**: `npm run build`
    *   **Output Directory**: `dist`
5.  Click **Deploy**.

#### Method B: Vercel CLI
1.  Install the Vercel CLI:
    ```bash
    npm install -g vercel
    ```
2.  Log in and deploy:
    ```bash
    vercel
    ```
3.  Follow the interactive prompts (use `./` for directory, accept default build command and output folder `dist`).
4.  To deploy to production:
    ```bash
    vercel --prod
    ```

---

### Option 2: Deploying to Netlify

#### Method A: Netlify Git Integration (Recommended)
1.  Push code to **GitHub**.
2.  Go to [Netlify Dashboard](https://app.netlify.com/) and click **Add new site** -> **Import an existing project**.
3.  Choose your Git provider and import the repo.
4.  Configure Build Settings:
    *   **Build Command**: `npm run build`
    *   **Publish Directory**: `dist`
5.  Click **Deploy site**.

#### Method B: Netlify Drag & Drop
1.  Run the production build command locally:
    ```bash
    npm run build
    ```
2.  Navigate to the [Netlify App](https://app.netlify.com/).
3.  Drag the newly generated `/dist` folder from your file explorer and drop it into the Netlify deployment box.

#### Method C: Netlify CLI
1.  Install the Netlify CLI:
    ```bash
    npm install -g netlify-cli
    ```
2.  Log in:
    ```bash
    netlify login
    ```
3.  Deploy:
    ```bash
    netlify deploy --prod --dir=dist
    ```
