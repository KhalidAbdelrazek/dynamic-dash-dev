import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Eye, TrendingUp } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Hi, I'm Khalid\nData Analyst and Flutter Developer";

  useEffect(() => {
    let index = 0;
    const timer = setTimeout(() => {
      const typeInterval = setInterval(() => {
        if (index < fullText.length) {
          setTypedText(fullText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typeInterval);
        }
      }, 50);

      return () => clearInterval(typeInterval);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-pulse" />
      </div>

      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary">
                <TrendingUp size={16} className="animate-bounce-subtle" />
                Data Analyst • Flutter Developer • Data Science
              </div>
            </div>

            {/* Title with Typing Effect */}
            <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {typedText.split('\n').map((line, index) => (
                <div key={index}>
                  {index === 0 ? (
                    <>
                      Hi, I'm <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Khalid</span>
                    </>
                  ) : (
                    <span className="text-muted-foreground text-4xl lg:text-5xl">{line}</span>
                  )}
                </div>
              ))}
              <span className="animate-pulse">|</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              I transform complex data into actionable insights and build beautiful mobile applications.
              Currently pursuing Telecommunications Engineering while specializing in data analytics and Flutter
              development.
            </p>

            {/* Status Indicator */}
            <div className="flex items-center gap-2 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
              <span className="text-sm font-medium text-success">Available for opportunities</span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button
                onClick={() => scrollToSection('#contact')}
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:shadow-glow group"
              >
                <Mail size={18} className="group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection('#projects')}
                className="border-primary/20 hover:bg-primary/10 hover:border-primary/40 group"
              >
                <Eye size={18} className="group-hover:scale-110 transition-transform" />
                View My Work
              </Button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto aspect-square rounded-3xl overflow-hidden border border-border/20 bg-gradient-to-br from-card to-secondary/50 animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/5" />
                <img
                  src="https://tse1.mm.bing.net/th/id/OIF.iLED2lgO6X6iRwd0NdNzAw?rs=1&pid=ImgDetMain&o=7&rm=3"
                  alt="Data Analytics Dashboard"
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white shadow-lg animate-bounce-subtle">
                  <TrendingUp size={24} />
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center text-white shadow-lg animate-bounce-subtle" style={{ animationDelay: '1s' }}>
                  📊
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl -z-10 animate-glow" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;