import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.pageYOffset > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/khalidabdelrazek", label: "GitHub" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/khalid-abdelrazk-7719b32b3/", label: "LinkedIn" },
    { icon: <Mail size={20} />, href: "mailto:khalidabdelrazk4@gmail.com", label: "Email" },
    { icon: <Phone size={20} />, href: "tel:+201015565612", label: "Phone" }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-secondary/50 border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex justify-center gap-4 mb-8">
              {socialLinks.map((link, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="icon"
                  asChild
                  className="w-12 h-12 hover:bg-primary hover:text-white hover:border-primary hover:-translate-y-1 transition-all duration-300"
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                </Button>
              ))}
            </div>

            <p className="text-muted-foreground">
              © 2025 Khalid Abdelrazk. Designed and built with modern web technologies.<br />
              Specializing in Data Analytics and Flutter Development.
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <Button
        size="icon"
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-12 h-12 rounded-full bg-primary hover:bg-primary-hover shadow-lg transition-all duration-300 z-50 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp size={20} />
      </Button>
    </>
  );
};

export default Footer;