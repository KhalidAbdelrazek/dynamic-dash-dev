import { useState } from 'react';

export type ProjectCategory = 'all' | 'data' | 'flutter';

export const useProjectFilter = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const filterProjects = (filter: ProjectCategory) => {
    setActiveFilter(filter);
    
    const projectCards = document.querySelectorAll('[data-category]') as NodeListOf<HTMLElement>;
    
    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      
      if (filter === 'all' || category === filter) {
        card.style.display = 'block';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 100);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  };

  return { activeFilter, filterProjects };
};