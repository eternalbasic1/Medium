// Access BACKEND_URL from process.env
export const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL || "http://localhost:8787/api/v1"; // Default to localhost if not set
