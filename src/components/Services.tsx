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
import ecommerceStrategyImage from "@/assets/ecommerce-strategy.jpg";
import salesOptimizationImage from "@/assets/sales-optimization.jpg";
import digitalMarketingImage from "@/assets/digital-marketing.jpg";
import mobileOptimizationImage from "@/assets/mobile-optimization.jpg";
import seoContentImage from "@/assets/seo-content.jpg";
import analyticsReportingImage from "@/assets/analytics-reporting.jpg";

const Services = () => {
  const services = [
    {
      icon: ShoppingCart,
      title: "E-Ticaret Stratejisi",
      description: "Kapsamlı e-ticaret stratejisi geliştirme ve pazar analizi ile işinizi doğru yönde büyütün.",
      features: ["Pazar Analizi", "Rekabet Araştırması", "Strateji Planlaması"],
      image: ecommerceStrategyImage,
      alt: "E-ticaret stratejisi planlama ekranında dijital grafikler ve pazar analizi"
    },
    {
      icon: TrendingUp,
      title: "Satış Optimizasyonu",
      description: "Mevcut satış süreçlerinizi optimize ederek dönüşüm oranlarınızı maksimum seviyeye çıkarın.",
      features: ["Conversion Optimizasyonu", "A/B Test Yönetimi", "Satış Hunisi Analizi"],
      image: salesOptimizationImage,
      alt: "Satış optimizasyonu dashboard'u ile dönüşüm oranı grafikleri ve A/B test sonuçları"
    },
    {
      icon: Target,
      title: "Dijital Pazarlama",
      description: "Etkili dijital pazarlama kampanyaları ile hedef kitlenize ulaşın ve marka bilinirliğinizi artırın.",
      features: ["Google Ads Yönetimi", "Social Media Marketing", "Email Marketing"],
      image: digitalMarketingImage,
      alt: "Dijital pazarlama kampanya arayüzü Google Ads ve sosyal medya analitiği ile"
    },
    {
      icon: Smartphone,
      title: "Mobil Optimizasyon",
      description: "Mobil kullanıcılarınız için optimize edilmiş deneyimler sunarak satışlarınızı artırın.",
      features: ["Responsive Tasarım", "Mobil UX/UI", "App Geliştirme"],
      image: mobileOptimizationImage,
      alt: "Mobil optimizasyon arayüzü responsive tasarım ve UX/UI elementleri ile"
    },
    {
      icon: Search,
      title: "SEO & İçerik",
      description: "Arama motorlarında üst sıralara çıkarak organik trafiğinizi ve satışlarınızı artırın.",
      features: ["SEO Optimizasyonu", "İçerik Stratejisi", "Blog Yönetimi"],
      image: seoContentImage,
      alt: "SEO ve içerik stratejisi çalışma alanı keyword araştırma araçları ile"
    },
    {
      icon: BarChart3,
      title: "Analitik & Raporlama",
      description: "Detaylı analitik raporları ile performansınızı takip edin ve data-driven kararlar alın.",
      features: ["Google Analytics", "Satış Raporları", "ROI Analizi"],
      image: analyticsReportingImage,
      alt: "Analitik ve raporlama dashboard'u Google Analytics ve ROI analiz grafikleri ile"
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
            <Card key={index} className="overflow-hidden bg-gradient-card hover:shadow-card-hover transition-spring group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-primary/20"></div>
                <div className="absolute top-4 left-4 p-3 bg-white/10 backdrop-blur-sm rounded-xl">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl font-semibold text-corporate-navy mb-4">{service.title}</h3>
                
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
              </div>
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