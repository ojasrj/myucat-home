import { GraduationCap, ClipboardCheck, FileText, Target, Handshake, BookOpen, ExternalLink, Play, Calendar, Youtube } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Timeline = () => {
  const isMobile = useIsMobile();

  const steps = [
    {
      number: 1,
      emoji: "1️⃣",
      title: "Insight into Medicine & UCAS",
      subtitle: "Start here — completely free",
      Icon: GraduationCap,
      description: "Before exams and applications, students need clarity, exposure, and confidence.",
      highlight: "Through our National Medical & Dental Society (NMDS), we provide:",
      features: [
        "Free virtual work experience",
        "Weekly supercurricular talks from doctors, dentists & medical students",
        "Competitions & essay prizes",
        "A supportive national peer community"
      ],
      links: [
        { label: "Explore NMDS", href: "#nmds-section", primary: true },
        { label: "View NMDS Events Calendar", href: "https://www.guessandflag.co.uk/nmds-events", icon: Calendar }
      ],
      footer: "Ideal for students in Years 9–12 who want to explore medicine or dentistry before committing."
    },
    {
      number: 2,
      emoji: "2️⃣",
      title: "UCAT Preparation",
      subtitle: "Build exam confidence with free and paid pathways",
      Icon: ClipboardCheck,
      sections: [
        {
          type: "free",
          title: "Start for free",
          items: [
            { 
              label: "FREE 2-Day UCAT Course", 
              badge: "March 2026 – coming soon",
              subtext: "Watch the full recording from last year:",
              videoLink: { label: "Watch Recording", href: "https://youtube.com/playlist?list=PLHSn2WpQr-wcnwBTc6QJzWDzE7j663DhL" }
            },
            { label: "Free UCAT resources & guides", subtext: "(Question walkthroughs, strategy guides, calculators & more)" }
          ],
          link: { label: "Explore Free UCAT Resources", href: "https://questions.ucat.com/courses" }
        },
        {
          type: "paid",
          title: "Progress to expert support",
          subtitle: "Choose the pathway that fits you best:",
          links: [
            { label: "UCAT Summer Programme", href: "https://www.guessandflag.co.uk/summer-programme" },
            { label: "UCAT 1-1 Tuition with Top-Scoring Tutors", href: "https://www.guessandflag.co.uk/ucat-1-1" }
          ],
          footer: "Both options run throughout the summer and are fully aligned with the updated UCAT format."
        }
      ]
    },
    {
      number: 3,
      emoji: "3️⃣",
      title: "Personal Statement",
      subtitle: "Tell your story — clearly and strategically",
      Icon: FileText,
      sections: [
        {
          type: "free",
          title: "Free support",
          items: [
            { 
              label: "Free Personal Statement Event", 
              badge: "September 2026 – coming soon",
              videoLink: { label: "Watch last year's recording", href: "#" }
            },
            { label: "Free Personal Statement Guide" }
          ],
          link: { label: "Access Free Personal Statement Resources", href: "#" }
        },
        {
          type: "paid",
          title: "Personalised feedback",
          links: [
            { label: "Book 1-1 Personal Statement Support", href: "https://www.guessandflag.co.uk/personal-statements" }
          ],
          footer: "Focused on reflection, clarity, and aligning your experiences with admissions criteria."
        }
      ]
    },
    {
      number: 4,
      emoji: "4️⃣",
      title: "Strategic Applications",
      subtitle: "Apply smart, not blindly",
      Icon: Target,
      description: "This is where strong candidates separate themselves.",
      highlight: "Our Strategic Application Guide helps students:",
      features: [
        "Choose universities based on data, scoring systems, and risk",
        "Avoid common UCAS mistakes",
        "Maximise interview chances",
        "Apply confidently with a clear strategy"
      ],
      links: [
        { label: "Explore the Strategic Application Guide", href: "https://www.guessandflag.co.uk/strategic-applications", primary: true }
      ],
      footer: "Essential for applicants aiming for competitive medical and dental schools."
    },
    {
      number: 5,
      emoji: "5️⃣",
      title: "Medical & Dental Interviews",
      subtitle: "For the most committed candidates",
      Icon: Handshake,
      sections: [
        {
          type: "paid",
          title: "Structured programmes",
          links: [
            { label: "Medical Interview Programme", href: "https://www.guessandflag.co.uk/medical-interview-programme" },
            { label: "Dental Interview Programme", href: "https://www.guessandflag.co.uk/dental-interview-programme" }
          ]
        },
        {
          type: "mixed",
          title: "Additional options",
          links: [
            { label: "1-1 Mock Interviews", href: "https://www.guessandflag.co.uk/interviews", subtext: "(Oxbridge, MMI & panel styles)" }
          ],
          freeItems: [
            "Free university-specific interview events",
            "Live sessions",
            "Recorded walkthroughs"
          ],
          additionalLinks: [
            { label: "View Interview Events Calendar", href: "#", icon: Calendar },
            { label: "Watch Past Interview Event Recordings", href: "#", icon: Play }
          ]
        }
      ],
      footer: "Delivered by doctors, dentists, and experienced interview panellists."
    },
    {
      number: 6,
      emoji: "6️⃣",
      title: "A Level Support",
      subtitle: "Academic foundations that support applications",
      Icon: BookOpen,
      sections: [
        {
          type: "paid",
          title: "Programmes",
          items: [
            { label: "A Level Programme", badge: "coming soon" }
          ]
        },
        {
          type: "free",
          title: "Free academic support",
          items: [
            { label: "Free A Level revision events" },
            { label: "Free A Level videos on YouTube" }
          ],
          additionalLinks: [
            { label: "View events calendar", href: "#", icon: Calendar },
            { label: "Visit our YouTube channel", href: "https://www.youtube.com/@MyUCAT", icon: Youtube }
          ]
        }
      ],
      footer: "Taught by A* medical students and qualified teachers with classroom experience."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-secondary to-white py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Your Path to Medicine & Dentistry
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A guided, evidence-based journey — with free support at every stage.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          {!isMobile && (
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />
          )}
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step number circle */}
                <div className={`${isMobile ? 'mb-4' : 'absolute left-0 top-0'}`}>
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.number}
                  </div>
                </div>
                
                {/* Content card */}
                <div className={`${isMobile ? '' : 'ml-24'} bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden`}>
                  {/* Header */}
                  <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 border-b border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                        <step.Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-primary-dark">{step.title}</h3>
                        <p className="text-primary/80 font-medium mt-1">{step.subtitle}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Body */}
                  <div className="p-6 space-y-6">
                    {/* Simple description format */}
                    {step.description && (
                      <p className="text-gray-600">{step.description}</p>
                    )}
                    
                    {step.highlight && (
                      <p className="font-semibold text-gray-800">{step.highlight}</p>
                    )}
                    
                    {step.features && (
                      <ul className="space-y-2">
                        {step.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-green-500 mt-0.5">✅</span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {step.links && !step.sections && (
                      <div className="flex flex-wrap gap-3">
                        {step.links.map((link, i) => (
                          <Button
                            key={i}
                            variant={link.primary ? "default" : "outline"}
                            className={link.primary ? "bg-primary hover:bg-primary-dark" : ""}
                            onClick={() => {
                              if (link.href.startsWith('#')) {
                                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                              } else {
                                window.open(link.href, '_blank');
                              }
                            }}
                          >
                            {link.icon && <link.icon className="w-4 h-4 mr-2" />}
                            {link.label}
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </Button>
                        ))}
                      </div>
                    )}
                    
                    {/* Sections format (free/paid) */}
                    {step.sections && (
                      <div className="space-y-6">
                        {step.sections.map((section, sectionIndex) => (
                          <div key={sectionIndex} className={`rounded-xl p-5 ${
                            section.type === 'free' ? 'bg-green-50 border border-green-200' :
                            section.type === 'paid' ? 'bg-blue-50 border border-blue-200' :
                            'bg-gray-50 border border-gray-200'
                          }`}>
                            <div className="flex items-center gap-2 mb-3">
                              {section.type === 'free' && <span className="text-lg">🆓</span>}
                              {section.type === 'paid' && <span className="text-lg">🚀</span>}
                              {section.type === 'mixed' && <span className="text-lg">🎯</span>}
                              <h4 className="font-bold text-gray-800">{section.title}</h4>
                            </div>
                            
                            {section.subtitle && (
                              <p className="text-gray-600 text-sm mb-3">{section.subtitle}</p>
                            )}
                            
                            {section.items && (
                              <ul className="space-y-3 mb-4">
                                {section.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="space-y-1">
                                    <div className="flex items-center gap-2 flex-wrap">
                                      <span className="font-medium text-gray-800">{item.label}</span>
                                      {item.badge && (
                                        <Badge variant="secondary" className="bg-amber-100 text-amber-800 text-xs">
                                          {item.badge}
                                        </Badge>
                                      )}
                                    </div>
                                    {item.subtext && (
                                      <p className="text-sm text-gray-600">{item.subtext}</p>
                                    )}
                                    {item.videoLink && (
                                      <Button
                                        variant="link"
                                        size="sm"
                                        className="p-0 h-auto text-primary"
                                        onClick={() => window.open(item.videoLink.href, '_blank')}
                                      >
                                        <Play className="w-4 h-4 mr-1" />
                                        {item.videoLink.label}
                                      </Button>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            )}
                            
                            {section.freeItems && (
                              <div className="mb-3">
                                <p className="text-sm font-medium text-green-700 mb-2">🆓 Free university-specific interview events:</p>
                                <ul className="text-sm text-gray-600 space-y-1 ml-4">
                                  {section.freeItems.slice(1).map((item, i) => (
                                    <li key={i}>• {item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            {section.links && (
                              <div className="flex flex-wrap gap-2 mb-3">
                                {section.links.map((link, linkIndex) => (
                                  <div key={linkIndex}>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className="bg-white hover:bg-primary hover:text-white"
                                      onClick={() => window.open(link.href, '_blank')}
                                    >
                                      {link.label}
                                      <ExternalLink className="w-3 h-3 ml-1" />
                                    </Button>
                                    {link.subtext && (
                                      <span className="text-xs text-gray-500 ml-2">{link.subtext}</span>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                            
                            {section.additionalLinks && (
                              <div className="flex flex-wrap gap-2 mt-3">
                                {section.additionalLinks.map((link, linkIndex) => (
                                  <Button
                                    key={linkIndex}
                                    variant="ghost"
                                    size="sm"
                                    className="text-primary hover:text-primary-dark"
                                    onClick={() => window.open(link.href, '_blank')}
                                  >
                                    {link.icon && <link.icon className="w-4 h-4 mr-1" />}
                                    {link.label}
                                  </Button>
                                ))}
                              </div>
                            )}
                            
                            {section.link && (
                              <Button
                                variant="outline"
                                size="sm"
                                className="bg-white hover:bg-primary hover:text-white mt-2"
                                onClick={() => window.open(section.link.href, '_blank')}
                              >
                                {section.link.label}
                                <ExternalLink className="w-3 h-3 ml-1" />
                              </Button>
                            )}
                            
                            {section.footer && (
                              <p className="text-sm text-gray-600 mt-3 italic">{section.footer}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Footer note */}
                    {step.footer && (
                      <p className="text-sm text-gray-500 italic border-t border-gray-100 pt-4">
                        💡 {step.footer}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
