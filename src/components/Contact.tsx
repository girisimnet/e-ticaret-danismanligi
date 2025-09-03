import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      content: "+90 (212) 555 0123",
      description: "Hızlı iletişim için"
    },
    {
      icon: Mail,
      title: "E-posta",
      content: "info@eticaretplus.com",
      description: "24 saat içinde dönüş"
    },
    {
      icon: MapPin,
      title: "Adres",
      content: "Maslak, İstanbul",
      description: "Merkez ofisimiz"
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      content: "09:00 - 18:00",
      description: "Pazartesi - Cuma"
    }
  ];

  return (
    <section id="iletisim" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-corporate-navy">
            İletişime Geçin
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            E-ticaret projeniz hakkında konuşmak için bize ulaşın. 
            Ücretsiz danışmanlık hizmeti ile başlayalım.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="p-6 bg-gradient-card hover:shadow-card-hover transition-spring">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-corporate-navy mb-1">
                        {info.title}
                      </h3>
                      <p className="text-corporate-navy font-medium mb-1">
                        {info.content}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-gradient-card">
              <h3 className="text-2xl font-bold text-corporate-navy mb-6">
                Ücretsiz Danışmanlık Talep Edin
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-corporate-navy mb-2">
                      Ad Soyad *
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Adınızı ve soyadınızı girin"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-corporate-navy mb-2">
                      E-posta *
                    </label>
                    <Input 
                      type="email" 
                      placeholder="E-posta adresinizi girin"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-corporate-navy mb-2">
                      Telefon
                    </label>
                    <Input 
                      type="tel" 
                      placeholder="Telefon numaranızı girin"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-corporate-navy mb-2">
                      Şirket
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Şirket adınızı girin"
                      className="w-full"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-corporate-navy mb-2">
                    Proje Detayları *
                  </label>
                  <Textarea 
                    placeholder="Projeniz hakkında detayları paylaşın..."
                    className="w-full h-32"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="lg" className="flex-1">
                    Danışmanlık Talebi Gönder
                  </Button>
                  <Button variant="outline" size="lg">
                    Telefon ile Görüşme
                  </Button>
                </div>
              </form>
              
              <div className="mt-8 p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
                <p className="text-sm text-corporate-gray">
                  <strong>Not:</strong> Formunuzu gönderdikten sonra 24 saat içinde 
                  size geri dönüş yapacağız. Acil durumlar için direkt telefon ile iletişime geçebilirsiniz.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;