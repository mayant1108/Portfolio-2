import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const channelIcons = {
  email: HiOutlineMail,
  whatsapp: FaWhatsapp,
  linkedin: FaLinkedinIn,
};

export default function ContactActionCard({ channel }) {
  const ChannelIcon = channelIcons[channel.icon] || HiOutlineMail;
  const opensInNewTab = channel.href.startsWith("http");

  return (
    <a
      aria-label={`Open ${channel.label}`}
      className="group flex min-h-24 items-center gap-4 rounded-lg border border-slate-200 bg-white p-4 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-teal-300/70 hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-slate-50 dark:border-white/10 dark:bg-white/[0.06] dark:hover:border-teal-300/50 dark:hover:bg-white/[0.09] dark:focus:ring-offset-slate-950"
      href={channel.href}
      rel={opensInNewTab ? "noreferrer" : undefined}
      target={opensInNewTab ? "_blank" : undefined}
    >
      <span
        className={`grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${channel.tone} text-slate-950 shadow-lg shadow-slate-900/10 transition duration-300 group-hover:scale-105`}
      >
        <ChannelIcon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-xs font-black uppercase text-slate-500 dark:text-slate-400">
          {channel.label}
        </span>
        <span className="mt-1 block break-words text-sm font-black text-slate-950 transition group-hover:text-teal-700 dark:text-white dark:group-hover:text-teal-100">
          {channel.value}
        </span>
      </span>
    </a>
  );
}
