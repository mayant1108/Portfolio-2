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

function getEmailJsTemplateParams(form) {
  return {
    [emailJsTemplateFields.fromName]: form.name.trim(),
    [emailJsTemplateFields.fromEmail]: form.email.trim(),
    [emailJsTemplateFields.replyTo]: form.email.trim(),
    [emailJsTemplateFields.message]: form.message.trim(),
  };
}

function logMissingEmailJsEnv(missingEnvKeys) {
  if (hasLoggedMissingEmailJsEnv) {
    return;
  }

  hasLoggedMissingEmailJsEnv = true;
  console.error(
    `[EmailJS] Missing or placeholder Vite environment variable(s): ${missingEnvKeys.join(
      ", ",
    )}. Add real EmailJS values to .env.local in the project root, then restart the Vite dev server.`,
  );
}

function initializeEmailJs({ logMissingEnv = true } = {}) {
  const missingEnvKeys = getMissingEmailJsEnvKeys();

  if (missingEnvKeys.length > 0) {
    if (logMissingEnv) {
      logMissingEmailJsEnv(missingEnvKeys);
    }

    return false;
  }

  if (!hasInitializedEmailJs) {
    emailjs.init({
      publicKey: emailJsConfig.publicKey,
    });
    hasInitializedEmailJs = true;
  }

  return true;
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    initializeEmailJs({ logMissingEnv: false });
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!initializeEmailJs()) {
      toast.error("Message failed to send. Please try again.");
      return;
    }

    setIsSending(true);

    try {
      const templateParams = getEmailJsTemplateParams(form);

      // Match these keys with the variables in your EmailJS template.
      const result = await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        templateParams,
      );

      if (result.status !== 200) {
        throw result;
      }

      toast.success("Message sent successfully!");
      setForm(initialForm);
    } catch (error) {
      console.error("[EmailJS] Failed to send contact form message:", error);
      toast.error("Message failed to send. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      className="rounded-lg border border-slate-200 bg-white p-6 shadow-soft transition-colors duration-300 dark:border-white/10 dark:bg-white/[0.06] dark:backdrop-blur-xl sm:p-8"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
            <HiOutlineUser className="h-4 w-4 text-teal-500 dark:text-teal-300" aria-hidden="true" />
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
              className="h-4 w-4 text-teal-500 dark:text-teal-300"
              aria-hidden="true"
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
            className="h-4 w-4 text-teal-500 dark:text-teal-300"
            aria-hidden="true"
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
          className={`h-4 w-4 ${isSending ? "animate-pulse" : ""}`}
          aria-hidden="true"
        />
      </button>
    </form>
  );
}
