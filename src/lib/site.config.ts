// site.config.ts

type SiteConfig = {
  name: string;
  supportEmail: string;
  description: string;
};

function getEnvVar(key: string, fallback: string): string {
  return process.env[key] ?? fallback;
}

export const siteConfig: SiteConfig = {
  name: getEnvVar("NEXT_PUBLIC_SITE_NAME", "MyWebsite"),
  supportEmail: getEnvVar("NEXT_PUBLIC_SUPPORT_EMAIL", "info@mywebsite.com"),
  description: getEnvVar(
    "NEXT_PUBLIC_SITE_DESCRIPTION",
    "Modern web apps with Next.js + shadcn/ui"
  ),
};
