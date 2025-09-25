"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export function Favicon() {
  const { theme, systemTheme } = useTheme();

  useEffect(() => {
    const favicon = document.getElementById(
      "favicon"
    ) as HTMLLinkElement | null;

    if (!favicon) return;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      favicon.href = "/favicon-dark.png";
    } else {
      favicon.href = "/favicon-light.png";
    }
  }, [theme, systemTheme]);

  return null;
}
