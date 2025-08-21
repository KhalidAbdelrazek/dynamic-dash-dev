import { useEffect, useRef } from 'react';

export const useScrollAnimations = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          
          // Animate skill progress bars
          if (entry.target.classList.contains('skill-card')) {
            const progressBar = entry.target.querySelector('.skill-progress-bar') as HTMLElement;
            const width = progressBar?.getAttribute('data-width');
            if (progressBar && width) {
              setTimeout(() => {
                progressBar.style.width = width;
              }, 300);
            }
          }
        }
      });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return observerRef;
};