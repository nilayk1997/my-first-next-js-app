"use client";

import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useActiveSection } from "@/hooks/use-active-section";
import { siteConfig } from "@/lib/site.config";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export function Header() {
  const activeSection = useActiveSection(navLinks.map((link) => link.id));

  return (
    <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}

        <h1 className="text-xl font-bold">{siteConfig.name}</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`text-sm transition-colors ${
                activeSection === link.id
                  ? "text-primary font-semibold"
                  : "hover:text-primary"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-2">
          <Button size="sm">Get Started</Button>
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col space-y-6 p-6">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={`text-sm transition-colors ${
                      activeSection === link.id
                        ? "text-primary font-semibold"
                        : "hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <Button size="sm" className="mt-4">
                Get Started
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
