import { useEffect } from 'react';
import { BarChart, Brain, Smartphone } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: <BarChart className="text-white" size={24} />,
      title: "Data Analytics",
      percentage: 85,
      description: "Proficient in Python (pandas, numpy), SQL databases, Power BI dashboards, and Excel analytics. Experienced in data cleaning, exploratory data analysis, and KPI development."
    },
    {
      icon: <Brain className="text-white" size={24} />,
      title: "Data Science",
      percentage: 75,
      description: "Skilled in scikit-learn, feature engineering, model evaluation, and data visualization. Experience with statistical analysis, machine learning algorithms, and predictive modeling."
    },
    {
      icon: <Smartphone className="text-white" size={24} />,
      title: "Flutter Development",
      percentage: 80,
      description: "Expert in Dart and Flutter framework, implementing Clean Architecture, MVVM patterns, Bloc/Cubit state management, REST API integration, Firebase, and local storage solutions."
    }
  ];

  useEffect(() => {
    // Initialize progress bars with 0 width
    const progressBars = document.querySelectorAll('.skill-progress-bar') as NodeListOf<HTMLElement>;
    progressBars.forEach(bar => {
      bar.style.width = '0%';
    });
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My expertise spans across data analysis, machine learning, and mobile application development.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 stagger animate-on-scroll">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card bg-card border border-border rounded-2xl p-8 hover-lift hover:shadow-xl transition-all duration-300 hover:border-primary/20 group animate-on-scroll"
            >
              {/* Skill Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">{skill.title}</h3>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-primary">{skill.percentage}%</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                {skill.description}
              </p>

              {/* Progress Bar */}
              <div className="relative">
                <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                  <div
                    className="skill-progress-bar h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out relative overflow-hidden"
                    data-width={`${skill.percentage}%`}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;