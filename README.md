# Neev Wealth - Fee-Only Financial Advisory Platform

A modern, responsive website for Neev Wealth, a SEBI-registered fee-only financial advisory firm specializing in Indian markets and NRI repatriation planning. Features an AI-powered chat assistant powered by Google Gemini.

## 🚀 Features

- **Multi-page Website**: Home, About, Services, FAQ, and Contact pages
- **AI Chat Assistant**: Interactive financial advisor chatbot powered by Google Gemini
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **NRI Focus**: Specialized content for Non-Resident Indians returning to India
- **Fee-Only Model**: Transparent, commission-free financial advisory

## 🛠️ Tech Stack

- **React 19.2.0** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing (HashRouter for static hosting)
- **Tailwind CSS** - Styling (via CDN)
- **Google Gemini AI** - AI chat assistant
- **Lucide React** - Icons

## 📋 Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn
- Google Gemini API key (for AI chat functionality)

## 🏃 Local Development

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd neev-wealth
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
   
   You can get a Gemini API key from [Google AI Studio](https://makersuite.google.com/app/apikey).

4. **Start the development server**
   ```bash
   npm run dev
   ```
   
   The app will be available at `http://localhost:3000`

5. **Build for production**
   ```bash
   npm run build
   ```
   
   The production build will be in the `dist` directory.

## 📦 Project Structure

```
neev-wealth/
├── components/          # Reusable React components
│   ├── AIAdvisor.tsx    # AI chat assistant component
│   ├── Footer.tsx       # Footer component
│   ├── Navbar.tsx       # Navigation bar
│   └── ServiceCard.tsx  # Service card component
├── pages/              # Page components
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact page
│   ├── FAQ.tsx         # FAQ page
│   ├── Home.tsx        # Home page
│   └── Services.tsx    # Services page
├── services/           # Service modules
│   └── geminiService.ts # Gemini AI integration
├── App.tsx             # Main app component
├── index.tsx           # Entry point
├── index.html          # HTML template
├── types.ts            # TypeScript type definitions
├── vite.config.ts      # Vite configuration
├── tsconfig.json       # TypeScript configuration
└── vercel.json         # Vercel deployment configuration
```

## 🌐 Deployment

### Deploy to Vercel

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Deploy on Vercel**
   
   - Go to [Vercel](https://vercel.com) and sign in
   - Click "New Project" and import your GitHub repository
   - Vercel will auto-detect Vite configuration
   - Add environment variable:
     - **Name**: `GEMINI_API_KEY`
     - **Value**: Your Gemini API key
   - Click "Deploy"

   The site will be live at `https://your-project.vercel.app`

### Manual Vercel Deployment

Alternatively, you can use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

Follow the prompts and add your `GEMINI_API_KEY` when asked.

### Environment Variables on Vercel

Make sure to add the `GEMINI_API_KEY` environment variable in your Vercel project settings:
- Go to Project Settings → Environment Variables
- Add `GEMINI_API_KEY` with your API key value
- Redeploy the project

## 🔧 Configuration

### Vite Configuration

The project uses Vite with React plugin. The configuration in `vite.config.ts`:
- Sets up environment variable injection for `GEMINI_API_KEY`
- Configures path aliases (`@/` for root directory)
- Sets development server to port 3000

### Routing

The app uses `HashRouter` from React Router, which is ideal for static hosting. Routes are:
- `/` - Home
- `/#/about` - About
- `/#/services` - Services
- `/#/faq` - FAQ
- `/#/contact` - Contact

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🎨 Styling

The project uses Tailwind CSS via CDN. Custom colors are defined in `index.html`:
- **Brand colors**: Blue shades (brand-50 to brand-900)
- **Gold accent**: gold-500, gold-600
- **Fonts**: Inter (sans-serif), Merriweather (serif)

## 🤖 AI Assistant

The AI chat assistant uses Google Gemini 2.5 Flash model. It's configured to:
- Provide financial advice in the context of Indian markets
- Help with NRI-related queries
- Explain fee-only advisory concepts
- Keep responses concise (under 100 words by default)

## 📄 License

This project is private and proprietary.

## 👥 Contact

For questions about the website or deployment, contact the development team.

---

**Note**: Make sure to keep your `GEMINI_API_KEY` secure and never commit it to version control. The `.gitignore` file is configured to exclude `.env` files.
