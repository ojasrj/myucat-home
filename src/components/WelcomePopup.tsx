
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, MessageCircle } from 'lucide-react';

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show popup after a short delay when component mounts
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-2xl w-full max-h-[90vh] overflow-y-auto relative animate-scale-in">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
          aria-label="Close popup"
        >
          <X className="w-5 h-5" />
        </button>
        
        <CardContent className="p-8 text-center">
          <Badge variant="destructive" className="absolute top-6 left-6 animate-pulse">
            Limited spots remaining!
          </Badge>
          
          <div className="mt-6">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Free UCAT & Interview Help
            </h2>
            
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg mb-6 hover:scale-105 transition-transform"
              onClick={() => window.open('https://chat.whatsapp.com/L51Lq9yt5k1HNNXzBsPxfM', '_blank')}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Join the group now
            </Button>
            
            <div className="text-left space-y-4 text-gray-600">
              <p className="text-base leading-relaxed">
                <a href="https://chat.whatsapp.com/F6JpDr5vRaVDTjdlHqq9zb" className="text-primary hover:underline">
                  WhatsApp group
                </a> for Q&As, expert advice & strategies from the <strong className="text-gray-900">highest UCAT scorers out there</strong>. 
                Members get automatic access to <a href="https://questions.ucat.com/courses" className="text-primary hover:underline">
                  work experience, UCAT, personal statement & interview courses
                </a>. They are also enrolled in our <strong className="text-gray-900">free Virtual Medical & Dental Society</strong> - 
                access leadership roles, work experience, and exclusive insight events to strengthen your application.
              </p>
              
              <div className="space-y-3 text-sm italic text-gray-500 border-l-4 border-primary/20 pl-4">
                <p>
                  "Hands down best company you can work with. Achieved my own dream of a Cambridge offer and couldn't have done it alone. 
                  These guys provide so much support and make the whole process seem a lot less daunting." 
                  - Student L.J., UK (<a href="https://uk.trustpilot.com/review/myucat.co.uk" className="text-primary hover:underline">Trustpilot</a>)
                </p>
                
                <p>
                  "4/4 med offers from Imperial, UCL, KCL AND SGUL!! Been with Ojas and his course through every step from UCAT, 
                  interviews and now A-levels and I couldn't have done it without his and the amazing tutors' help :)" 
                  - Student N.P., Qatar (<a href="https://uk.trustpilot.com/review/myucat.co.uk" className="text-primary hover:underline">Trustpilot</a>)
                </p>
                
                <p>
                  "I wholeheartedly recommend you to join the group chat and see what it is like, even for a week, 
                  and I'm 99% sure you will be able to appreciate the level of effort he puts in as I do." 
                  - Student I.M., UK (<a href="https://uk.trustpilot.com/review/myucat.co.uk" className="text-primary hover:underline">Trustpilot</a>)
                </p>
              </div>
            </div>
            
            {/* Mobile simplified version */}
            <div className="md:hidden mt-6 pt-6 border-t">
              <p className="text-base mb-4">Join our WhatsApp group for expert UCAT & interview tips — free!</p>
              <Button
                size="lg"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => window.open('https://chat.whatsapp.com/F6JpDr5vRaVDTjdlHqq9ub', '_blank')}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Join the group now
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WelcomePopup;
