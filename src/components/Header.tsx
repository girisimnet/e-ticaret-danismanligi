import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
            <span className="text-xl font-bold text-corporate-navy">E-Ticaret Plus</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#ana-sayfa" className="text-foreground hover:text-primary transition-smooth">Ana Sayfa</a>
            <a href="#hizmetler" className="text-foreground hover:text-primary transition-smooth">Hizmetler</a>
            <a href="#hakkımızda" className="text-foreground hover:text-primary transition-smooth">Hakkımızda</a>
            <a href="#iletisim" className="text-foreground hover:text-primary transition-smooth">İletişim</a>
          </div>
          
          <Button variant="hero" size="lg">
            Ücretsiz Danışmanlık
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;