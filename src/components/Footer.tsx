import { Button } from "@/components/ui/button";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-corporate-navy text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg"></div>
              <span className="text-xl font-bold">E-Ticaret Plus</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              E-ticaret dünyasında 8+ yıllık deneyimimizle işinizi dijital pazarda 
              zirveye taşıyoruz. Uzman ekibimizle başarı hikayenizi yazın.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                <Twitter className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Hizmetlerimiz</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">E-Ticaret Stratejisi</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Satış Optimizasyonu</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Dijital Pazarlama</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Mobil Optimizasyon</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">SEO & İçerik</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Analitik & Raporlama</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Hızlı Linkler</h3>
            <ul className="space-y-3">
              <li><a href="#ana-sayfa" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Ana Sayfa</a></li>
              <li><a href="#hizmetler" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Hizmetler</a></li>
              <li><a href="#hakkımızda" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Hakkımızda</a></li>
              <li><a href="#iletisim" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">İletişim</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Blog</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">Referanslar</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">İletişim</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-primary-foreground/80">+90 (212) 555 0123</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-primary-foreground/80">info@eticaretplus.com</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Bültenimize Abone Olun</h4>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="E-posta adresiniz"
                  className="flex-1 px-3 py-2 bg-primary-foreground/10 border border-primary-foreground/20 rounded-md text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:border-primary"
                />
                <Button variant="hero" size="sm">
                  Abone Ol
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 E-Ticaret Plus. Tüm hakları saklıdır.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-smooth">
                Gizlilik Politikası
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-smooth">
                Kullanım Şartları
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground text-sm transition-smooth">
                Çerez Politikası
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;