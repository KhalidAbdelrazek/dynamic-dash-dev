import { MapPin, Languages, GraduationCap, BarChart, Brain, Smartphone, Monitor } from 'lucide-react';

const About = () => {
  const aboutItems = [
    {
      icon: <BarChart className="text-primary" size={20} />,
      title: "Data Analytics",
      description: "Python, SQL, Power BI, Excel for business insights"
    },
    {
      icon: <Brain className="text-primary" size={20} />,
      title: "Data Science", 
      description: "Machine learning, statistical analysis, and predictive modeling"
    },
    {
      icon: <Smartphone className="text-primary" size={20} />,
      title: "Mobile Development",
      description: "Flutter apps with clean architecture and modern patterns"
    },
    {
      icon: <Monitor className="text-primary" size={20} />,
      title: "Business Intelligence",
      description: "Interactive dashboards and KPI tracking systems"
    }
  ];

  const badges = [
    { icon: <MapPin size={16} className="text-primary" />, text: "Beni Suef, Egypt" },
    { icon: <Languages size={16} className="text-primary" />, text: "Arabic, English" },
    { icon: <GraduationCap size={16} className="text-primary" />, text: "Graduating 2026" }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, passion, and what drives me in the world of data and technology.
          </p>
        </div>

        {/* About Grid */}
        <div className="grid lg:grid-cols-2 gap-12 stagger animate-on-scroll">
          {/* Who I Am */}
          <div className="bg-card border border-border rounded-2xl p-8 hover-lift hover:shadow-lg transition-all duration-300 hover:border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-6">Who I Am</h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a final-year <strong className="text-foreground">Telecommunications Engineering</strong> student at Beni Suef University,
                graduating in 2026. My passion lies at the intersection of data analytics, data science, and mobile
                development.
              </p>
              <p>
                I specialize in transforming raw data into meaningful insights and building robust mobile applications
                using modern development practices and clean architecture principles.
              </p>
            </div>

            {/* Info Badges */}
            <div className="flex flex-wrap gap-3 mt-8">
              {badges.map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-2 bg-secondary/80 border border-border/50 rounded-lg text-sm font-medium hover:bg-primary/10 hover:border-primary/20 transition-all duration-300"
                >
                  {badge.icon}
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What I Do */}
          <div className="bg-card border border-border rounded-2xl p-8 hover-lift hover:shadow-lg transition-all duration-300 hover:border-primary/20">
            <h3 className="text-2xl font-bold text-primary mb-6">What I Do</h3>
            
            <div className="space-y-4">
              {aboutItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-primary/5 hover:shadow-sm transition-all duration-300 group"
                >
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;