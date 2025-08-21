import { useEffect } from 'react';
import { Toaster } from "@/components/ui/toaster";
import { useScrollAnimations } from '@/hooks/useScrollAnimations';
import Header from '@/components/portfolio/Header';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Projects from '@/components/portfolio/Projects';
import Experience from '@/components/portfolio/Experience';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';

const Index = () => {
  const scrollAnimationsRef = useScrollAnimations();

  useEffect(() => {
    // Loading screen
    const loading = document.createElement('div');
    loading.className = 'fixed inset-0 bg-background flex items-center justify-center z-[9999]';
    loading.innerHTML = '<div class="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>';
    document.body.appendChild(loading);

    setTimeout(() => {
      loading.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(loading);
      }, 300);
    }, 1000);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </>
  );
};

export default Index;
