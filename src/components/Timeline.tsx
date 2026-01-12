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
      mobileTitle: "Medicine & UCAS Insight",
      subtitle: "Start here - completely free",
      mobileSubtitle: "Free starting point",
      Icon: GraduationCap,
      description: "Before exams and applications, students need clarity, exposure, and confidence.",
      mobileDescription: "Build clarity and confidence before applications.",
      highlight: "Through our National Medical & Dental Society (NMDS), we provide:",
      mobileHighlight: "NMDS provides:",
      features: [
        "Free virtual work experience",
        "Weekly supercurricular talks from doctors, dentists & medical students",
        "Competitions & essay prizes",
        "A supportive national peer community"
      ],
      mobileFeatures: [
        "Virtual work experience",
        "Weekly talks from doctors & students",
        "Competitions & essay prizes",
        "Peer community"
      ],
      links: [
        { label: "Explore NMDS", mobileLabel: "NMDS", href: "https://medsoc.myucat.co.uk/", primary: true },
        { label: "View NMDS Events Calendar", mobileLabel: "Events", href: "https://medsoc.myucat.co.uk/events", icon: Calendar }
      ],
      footer: "Ideal for students in Years 9–12 who want to explore medicine or dentistry before committing.",
      mobileFooter: "For Years 9–12 exploring medicine or dentistry."
    },
    {
      number: 2,
      emoji: "2️⃣",
      title: "UCAT Preparation",
      mobileTitle: "UCAT Prep",
      subtitle: "Build exam confidence with free and paid pathways",
      mobileSubtitle: "Free & paid pathways",
      Icon: ClipboardCheck,
      sections: [
        {
          type: "free",
          title: "Start for free",
          mobileTitle: "Free",
          items: [
            { 
              label: "FREE 2-Day UCAT Course", 
              mobileLabel: "FREE 2-Day Course",
              badge: "March 2026 – coming soon",
              mobileBadge: "March 2026",
              subtext: "Watch the full recording from last year:",
              mobileSubtext: "Watch last year's recording:",
              videoLink: { label: "Watch Recording", mobileLabel: "Watch", href: "https://youtube.com/playlist?list=PLHSn2WpQr-wcnwBTc6QJzWDzE7j663DhL" }
            },
            { label: "Free UCAT resources & guides", mobileLabel: "Free resources", subtext: "(Question walkthroughs, strategy guides, calculators & more)", mobileSubtext: "" }
          ],
          freeResourceLinks: [
            { label: "UCAT Guides", mobileLabel: "Guides", href: "https://learn.myucat.co.uk/ucat-resources" },
            { label: "UCAT Course", mobileLabel: "Course", href: "https://questions.ucat.com/courses" },
            { label: "Score Calculator", mobileLabel: "Calculator", href: "https://myucat.co.uk/pages/ucat-score-converter" },
            { label: "Qbank", mobileLabel: "Qbank", href: "https://questions.ucat.com/" }
          ]
        },
        {
          type: "paid",
          title: "Progress to expert support",
          mobileTitle: "Expert support",
          subtitle: "Choose the pathway that fits you best:",
          mobileSubtitle: "Choose your pathway:",
          links: [
            { label: "UCAT Summer Programme", mobileLabel: "Summer Programme", href: "https://learn.myucat.co.uk/summer-programme" },
            { label: "UCAT 1-1 Tuition with Top-Scoring Tutors", mobileLabel: "1-1 Tuition", href: "https://learn.myucat.co.uk/ucat-1-1" }
          ],
          footer: "Both options run throughout the summer and are fully aligned with the updated UCAT format.",
          mobileFooter: "Summer options aligned with UCAT format."
        }
      ]
    },
    {
      number: 3,
      emoji: "3️⃣",
      title: "Personal Statement",
      mobileTitle: "Personal Statement",
      subtitle: "Tell your story - clearly and strategically",
      mobileSubtitle: "Tell your story strategically",
      Icon: FileText,
      sections: [
        {
          type: "free",
          title: "Free support",
          mobileTitle: "Free",
          items: [
            { 
              label: "Free Personal Statement Event", 
              mobileLabel: "Free PS Event",
              badge: "September 2026 – coming soon",
              mobileBadge: "Sept 2026",
              videoLink: { label: "Watch last year's recording", mobileLabel: "Watch", href: "https://www.youtube.com/watch?v=w_ILIsm0cqA" }
            },
            { label: "Free Personal Statement Guide", mobileLabel: "Free Guide" }
          ],
          link: { label: "Access Free Personal Statement Guide", mobileLabel: "Free Guide", href: "https://drive.google.com/file/d/1Rqsxn1pxXbFPD3GjjTRD1JG6w_Ut6ywx/view?usp=sharing" }
        },
        {
          type: "paid",
          title: "Personalised feedback",
          mobileTitle: "Feedback",
          links: [
            { label: "Book 1-1 Personal Statement Support", mobileLabel: "1-1 Support", href: "https://learn.myucat.co.uk/personal-statements" }
          ],
          footer: "Focused on reflection, clarity, and aligning your experiences with admissions criteria.",
          mobileFooter: "Align experiences with admissions criteria."
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
      highlight: "Our Strategic Application Guide shows you:",
      features: [
        "Exactly how each medical and dental school scores your application",
        "How universities use UCAT scores - thresholds, rankings, and weighting",
        "Maximise interview chances",
        "Apply confidently with a clear strategy"
      ],
      links: [
        { label: "Explore the Strategic Application Guide", mobileLabel: "Application Guide", href: "https://learn.myucat.co.uk/strategic-applications", primary: true }
      ],
      footer: "Essential for applicants aiming for competitive medical and dental schools."
    },
    {
      number: 5,
      emoji: "5️⃣",
      title: "Medical & Dental Interviews",
      subtitle: "Prepare for the interviews you've earned",
      Icon: Handshake,
      sections: [
        {
          type: "paid",
          title: "Structured programmes",
          mobileTitle: "Programmes",
          links: [
            { label: "Medical Interview Programme", mobileLabel: "Medical", href: "https://learn.myucat.co.uk/medical-interview-programme" },
            { label: "Dental Interview Programme", mobileLabel: "Dental", href: "https://learn.myucat.co.uk/dental-interview-programme" }
          ]
        },
        {
          type: "mixed",
          title: "Additional options",
          mobileTitle: "More options",
          links: [
            { label: "1-1 Mock Interviews", mobileLabel: "1-1 Mocks", href: "https://learn.myucat.co.uk/interviews", subtext: "(Oxbridge, MMI & panel styles)", mobileSubtext: "" }
          ],
          freeItems: [
            "Free university-specific interview events",
            "Live sessions",
            "Recorded walkthroughs"
          ],
          mobileFreeItems: [
            "Free interview events",
            "Live sessions",
            "Recordings"
          ],
          additionalLinks: [
            { label: "View Interview Events Calendar", mobileLabel: "Events", href: "https://medsoc.myucat.co.uk/events", icon: Calendar },
            { label: "Watch Past Interview Event Recordings", mobileLabel: "Recordings", href: "https://questions.ucat.com/courses", icon: Play }
          ]
        }
      ],
      footer: "Experienced interview tutoring team including former panelists."
    },
    {
      number: 6,
      emoji: "6️⃣",
      title: "A Level Support",
      mobileTitle: "A Levels",
      subtitle: "Academic foundations that support applications",
      mobileSubtitle: "Academic foundations",
      Icon: BookOpen,
      sections: [
        {
          type: "paid",
          title: "Programmes",
          mobileTitle: "Programmes",
          items: [
            { label: "A Level Programme", mobileLabel: "A Level Programme", badge: "coming soon", mobileBadge: "soon" }
          ]
        },
        {
          type: "free",
          title: "Free academic support",
          mobileTitle: "Free support",
          items: [
            { label: "Free A Level revision events", mobileLabel: "Revision events" },
            { label: "Free A Level videos on YouTube", mobileLabel: "YouTube videos" }
          ],
          additionalLinks: [
            { label: "View events calendar", mobileLabel: "Events", href: "https://medsoc.myucat.co.uk/events", icon: Calendar },
            { label: "Visit our YouTube channel", mobileLabel: "YouTube", href: "https://www.youtube.com/@myucatadmissions", icon: Youtube }
          ]
        }
      ],
      footer: "Taught by A* medical students and qualified teachers with classroom experience.",
      mobileFooter: "By A* students & qualified teachers."
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
            A guided, evidence-based journey - with free support at every stage.
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
                {/* Step number circle - smaller on mobile */}
                <div className={`${isMobile ? 'mb-3' : 'absolute left-0 top-0'}`}>
                  <div className={`${isMobile ? 'w-10 h-10 text-sm' : 'w-16 h-16 text-xl'} bg-primary rounded-full flex items-center justify-center text-white font-bold shadow-lg`}>
                    {step.number}
                  </div>
                </div>
                
                {/* Content card */}
                <div className={`${isMobile ? '' : 'ml-24'} bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden`}>
                  {/* Header */}
                  <div className={`bg-gradient-to-r from-primary/5 to-primary/10 ${isMobile ? 'p-4' : 'p-6'} border-b border-gray-100`}>
                    <div className="flex items-start gap-3 md:gap-4">
                      <div className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12'} bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <step.Icon className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'} text-primary`} />
                      </div>
                      <div>
                        <h3 className={`${isMobile ? 'text-lg' : 'text-2xl'} font-bold text-primary-dark`}>
                          {isMobile && step.mobileTitle ? step.mobileTitle : step.title}
                        </h3>
                        <p className={`text-primary/80 font-medium mt-1 ${isMobile ? 'text-sm' : ''}`}>
                          {isMobile && step.mobileSubtitle ? step.mobileSubtitle : step.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Body */}
                  <div className={`${isMobile ? 'p-4 space-y-4' : 'p-6 space-y-6'}`}>
                    {/* Simple description format */}
                    {step.description && (
                      <p className={`text-gray-600 ${isMobile ? 'text-sm' : ''}`}>
                        {isMobile && step.mobileDescription ? step.mobileDescription : step.description}
                      </p>
                    )}
                    
                    {step.highlight && (
                      <p className={`font-semibold text-gray-800 ${isMobile ? 'text-sm' : ''}`}>
                        {isMobile && step.mobileHighlight ? step.mobileHighlight : step.highlight}
                      </p>
                    )}
                    
                    {step.features && (
                      <ul className="space-y-2">
                        {(isMobile && step.mobileFeatures ? step.mobileFeatures : step.features).map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className={`text-emerald-500 mt-0.5 ${isMobile ? 'text-sm' : ''}`}>✅</span>
                            <span className={`text-gray-700 ${isMobile ? 'text-sm' : ''}`}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    
                    {step.links && !step.sections && (
                      <div className="flex flex-wrap gap-2 md:gap-3">
                        {step.links.map((link, i) => (
                          <Button
                            key={i}
                            variant={link.primary ? "default" : "outline"}
                            size={isMobile ? "sm" : "default"}
                            className={link.primary ? "bg-primary/80 hover:bg-primary text-white" : ""}
                            onClick={() => {
                              if (link.href.startsWith('#')) {
                                document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                              } else {
                                window.open(link.href, '_blank');
                              }
                            }}
                          >
                            {link.icon && <link.icon className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} mr-1 md:mr-2`} />}
                            {isMobile && link.mobileLabel ? link.mobileLabel : link.label}
                            <ExternalLink className={`${isMobile ? 'w-3 h-3 ml-1' : 'w-4 h-4 ml-2'}`} />
                          </Button>
                        ))}
                      </div>
                    )}
                    
                    {/* Sections format (free/paid) */}
                    {step.sections && (
                      <div className={`${isMobile ? 'space-y-4' : 'space-y-6'}`}>
                        {step.sections.map((section, sectionIndex) => (
                          <div key={sectionIndex} className={`rounded-xl ${isMobile ? 'p-3' : 'p-5'} ${
                            section.type === 'free' ? 'bg-emerald-50 border border-emerald-200' :
                            section.type === 'paid' ? 'bg-primary/5 border border-primary/20' :
                            'bg-secondary/50 border border-primary/10'
                          }`}>
                            <div className="flex items-center gap-2 mb-2 md:mb-3">
                              {section.type === 'free' && <span className={isMobile ? 'text-base' : 'text-lg'}>🆓</span>}
                              {section.type === 'paid' && <span className={isMobile ? 'text-base' : 'text-lg'}>🚀</span>}
                              {section.type === 'mixed' && <span className={isMobile ? 'text-base' : 'text-lg'}>🎯</span>}
                              <h4 className={`font-bold text-gray-800 ${isMobile ? 'text-sm' : ''}`}>
                                {isMobile && section.mobileTitle ? section.mobileTitle : section.title}
                              </h4>
                            </div>
                            
                            {section.subtitle && (
                              <p className={`text-gray-600 mb-2 md:mb-3 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                                {isMobile && section.mobileSubtitle ? section.mobileSubtitle : section.subtitle}
                              </p>
                            )}
                            
                            {section.items && (
                              <ul className={`${isMobile ? 'space-y-2 mb-3' : 'space-y-3 mb-4'}`}>
                                {section.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="space-y-1">
                                    <div className="flex items-center gap-2 flex-wrap">
                                      <span className={`font-medium text-gray-800 ${isMobile ? 'text-sm' : ''}`}>
                                        {isMobile && item.mobileLabel ? item.mobileLabel : item.label}
                                      </span>
                                      {item.badge && (
                                        <Badge variant="secondary" className="bg-amber-100 text-amber-800 text-xs">
                                          {isMobile && item.mobileBadge ? item.mobileBadge : item.badge}
                                        </Badge>
                                      )}
                                    </div>
                                    {item.subtext && (isMobile ? item.mobileSubtext !== '' : true) && (
                                      <p className={`text-gray-600 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                                        {isMobile && item.mobileSubtext !== undefined ? item.mobileSubtext : item.subtext}
                                      </p>
                                    )}
                                    {item.videoLink && (
                                      <Button
                                        variant="link"
                                        size="sm"
                                        className={`p-0 h-auto text-primary ${isMobile ? 'text-xs' : ''}`}
                                        onClick={() => window.open(item.videoLink.href, '_blank')}
                                      >
                                        <Play className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} mr-1`} />
                                        {isMobile && item.videoLink.mobileLabel ? item.videoLink.mobileLabel : item.videoLink.label}
                                      </Button>
                                    )}
                                  </li>
                                ))}
                              </ul>
                            )}

                            {section.freeResourceLinks && (
                              <div className="flex flex-wrap gap-1.5 md:gap-2 mb-2 md:mb-3">
                                {section.freeResourceLinks.map((link, linkIndex) => (
                                  <Button
                                    key={linkIndex}
                                    variant="outline"
                                    size="sm"
                                    className={`bg-white hover:bg-primary hover:text-white ${isMobile ? 'text-xs px-2 py-1 h-auto' : ''}`}
                                    onClick={() => window.open(link.href, '_blank')}
                                  >
                                    {isMobile && link.mobileLabel ? link.mobileLabel : link.label}
                                    <ExternalLink className="w-3 h-3 ml-1" />
                                  </Button>
                                ))}
                              </div>
                            )}
                            
                            {section.freeItems && (
                              <div className="mb-2 md:mb-3">
                                <p className={`font-medium text-emerald-700 mb-1 md:mb-2 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                                  🆓 {isMobile ? 'Free events:' : 'Free university-specific interview events:'}
                                </p>
                                <ul className={`text-gray-600 space-y-1 ml-3 md:ml-4 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                                  {(isMobile && section.mobileFreeItems ? section.mobileFreeItems : section.freeItems).slice(1).map((item, i) => (
                                    <li key={i}>• {item}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                            
                            {section.links && (
                              <div className="flex flex-wrap gap-1.5 md:gap-2 mb-2 md:mb-3">
                                {section.links.map((link, linkIndex) => (
                                  <div key={linkIndex}>
                                    <Button
                                      variant="outline"
                                      size="sm"
                                      className={`bg-white hover:bg-primary hover:text-white ${isMobile ? 'text-xs px-2 py-1 h-auto' : ''}`}
                                      onClick={() => window.open(link.href, '_blank')}
                                    >
                                      {isMobile && link.mobileLabel ? link.mobileLabel : link.label}
                                      <ExternalLink className="w-3 h-3 ml-1" />
                                    </Button>
                                    {link.subtext && (!isMobile || link.mobileSubtext !== '') && (
                                      <span className="text-xs text-gray-500 ml-2">
                                        {isMobile && link.mobileSubtext !== undefined ? link.mobileSubtext : link.subtext}
                                      </span>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                            
                            {section.additionalLinks && (
                              <div className="flex flex-wrap gap-1.5 md:gap-2 mt-2 md:mt-3">
                                {section.additionalLinks.map((link, linkIndex) => (
                                  <Button
                                    key={linkIndex}
                                    variant="ghost"
                                    size="sm"
                                    className={`text-primary hover:text-primary-dark ${isMobile ? 'text-xs px-2 py-1 h-auto' : ''}`}
                                    onClick={() => window.open(link.href, '_blank')}
                                  >
                                    {link.icon && <link.icon className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'} mr-1`} />}
                                    {isMobile && link.mobileLabel ? link.mobileLabel : link.label}
                                  </Button>
                                ))}
                              </div>
                            )}
                            
                            {section.link && (
                              <Button
                                variant="outline"
                                size="sm"
                                className={`bg-white hover:bg-primary hover:text-white mt-2 ${isMobile ? 'text-xs px-2 py-1 h-auto' : ''}`}
                                onClick={() => window.open(section.link.href, '_blank')}
                              >
                                {isMobile && section.link.mobileLabel ? section.link.mobileLabel : section.link.label}
                                <ExternalLink className="w-3 h-3 ml-1" />
                              </Button>
                            )}
                            
                            {section.footer && !isMobile && (
                              <p className="text-sm text-gray-600 mt-3 italic">
                                {section.footer}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                    
                    {/* Footer note */}
                    {step.footer && (
                      <p className={`text-gray-500 italic border-t border-gray-100 pt-3 md:pt-4 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                        💡 {isMobile && step.mobileFooter ? step.mobileFooter : step.footer}
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
