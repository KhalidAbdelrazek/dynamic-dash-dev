import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useContactForm } from '@/hooks/useContactForm';
import { Mail, Phone, MapPin, Linkedin, Send, Loader2 } from 'lucide-react';

const Contact = () => {
  const { formData, isSubmitting, handleInputChange, handleSubmit } = useContactForm();

  const contactInfo = [
    { icon: <Mail size={20} className="text-primary" />, label: "Email", value: "khalidabdelrazk4@gmail.com", href: "mailto:khalidabdelrazk4@gmail.com" },
    { icon: <Phone size={20} className="text-primary" />, label: "Phone", value: "+20 101 556 5612", href: "tel:+201015565612" },
    { icon: <MapPin size={20} className="text-primary" />, label: "Location", value: "Beni Suef, Egypt" },
    { icon: <Linkedin size={20} className="text-primary" />, label: "LinkedIn", value: "LinkedIn Profile", href: "https://www.linkedin.com/in/khalid-abdelrazk-7719b32b3/" }
  ];

  const techSkills = ["Python", "SQL", "Power BI", "Excel", "Flutter", "Dart", "Firebase", "pandas", "NumPy", "scikit-learn", "Bloc", "REST API"];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to transform your data into insights or build your next mobile application? Let's discuss your project.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto stagger animate-on-scroll">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Enter your full name"
                      className="mt-2"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      placeholder="your.email@example.com"
                      className="mt-2"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    placeholder="What's this about?"
                    className="mt-2"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell me about your project or how I can help you..."
                    className="mt-2 min-h-32"
                    required
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full bg-gradient-to-r from-primary to-accent">
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-xl font-bold text-primary mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-primary/5 transition-colors">
                    {info.icon}
                    <div>
                      {info.href ? (
                        <a href={info.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-primary transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-sm font-medium">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-6">
              <h3 className="text-xl font-bold text-primary mb-6">Technical Expertise</h3>
              <div className="grid grid-cols-3 gap-2">
                {techSkills.map((skill, index) => (
                  <div key={index} className="px-3 py-2 bg-secondary/50 border border-border/50 rounded-lg text-xs font-medium text-center hover:bg-primary hover:text-white transition-all duration-300">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;