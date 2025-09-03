import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Target, Clock } from "lucide-react";
import consultingImage from "@/assets/consulting-team.jpg";

const About = () => {
  const stats = [
    {
      icon: Award,
      number: "8+",
      label: "Yıllık Deneyim",
      description: "E-ticaret sektöründe"
    },
    {
      icon: Users,
      number: "500+",
      label: "Mutlu Müşteri",
      description: "Başarılı projeler"
    },
    {
      icon: Target,
      number: "%95",
      label: "Başarı Oranı",
      description: "Hedeflere ulaşma"
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Destek",
      description: "Sürekli hizmet"
    }
  ];

  return (
    <section id="hakkımızda" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-corporate-navy">
              E-Ticaret Dünyasında
              <span className="block text-primary">Güvenilir Ortağınız</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              2016 yılından bu yana e-ticaret sektöründe faaliyet gösteren uzman ekibimiz, 
              500'den fazla projeye imza atmıştır. Müşterilerimizin dijital dönüşüm 
              yolculuklarında stratejik partner olarak yer alıyor, satışlarını ortalama 
              %300 artırmalarına yardımcı oluyoruz.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Teknolojinin hızla değiştiği günümüzde, e-ticaret trendlerini yakından takip 
              ediyor ve müşterilerimize en güncel çözümleri sunuyoruz. Amacımız, işinizin 
              dijital pazarda sürdürülebilir büyümesini sağlamaktır.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Ekibimizi Tanıyın
              </Button>
              <Button variant="outline" size="lg">
                Referanslarımız
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 text-center bg-gradient-card hover:shadow-card-hover transition-spring">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <stat.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-corporate-navy mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-corporate-navy mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={consultingImage} 
              alt="Profesyonel e-ticaret danışmanlık ekibi toplantı halinde"
              className="rounded-xl shadow-card w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-primary/10 rounded-xl"></div>
          </div>
          <div className="p-8 bg-gradient-hero rounded-2xl">
            <h3 className="text-3xl font-bold text-primary-foreground mb-4">
              Başarı Hikayenizi Birlikte Yazalım
            </h3>
            <p className="text-xl text-primary-foreground/90 mb-8">
              E-ticaret yolculuğunuzda yanınızda olan uzman ekibimizle, 
              hayalinizdeki başarıya ulaşın.
            </p>
            <Button variant="outline" size="lg" className="bg-background/20 border-primary-foreground/30 text-primary-foreground hover:bg-background/30">
              Projenizi Değerlendirelim
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;