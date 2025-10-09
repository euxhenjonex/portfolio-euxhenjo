export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-foreground focus:text-background focus:rounded-full focus:font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-foreground"
    >
      Vai al contenuto principale
    </a>
  );
}
