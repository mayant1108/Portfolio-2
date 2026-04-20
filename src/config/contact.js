import { profile } from "../data/portfolio.js";

// Edit the message or phone source here if you want a different WhatsApp opener.
const whatsappNumber = profile.phone.replace(/\D/g, "");
const whatsappMessage = "Hi Mayant, I saw your portfolio and would like to connect.";

export const emailJsEnvKeys = {
  serviceId: "VITE_EMAILJS_SERVICE_ID",
  templateId: "VITE_EMAILJS_TEMPLATE_ID",
  publicKey: "VITE_EMAILJS_PUBLIC_KEY",
};

const placeholderValues = new Set([
  "",
  "service_xxxxxxx",
  "template_xxxxxxx",
  "your_public_key",
  "your_service_id",
  "your_template_id",
]);

// Vite only exposes frontend environment variables that start with `VITE_`.
export const emailJsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim() || "",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim() || "",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim() || "",
};

export const emailJsTemplateFields = {
  fromName: "from_name",
  fromEmail: "from_email",
  replyTo: "reply_to",
  message: "message",
};

export function getMissingEmailJsEnvKeys() {
  return Object.entries(emailJsConfig)
    .filter(([, value]) => placeholderValues.has(value))
    .map(([key]) => emailJsEnvKeys[key]);
}

export const contactChannels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: "email",
    tone: "from-cyan-400 to-teal-300",
  },
  {
    label: "WhatsApp",
    value: profile.phone,
    href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`,
    icon: "whatsapp",
    tone: "from-emerald-400 to-lime-300",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mayant-khanna",
    href: profile.linkedin,
    icon: "linkedin",
    tone: "from-sky-500 to-blue-400",
  },
];
