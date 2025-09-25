import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/lib/site.config";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section
          id="home"
          className="container mx-auto flex flex-col items-center justify-center text-center py-20 px-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Welcome to <span className="text-primary">MyWebsite</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
            Build modern, fast, and beautiful web apps with Next.js and
            shadcn/ui.
          </p>
          <div className="space-x-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>

          <Card className="mt-12 max-w-xl shadow-md border border-border bg-card text-card-foreground">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Why Choose Us?</h3>
              <p className="text-muted-foreground">
                We provide a starter template with clean UI components, easy
                customization, and lightning-fast performance.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* About */}
        <section
          id="about"
          className="container mx-auto text-center py-20 px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We help developers ship beautiful and modern applications quickly
            using Next.js and shadcn/ui. Our goal is to simplify your workflow.
          </p>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="container mx-auto text-center py-20 px-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions? Reach out at{" "}
            <a
              href={`mailto:${siteConfig.supportEmail}`}
              className="text-primary underline"
            >
              {siteConfig.supportEmail}
            </a>
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
