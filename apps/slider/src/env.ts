export function env() {
  const SITE_URL = process.env.SITE_URL ?? "http://localhost:4321";

  return {
    SITE_URL,
  };
}
