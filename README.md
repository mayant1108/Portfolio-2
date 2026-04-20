# Mayant Khanna Portfolio

A responsive full-stack developer portfolio built with Vite, React, and Tailwind CSS.

## Run Locally

```bash
npm install
npm run dev
```

## Contact Form Setup

This portfolio uses EmailJS from the frontend, so no backend server is required.

1. Create an EmailJS account and add an email service.
2. Create an EmailJS template, set the template recipient to your email address in EmailJS, and use these variables:

```text
from_name
from_email
reply_to
message
```

3. Copy `.env.example` to `.env.local` and fill in your EmailJS values:

```bash
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Restart the dev server after changing environment variables.

## Build

```bash
npm run build
```

## Customize

Edit `src/data/portfolio.js` to change the name, intro, skills, projects, contact links, and resume path.

Edit `src/config/contact.js` to change the WhatsApp opening message or contact action buttons.

Replace `src/assets/profile-photo-optimized.jpg` with Mayant's uploaded profile photo using the same filename, or update the import in `src/data/portfolio.js`.
