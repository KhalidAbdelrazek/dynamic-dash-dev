import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/useTheme';
import { useActiveSection } from '@/hooks/useActiveSection';
import { useHeader } from '@/hooks/useHeader';
import { Moon, Sun, Menu, X, Code } from 'lucide-react';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection();
  const { isScrolled, isHidden, scrollProgress } = useHeader();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  const scrollToSection = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-secondary/50 z-[1001]">
        <div 
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Header */}
      <header 
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
          isHidden ? '-translate-y-full' : 'translate-y-0'
        } ${
          isScrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between h-20 px-6">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#home')}
            className="flex items-center gap-3 font-bold text-xl text-foreground hover:text-primary transition-colors group"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
              <Code size={16} />
            </div>
            <span>Khalid Abdelrazk</span>
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className={`relative font-medium transition-all duration-300 py-2 hover:text-primary ${
                    activeSection === link.href.slice(1) ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      activeSection === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="w-10 h-10 hover:bg-accent/10 hover:scale-110 transition-all"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden w-10 h-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden glass-effect border-t border-border/20 transition-all duration-300 ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <ul className="container mx-auto py-4 px-6 space-y-2">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollToSection(link.href)}
                  className={`block w-full text-left py-3 px-4 rounded-lg font-medium transition-all duration-300 hover:bg-accent/10 hover:text-primary ${
                    activeSection === link.href.slice(1) ? 'text-primary bg-accent/5' : 'text-muted-foreground'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;