const iconClass = "h-5 w-5";

export default function Icon({ name, className = iconClass, strokeWidth = 1.8 }) {
  const shared = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  switch (name) {
    case "menu":
      return (
        <svg {...shared}>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </svg>
      );
    case "close":
      return (
        <svg {...shared}>
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </svg>
      );
    case "sun":
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2" />
          <path d="M12 20v2" />
          <path d="m4.9 4.9 1.4 1.4" />
          <path d="m17.7 17.7 1.4 1.4" />
          <path d="M2 12h2" />
          <path d="M20 12h2" />
          <path d="m4.9 19.1 1.4-1.4" />
          <path d="m17.7 6.3 1.4-1.4" />
        </svg>
      );
    case "moon":
      return (
        <svg {...shared}>
          <path d="M21 14.4A8.5 8.5 0 0 1 9.6 3a7 7 0 1 0 11.4 11.4Z" />
        </svg>
      );
    case "arrow":
      return (
        <svg {...shared}>
          <path d="M5 12h14" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      );
    case "download":
      return (
        <svg {...shared}>
          <path d="M12 3v12" />
          <path d="M7 10l5 5 5-5" />
          <path d="M5 21h14" />
        </svg>
      );
    case "external":
      return (
        <svg {...shared}>
          <path d="M14 4h6v6" />
          <path d="M20 4l-9 9" />
          <path d="M20 14v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4" />
        </svg>
      );
    case "send":
      return (
        <svg {...shared}>
          <path d="M22 2L11 13" />
          <path d="M22 2l-7 20-4-9-9-4 20-7Z" />
        </svg>
      );
    case "mail":
      return (
        <svg {...shared}>
          <path d="M4 6h16v12H4z" />
          <path d="M4 7l8 6 8-6" />
        </svg>
      );
    case "phone":
      return (
        <svg {...shared}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.6 19.6 0 0 1-8.5-3A19.3 19.3 0 0 1 5.4 13 19.6 19.6 0 0 1 2.3 4.4 2 2 0 0 1 4.3 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.4 10a16 16 0 0 0 5.7 5.7l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7A2 2 0 0 1 22 16.9Z" />
        </svg>
      );
    case "map":
      return (
        <svg {...shared}>
          <path d="M12 21s7-5.2 7-11a7 7 0 0 0-14 0c0 5.8 7 11 7 11Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );
    case "user":
      return (
        <svg {...shared}>
          <path d="M20 21a8 8 0 0 0-16 0" />
          <circle cx="12" cy="7" r="4" />
        </svg>
      );
    case "message":
      return (
        <svg {...shared}>
          <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
        </svg>
      );
    case "html":
      return (
        <svg {...shared}>
          <path d="M4 3h16l-1.4 15.2L12 21l-6.6-2.8L4 3Z" />
          <path d="M8 7h8" />
          <path d="M7.5 11h8l-.5 4-3 1.2-3-1.2" />
        </svg>
      );
    case "css":
      return (
        <svg {...shared}>
          <path d="M4 3h16l-1.4 15.2L12 21l-6.6-2.8L4 3Z" />
          <path d="M8 7h8l-1 4H9l-.8 4 3.8 1.2 3.8-1.2" />
        </svg>
      );
    case "javascript":
      return (
        <svg {...shared}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M9 9v5a2 2 0 0 1-3 1.7" />
          <path d="M14 16c2 0 3-1 3-2.2 0-1.4-1.2-1.9-2.8-2.3C13 11.2 12 10.8 12 9.7 12 8.6 13 8 14.4 8c1 0 1.9.3 2.6.9" />
        </svg>
      );
    case "react":
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="1.7" />
          <ellipse cx="12" cy="12" rx="9" ry="3.6" />
          <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)" />
        </svg>
      );
    case "tailwind":
      return (
        <svg {...shared}>
          <path d="M4 12c1.6-3.2 3.8-4.8 6.5-4.8 4 0 4.5 3 6.5 3 1.4 0 2.4-.8 3-2.3-1.6 3.2-3.8 4.8-6.5 4.8-4 0-4.5-3-6.5-3-1.4 0-2.4.8-3 2.3Z" />
          <path d="M4 18c1.6-3.2 3.8-4.8 6.5-4.8 4 0 4.5 3 6.5 3 1.4 0 2.4-.8 3-2.3-1.6 3.2-3.8 4.8-6.5 4.8-4 0-4.5-3-6.5-3-1.4 0-2.4.8-3 2.3Z" />
        </svg>
      );
    case "node":
      return (
        <svg {...shared}>
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
          <path d="M9 15V9l6 6V9" />
        </svg>
      );
    case "mongodb":
      return (
        <svg {...shared}>
          <path d="M12 21s6-4 6-10A8 8 0 0 0 12 3a8 8 0 0 0-6 8c0 6 6 10 6 10Z" />
          <path d="M12 21V9" />
        </svg>
      );
    case "github":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 .8A11.2 11.2 0 0 0 8.5 22.6c.6.1.8-.3.8-.6v-2.1c-3.4.8-4.1-1.5-4.1-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.4-5.5-6A4.6 4.6 0 0 1 6 7c-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.4 1.2a11.4 11.4 0 0 1 6.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.7.2 3 .1 3.3a4.6 4.6 0 0 1 1.2 3.2c0 4.7-2.8 5.7-5.5 6 .5.4.9 1.2.9 2.4V22c0 .3.2.7.8.6A11.2 11.2 0 0 0 12 .8Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M4.8 3.2a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3 9h3.6v11.8H3V9Zm6 0h3.5v1.6h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6v6.5h-3.7V15c0-1.4 0-3.2-2-3.2s-2.2 1.5-2.2 3.1v5.9H9V9Z" />
        </svg>
      );
    case "graduation":
      return (
        <svg {...shared}>
          <path d="M22 9L12 4 2 9l10 5 10-5Z" />
          <path d="M6 11.5V16c2 2 10 2 12 0v-4.5" />
          <path d="M22 9v6" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...shared}>
          <path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1" />
          <path d="M4 7h16v12H4z" />
          <path d="M4 12h16" />
        </svg>
      );
    case "target":
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <path d="M12 12l7-7" />
        </svg>
      );
    case "code":
      return (
        <svg {...shared}>
          <path d="M8 9l-4 3 4 3" />
          <path d="M16 9l4 3-4 3" />
          <path d="M14 5l-4 14" />
        </svg>
      );
    case "server":
      return (
        <svg {...shared}>
          <rect x="4" y="4" width="16" height="6" rx="2" />
          <rect x="4" y="14" width="16" height="6" rx="2" />
          <path d="M8 7h.01" />
          <path d="M8 17h.01" />
          <path d="M12 7h4" />
          <path d="M12 17h4" />
        </svg>
      );
    case "tool":
      return (
        <svg {...shared}>
          <path d="M14.7 6.3a4 4 0 0 0-5 5L3.8 17.2a2 2 0 1 0 3 3l5.9-5.9a4 4 0 0 0 5-5L15 12l-3-3 2.7-2.7Z" />
        </svg>
      );
    case "device":
      return (
        <svg {...shared}>
          <rect x="4" y="5" width="16" height="11" rx="2" />
          <path d="M8 20h8" />
          <path d="M12 16v4" />
        </svg>
      );
    case "palette":
      return (
        <svg {...shared}>
          <path d="M12 3a9 9 0 0 0 0 18h1.5a2 2 0 0 0 1.5-3.3 1.8 1.8 0 0 1 1.3-3.1H18a3 3 0 0 0 3-3A8.6 8.6 0 0 0 12 3Z" />
          <circle cx="7.5" cy="11" r=".6" />
          <circle cx="10" cy="7.8" r=".6" />
          <circle cx="14" cy="7.8" r=".6" />
        </svg>
      );
    default:
      return (
        <svg {...shared}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}
