import { Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Scientist Intern",
      company: "Integrated Diagnostics Holdings (IDH)",
      period: "August 2025 – Present",
      description: "Working on exploratory data analysis, KPI development, and dashboard creation for healthcare analytics. Collaborating with cross-functional teams to define metrics and deliver actionable insights for business stakeholders."
    },
    {
      title: "Technology Intern",
      company: "National Telecommunication Institute (NTI)",
      period: "July 2025 – August 2025",
      description: "Participated in hands-on projects focused on data analysis and telecommunications technology. Gained experience in team collaboration, technical reporting, and data-driven problem solving."
    },
    {
      title: "IT Intern",
      company: "2B Company",
      period: "2023",
      description: "Provided IT department support and gained exposure to enterprise software systems including Siebel. Learned about data workflows, business process automation, and enterprise-level system management."
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey through internships and professional opportunities in data science and technology.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border" />
            
            {/* Experience Items */}
            <div className="space-y-12 stagger animate-on-scroll">
              {experiences.map((exp, index) => (
                <div key={index} className="relative flex items-start gap-8">
                  {/* Timeline Dot */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>

                  {/* Experience Card */}
                  <div className="flex-1 bg-card border border-border rounded-2xl p-6 hover-lift hover:shadow-lg transition-all duration-300 hover:border-primary/20">
                    <h4 className="text-xl font-bold text-primary mb-2">{exp.title}</h4>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Calendar size={16} />
                      <span className="font-medium">{exp.period} • {exp.company}</span>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
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

export default Experience;