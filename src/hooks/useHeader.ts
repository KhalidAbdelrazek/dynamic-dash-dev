import { useEffect, useState } from 'react';

export const useHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.body.offsetHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      // Update scroll progress
      setScrollProgress(scrollPercent);

      // Header scroll effect
      setIsScrolled(scrollTop > 50);

      // Hide on scroll down, show on scroll up
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (scrollTop > lastScrollY && scrollTop > 200) {
            setIsHidden(true);
          } else {
            setIsHidden(false);
          }
          setLastScrollY(scrollTop);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return { isScrolled, isHidden, scrollProgress };
};