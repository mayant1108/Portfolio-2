import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  HiOutlineChatBubbleBottomCenterText,
  HiOutlineEnvelope,
  HiOutlinePaperAirplane,
  HiOutlineUser,
} from "react-icons/hi2";
import {
  emailJsConfig,
  emailJsTemplateFields,
  getMissingEmailJsEnvKeys,
} from "../../config/contact.js";

const initialForm = {
  name: "",
  email: "",
  message: "",
};

const inputClasses =
  "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-300/30 dark:border-white/10 dark:bg-white/[0.07] dark:text-white dark:placeholder:text-slate-500 dark:focus:border-teal-300 dark:focus:bg-white/[0.1]";

let hasInitializedEmailJs = false;
let hasLoggedMissingEmailJsEnv = false;


function logMissingEmailJsEnv(missingEnvKeys) {
  if (hasLoggedMissingEmailJsEnv) {
    return;
  }

  hasLoggedMissingEmailJsEnv = true;
  console.error(
    `[EmailJS] Missing or placeholder Vite environment variable(s): ${missingEnvKeys.join(
      ", ",
    )}. Add real EmailJS values to .env.local or src/config/contact.js, then restart the Vite dev server if needed.`,
  );
}

function initializeEmailJs({ logMissingEnv = true } = {}) {
  const missingEnvKeys = getMissingEmailJsEnvKeys();

  if (missingEnvKeys.length > 0) {
    if (logMissingEnv) {
      logMissingEmailJsEnv(missingEnvKeys);
    }

    return { ok: false, missingEnvKeys };
  }

  if (!hasInitializedEmailJs) {
    emailjs.init({
      publicKey: emailJsConfig.publicKey,
    });
    hasInitializedEmailJs = true;
  }

  return { ok: true, missingEnvKeys: [] };
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    initializeEmailJs();
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }));
  }

  async function sendEmail(event) {
    event.preventDefault();

    const { ok } = initializeEmailJs();

    if (!ok) {
      toast.error("Email service is not configured yet.");
      return;
    }

    setIsSending(true);

    try {
      await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          name: form.name,
          email: form.email,
          reply_to: form.email,
          message: form.message,
        }, emailJsConfig.publicKey);

      toast.success("Message sent successfully.");
      setForm(initialForm);
    } catch (error) {
      console.error("[EmailJS] Failed to send message.", error);
      toast.error("Unable to send the message right now.");
    } finally {
      setIsSending(false);
    }
  }

  return (
    <form
      className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.06] dark:backdrop-blur-xl sm:p-8"
      onSubmit={sendEmail}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
            <HiOutlineUser
              aria-hidden="true"
              className="h-4 w-4 text-teal-500 dark:text-teal-300"
            />
            Name
          </span>
          <input
            autoComplete="name"
            className={inputClasses}
            name="name"
            onChange={handleChange}
            placeholder="Your name"
            required
            type="text"
            value={form.name}
          />
        </label>

        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
            <HiOutlineEnvelope
              aria-hidden="true"
              className="h-4 w-4 text-teal-500 dark:text-teal-300"
            />
            Email
          </span>
          <input
            autoComplete="email"
            className={inputClasses}
            name="email"
            onChange={handleChange}
            placeholder="you@example.com"
            required
            type="email"
            value={form.email}
          />
        </label>
      </div>

      <label className="mt-5 block">
        <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
          <HiOutlineChatBubbleBottomCenterText
            aria-hidden="true"
            className="h-4 w-4 text-teal-500 dark:text-teal-300"
          />
          Message
        </span>
        <textarea
          className={`${inputClasses} min-h-40 resize-y`}
          name="message"
          onChange={handleChange}
          placeholder="Tell me about your project"
          required
          value={form.message}
        />
      </label>

      <button
        aria-busy={isSending}
        className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-teal-400 via-emerald-400 to-orange-400 px-6 text-sm font-black text-slate-950 shadow-glow transition duration-300 hover:-translate-y-0.5 hover:shadow-teal-400/30 focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-white disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 dark:focus:ring-offset-slate-950 sm:w-auto"
        disabled={isSending}
        type="submit"
      >
        {isSending ? "Sending..." : "Send Message"}
        <HiOutlinePaperAirplane
          aria-hidden="true"
          className={`h-4 w-4 ${isSending ? "animate-pulse" : ""}`}
        />
      </button>
    </form>
  );
}
