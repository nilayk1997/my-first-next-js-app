export function Footer() {
  return (
    <footer className="w-full border-t py-6 mt-10 bg-muted/40 backdrop-blur-sm">
      <div className="container mx-auto text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
}
