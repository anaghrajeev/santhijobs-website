# Santhijobs Website

A premium, production-ready business portfolio website for a placements and recruitment consultancy. Built with Next.js App Router, Tailwind CSS, Framer Motion, and React Hook Form.

## Features

- **Modern & Premium Design**: Clean typography (Sora + Inter), subtle gradients, and glassmorphism.
- **Fully Responsive**: Mobile-first approach ensuring a great experience on phones, tablets, and large screens.
- **Subtle Animations**: Uses Framer Motion for scroll-triggered fades, text reveals, and hover interactions.
- **WhatsApp Integration**: Enquiry form processes user input and opens a pre-filled WhatsApp click-to-chat window.
- **Easy to Edit**: All content (text, placements, links, business info) is isolated in the `/src/data/` directory for simple non-developer maintenance.

## Setup & Local Development

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Environment Variables**:
   By default, the WhatsApp number is loaded from the data file, but you can override it by creating a `.env.local` file:
   ```env
   NEXT_PUBLIC_WHATSAPP_NUMBER=919037008009
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## How to Edit Content

To update website content, you do not need to modify the UI components. Simply edit the files in the `src/data/` folder:

- **`src/data/site.ts`**: Contains the business name, tagline, description, location, contact info (including WhatsApp number), and social media links. Update this file to reflect the correct contact details.
- **`src/data/placements.ts`**: Contains the data for the "Recent Placements" section. You can add, edit, or remove placement highlight cards here, as well as update the list of "Hiring Partners".

## How to Change the WhatsApp Number

The WhatsApp number determines where form enquiries are sent. There are two ways to update it:
1. **Via Environment Variable** (Recommended for security): Set `NEXT_PUBLIC_WHATSAPP_NUMBER` in your `.env` or hosting provider settings (e.g., `919876543210`). The number must include the country code without the `+` sign.
2. **Via Data File**: Directly update `siteConfig.contact.whatsapp` in `src/data/site.ts`.

## Deployment to Vercel

This Next.js project is fully optimized for Vercel deployment without needing a backend.

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Log in to [Vercel](https://vercel.com/) and click "Add New Project".
3. Import your repository.
4. (Optional) Add your environment variables (e.g., `NEXT_PUBLIC_WHATSAPP_NUMBER`).
5. Click **Deploy**. Vercel will automatically detect Next.js and apply the correct build settings (`npm run build`).

## Technologies Used
- [Next.js](https://nextjs.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
