import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { useProjectFilter, type ProjectCategory } from '@/hooks/useProjectFilter';

const Projects = () => {
  const { activeFilter, filterProjects } = useProjectFilter();

  const filterButtons: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Data Analytics', value: 'data' },
    { label: 'Flutter Apps', value: 'flutter' }
  ];

  const projects = [
    // Data Analytics Projects
    {
      category: 'data',
      title: 'Real Estate Market Analysis',
      description: 'Comprehensive Power BI dashboard analyzing property market trends, pricing patterns, and regional performance metrics with interactive filters for stakeholder insights.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
      tags: ['Power BI', 'DAX', 'Data Visualization', 'Business Intelligence'],
      github: 'https://github.com/KhalidAbdelrazek/Real-Estate-Analysis-Using-Power-Bi',
      demo: '#'
    },
    {
      category: 'data',
      title: 'Bike Sales Analytics',
      description: 'Advanced Excel analysis identifying customer demographics, purchasing patterns, and sales drivers. Features dynamic pivot tables and interactive dashboard visualizations.',
      image: 'https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?q=80&w=800&auto=format&fit=crop',
      tags: ['Excel', 'Pivot Tables', 'Dashboard Design', 'Statistical Analysis'],
      github: 'https://github.com/KhalidAbdelrazek/Bike-Buyer-Analysis-using-Excel'
    },
    {
      category: 'data',
      title: 'COVID-19 Impact Analysis',
      description: 'Python-based exploratory data analysis of pandemic trends, regional comparisons, and statistical modeling using pandas, matplotlib, and seaborn for comprehensive insights.',
      image: 'https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?q=80&w=800&auto=format&fit=crop',
      tags: ['Python', 'pandas', 'Data Visualization', 'Statistical Analysis'],
      github: 'https://github.com/KhalidAbdelrazek/Covid-19-Analysis'
    },
    {
      category: 'data',
      title: 'IMDB Movies Analysis',
      description: 'Power BI dashboard analyzing IMDB movie ratings, genres, directors, and audience trends. Interactive insights into top-rated movies, box office performance, and industry patterns.',
      image: 'https://images.unsplash.com/photo-1517602302552-471fe67acf66?q=80&w=800&auto=format&fit=crop',
      tags: ['Power BI', 'Data Analysis', 'Visualization', 'IMDB'],
      github: 'https://github.com/KhalidAbdelrazek/IMDB-Analysis-Using-Power-Bi'
    },
    // Flutter Projects
    {
      category: 'flutter',
      title: 'Islami App',
      description: 'A Quran, Azkar, and prayer time app built with Flutter, supporting dark/light mode.',
      image: 'https://www.creativefabrica.com/wp-content/uploads/2021/04/03/Islam-App-Graphics-10341777-1.jpg',
      tags: ['Flutter', 'Dart', 'Dark Mode'],
      github: 'https://github.com/KhalidAbdelrazek/Islami-App'
    },
    {
      category: 'flutter',
      title: 'Evently App',
      description: 'Event booking and management app with Firebase authentication and real-time updates.',
      image: 'https://tse4.mm.bing.net/th/id/OIP.yrpwdI5OTPIVoMA-vPj35gHaFy?rs=1&pid=ImgDetMain&o=7&rm=3',
      tags: ['Flutter', 'Firebase', 'Real-time'],
      github: 'https://github.com/KhalidAbdelrazek/Evently-App'
    },
    {
      category: 'flutter',
      title: 'E-Commerce App',
      description: 'Shopping app with cart, authentication, and API integration for product listings.',
      image: 'https://www.quytech.com/blog/wp-content/uploads/2023/12/advanced-features-of-ecommerce-app.png',
      tags: ['Flutter', 'API', 'Authentication'],
      github: 'https://github.com/KhalidAbdelrazek/E-Commerce-App'
    },
    {
      category: 'flutter',
      title: 'Movies App',
      description: 'App displaying trending movies, details, and watchlists using API integration.',
      image: 'https://tse2.mm.bing.net/th/id/OIP.kqta7RB7qDndAr8ib_hfzwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3',
      tags: ['Flutter', 'API', 'Watchlist'],
      github: 'https://github.com/KhalidAbdelrazek/Movies-App'
    },
    {
      category: 'flutter',
      title: 'News App',
      description: 'Real-time news app fetching articles via API, with category-based filtering.',
      image: 'https://images.unsplash.com/photo-1505238680356-667803448bb6?q=80&w=800&auto=format&fit=crop',
      tags: ['Flutter', 'API', 'News'],
      github: 'https://github.com/KhalidAbdelrazek/News-App'
    },
    {
      category: 'flutter',
      title: 'Traveler-Assistant App',
      description: 'Full Travel Assistant app with features like trip planning, hotel booking, Chatbot for travel assistance and itinerary management.',
      image: 'https://tse1.mm.bing.net/th/id/OIP.xr-_BDYa3SNKj60rDx0T-AHaEK?rs=1&pid=ImgDetMain&o=7&rm=3',
      tags: ['Flutter', 'Firebase', 'Navigation'],
      github: 'https://github.com/KhalidAbdelrazek/Traveler-App'
    },
    {
      category: 'flutter',
      title: 'Mon Hopital App',
      description: 'Hospital management app enabling doctors to schedule appointments, view patient history, and manage analyses.',
      image: 'https://www.brainvire.com/blog/wp-content/uploads/2016/05/5-Features-That-Hospitals-Should-include-In-The-Mobile-App.jpg',
      tags: ['Flutter', 'Firebase', 'Healthcare'],
      github: 'https://github.com/KhalidAbdelrazek/Mon-Hopital-App'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work in data analysis, business intelligence, and mobile application development.
          </p>
        </div>

        {/* Project Filter */}
        <div className="flex justify-center gap-4 mb-12 animate-on-scroll">
          {filterButtons.map((button) => (
            <Button
              key={button.value}
              variant={activeFilter === button.value ? "default" : "outline"}
              onClick={() => filterProjects(button.value)}
              className={`px-6 py-2 ${
                activeFilter === button.value
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-primary/10 hover:border-primary/40'
              }`}
            >
              {button.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger animate-on-scroll">
          {projects.map((project, index) => (
            <article
              key={index}
              data-category={project.category}
              className="bg-card border border-border rounded-2xl overflow-hidden hover-lift hover:shadow-xl transition-all duration-300 hover:border-primary/20 group"
            >
              {/* Project Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-accent/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button
                    size="sm"
                    asChild
                    className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/20"
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-white"
                    >
                      <Github size={16} />
                    </a>
                  </Button>
                  {project.demo && (
                    <Button
                      size="sm"
                      asChild
                      className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/20"
                    >
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-white"
                      >
                        <ExternalLink size={16} />
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary-hover transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-secondary/80 border border-border/50 rounded-lg text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:border-primary/20 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;