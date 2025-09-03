import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, ShoppingCart, BarChart3 } from "lucide-react";
import heroImage from "@/assets/hero-ecommerce.jpg";

const Hero = () => {
  return (
    <section id="ana-sayfa" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-hero"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center space-x-4 mb-8">
            <div className="p-3 bg-primary/10 rounded-full">
              <TrendingUp className="w-6 h-6 text-primary" />
            </div>
            <div className="p-3 bg-primary/10 rounded-full">
              <ShoppingCart className="w-6 h-6 text-primary" />
            </div>
            <div className="p-3 bg-primary/10 rounded-full">
              <BarChart3 className="w-6 h-6 text-primary" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-primary-foreground">
            E-Ticaret İşinizi
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Zirveye Taşıyın
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Uzman danışmanlarımızla e-ticaret stratejilerinizi geliştirin, 
            satışlarınızı artırın ve dijital pazarda öncü olun.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="group">
              Hemen Başlayın
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="bg-background/20 border-primary-foreground/30 text-primary-foreground hover:bg-background/30">
              Başarı Hikayelerimiz
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-background/10 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary-foreground mb-2">500+</div>
              <div className="text-primary-foreground/80">Başarılı Proje</div>
            </div>
            <div className="p-6 bg-background/10 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary-foreground mb-2">%300</div>
              <div className="text-primary-foreground/80">Ortalama Satış Artışı</div>
            </div>
            <div className="p-6 bg-background/10 rounded-xl backdrop-blur-sm">
              <div className="text-3xl font-bold text-primary-foreground mb-2">24/7</div>
              <div className="text-primary-foreground/80">Destek Hizmeti</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;