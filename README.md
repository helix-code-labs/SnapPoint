# SnapPoint Landing Page

> "Zero-Touch Loyalty: เพิ่มลูกค้าประจำได้จริง โดยที่คุณไม่ต้องขยับตัว"

The marketing landing page for **SnapPoint**, a Micro-CRM loyalty point system designed for Thai coffee shops. This application serves as the primary entry point for potential customers, showcasing the product's "Zero-Touch" philosophy through interactive demos and clear value propositions.

**Current Status:** Pilot Launch Ready (v9.0)

## Overview

This project is a single-page application (SPA) built to convert visitors into pilot users. It features:
- **Interactive Demo:** A simulated experience of the "Zero-Touch" scanning process.
- **Value Proposition:** Clear explanation of the 199฿/month flat rate model.
- **Responsive Design:** Mobile-first approach optimized for all devices.
- **Thai Language First:** All content is localized for the target market (Thai SME owners).

## Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** GitHub Pages (via GitHub Actions)

## Local Development Setup

### Prerequisites

- **Node.js** (Latest LTS recommended)
- **pnpm** (Package manager)

### Installation

1. Navigate to the landing page directory:
   ```bash
   cd apps/landing
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

### Running Locally

Start the development server with Hot Module Replacement (HMR):

```bash
pnpm dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create a production-ready build:

```bash
pnpm build
```

The output will be generated in the `dist/` directory.

### Linting

Ensure code quality and style consistency:

```bash
pnpm lint
```

## Project Structure

```
apps/landing/
├── public/              # Static assets (favicons, etc.)
├── src/
│   ├── components/      # Shared UI components (DemoApp, PhoneMockup)
│   ├── layout/          # Layout components (Navbar, Footer)
│   ├── sections/        # Page sections (Hero, Features, Pricing, etc.)
│   ├── constants/       # configuration constants
│   ├── App.tsx          # Main application component
│   └── main.tsx         # Entry point
└── vite.config.ts       # Vite configuration
```

## Deployment

This project is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

- **Workflow File:** `.github/workflows/deploy.yml`
- **Live Site:** [Insert Live URL Here]

## Key Features Implemented

- **Hero Section:** Introduction with primary CTA.
- **Interactive Demo:** Simulates the LINE QR scan and "Ting!" audio feedback.
- **Pain Points:** Addresses common issues (expensive POS, lost cards).
- **Pricing:** Simple 199฿/month pricing display.
- **FAQ:** Handles common objections (downloads, equipment).

## Contributing

1. **Branching:** Create a feature branch for your changes.
2. **Conventions:** Follow the project's [Coding Guidelines](../../AGENTS.md).
3. **Pull Request:** Submit a PR with a clear description of changes.

---

**Maintained by:** HelixCodeLabs Team
