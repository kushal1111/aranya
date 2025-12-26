# Aaranya - Climate Action Website

A modern, responsive website for Aaranya, a climate change NGO focused on building a sustainable future through environmental conservation and community engagement.

## Features

- **Responsive Design**: Works seamlessly across all devices
- **Modern UI**: Built with Next.js 15, TypeScript, and Tailwind CSS
- **Program Pages**: Dedicated pages for Reforestation, Clean Water, Climate Education, and Renewable Energy
- **Performance Optimized**: Fast loading and SEO-friendly
- **Accessibility**: WCAG compliant design

## Programs

### 🌳 Reforestation Initiative
- Tree planting and forest restoration
- Carbon sequestration projects
- Community engagement

### 💧 Clean Water Access
- Well construction and water filtration
- Sustainable water solutions
- Community health improvement

### 📚 Climate Education
- School programs and community workshops
- Online learning platforms
- Awareness campaigns

### ⚡ Renewable Energy
- Solar and wind power installations
- Energy storage solutions
- Clean energy transition

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.0.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/your-username/aaranya-website.git
cd aaranya-website
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

3. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with each push to main branch

### Environment Variables

This project uses a small set of environment variables for admin access and optional production storage. Add these in your host (Vercel Environment Variables, GitHub Secrets, etc.) and do not commit them to source.

Required for admin management (set these in production):

- `ADMIN_PASSWORD` — strong password used to authenticate to `/admin/login`.
- `ADMIN_SECRET` — random secret used to sign the admin session cookie.

Optional (recommended) — external storage (S3) for production file uploads:

- `AWS_REGION` — region for your S3 bucket (ex: us-east-1)
- `S3_BUCKET` — name of the S3 bucket used for document storage
- `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` — credentials for an IAM user with PutObject/GetObject on the bucket

Tip: add these variables using your host's secrets UI (Vercel Dashboard, GitHub Secrets). See `.env.example` for a template.

## Project Structure

\`\`\`
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── programs/
│       ├── page.tsx
│       ├── reforestation/
│       ├── clean-water/
│       ├── climate-education/
│       └── renewable-energy/
├── components/
│   └── ui/
├── lib/
├── public/
└── ...config files
\`\`\`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

- Website: [aaranya.org](https://aaranya.org)
- Email: info@aaranya.org
- Phone: +1 (555) 123-4567

---

Built with ❤️ for a sustainable future.

Running end-to-end tests
------------------------

I added Playwright-based end-to-end tests that verify the admin auth & middleware redirects.

- Install dev deps: `pnpm install --save-dev @playwright/test`
- Install browsers: `npx playwright install`
- Set env var `ADMIN_PASSWORD` before running the auth test (the test will be skipped if it's not set):

  ADMIN_PASSWORD=yourpassword pnpm test:e2e

There is also a GitHub Action at `.github/workflows/e2e.yml` that runs tests on push to `main` (set `ADMIN_PASSWORD` in your repository secrets to enable the auth test in CI`).
