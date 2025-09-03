import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  ShoppingCart, 
  TrendingUp, 
  Target, 
  Smartphone, 
  Search, 
  BarChart3,
  ArrowRight 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "E-Ticaret Stratejisi",
      description: "Kapsamlı e-ticaret stratejisi geliştirme ve pazar analizi ile işinizi doğru yönde büyütün.",
      features: ["Pazar Analizi", "Rekabet Araştırması", "Strateji Planlaması"]
    },
    {
      icon: TrendingUp,
      title: "Satış Optimizasyonu",
      description: "Mevcut satış süreçlerinizi optimize ederek dönüşüm oranlarınızı maksimum seviyeye çıkarın.",
      features: ["Conversion Optimizasyonu", "A/B Test Yönetimi", "Satış Hunisi Analizi"]
    },
    {
      icon: Target,
      title: "Dijital Pazarlama",
      description: "Etkili dijital pazarlama kampanyaları ile hedef kitlenize ulaşın ve marka bilinirliğinizi artırın.",
      features: ["Google Ads Yönetimi", "Social Media Marketing", "Email Marketing"]
    },
    {
      icon: Smartphone,
      title: "Mobil Optimizasyon",
      description: "Mobil kullanıcılarınız için optimize edilmiş deneyimler sunarak satışlarınızı artırın.",
      features: ["Responsive Tasarım", "Mobil UX/UI", "App Geliştirme"]
    },
    {
      icon: Search,
      title: "SEO & İçerik",
      description: "Arama motorlarında üst sıralara çıkarak organik trafiğinizi ve satışlarınızı artırın.",
      features: ["SEO Optimizasyonu", "İçerik Stratejisi", "Blog Yönetimi"]
    },
    {
      icon: BarChart3,
      title: "Analitik & Raporlama",
      description: "Detaylı analitik raporları ile performansınızı takip edin ve data-driven kararlar alın.",
      features: ["Google Analytics", "Satış Raporları", "ROI Analizi"]
    }
  ];

  return (
    <section id="hizmetler" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-corporate-navy">
            Profesyonel E-Ticaret Hizmetleri
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            E-ticaret işinizin her alanında uzman desteği alın. Stratejiden uygulamaya, 
            analizden optimizasyona kadar tüm süreçlerde yanınızdayız.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-8 bg-gradient-card hover:shadow-card-hover transition-spring group">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-primary/10 rounded-xl mr-4 group-hover:bg-primary/20 transition-smooth">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-corporate-navy">{service.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-corporate-gray">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full group">
                Detaylı Bilgi
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button variant="hero" size="lg">
            Tüm Hizmetleri İnceleyin
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;