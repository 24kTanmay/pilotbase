# PilotBase Landing Page

A modern, responsive landing page built with Next.js, TypeScript, and Tailwind CSS featuring a clean design with navbar, hero section, and footer.

## Features

- 🚀 **Next.js 15** with App Router
- 💎 **TypeScript** for type safety
- 🎨 **Tailwind CSS** for responsive styling
- 📱 **Mobile-first design** with responsive navigation
- ⚡ **Fast performance** and SEO optimized
- 🎯 **Clean, modern UI** with gradient hero section

## Components

### Navbar
- Responsive navigation with mobile hamburger menu
- Smooth hover effects
- Call-to-action button

### Hero Card
- Gradient background with compelling headline
- Feature highlights with icons
- Dual call-to-action buttons
- Informational cards showcasing key benefits

### Footer
- Multi-column layout with company info
- Quick links and services
- Contact information
- Social media icons
- Copyright and legal links

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── HeroCard.tsx
│   │   └── Footer.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── .github/
│   └── copilot-instructions.md
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.mjs
```

## Customization

### Colors
The project uses a blue and purple gradient theme. You can customize colors in `tailwind.config.ts` or by modifying the Tailwind classes in components.

### Content
- Update company name and branding in `Navbar.tsx`
- Modify hero text and CTAs in `HeroCard.tsx`
- Update contact info and links in `Footer.tsx`

### Styling
All components use Tailwind CSS utility classes for responsive design and can be easily customized by modifying the class names.

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [React](https://reactjs.org/) - UI library

## License

This project is open source and available under the [MIT License](LICENSE).
