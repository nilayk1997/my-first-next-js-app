// site.config.ts

type SiteConfig = {
  name: string;
  supportEmail: string;
  description: string;
};

function getEnvVar(key: string): string {
  const value = process.env[key];
  if (!value) throw new Error(`Missing env var: ${key}`);
  return value;
}

export const siteConfig: SiteConfig = {
  name: getEnvVar("NEXT_PUBLIC_SITE_NAME"),
  supportEmail: getEnvVar("NEXT_PUBLIC_SUPPORT_EMAIL"),
  description: getEnvVar("NEXT_PUBLIC_SITE_DESCRIPTION"),
};
