const DEFAULT_MENTORA_URL = "http://localhost:3000/login";

export function getMentoraUrl() {
  const rawUrl = import.meta.env.VITE_MENTORA_URL;
  return typeof rawUrl === "string" && rawUrl.trim() ? rawUrl.trim() : DEFAULT_MENTORA_URL;
}
