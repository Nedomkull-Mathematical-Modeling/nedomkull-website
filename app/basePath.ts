export function getBasePath(): string {
  if (import.meta.env.DEV) return ""; // in dev, serve from root
  const parts = window.location.pathname.split("/").filter(Boolean);
  // If hosted under /repo/, return "/repo"; otherwise ""
  return parts.length > 0 ? `/${parts[0]}` : "";
}

