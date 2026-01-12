import { useState, useEffect } from 'react';
import { eventService, Event } from '@/services/eventService';
import { Calendar, Clock, Stethoscope, Scale, GraduationCap, ChevronLeft, ChevronRight, Video, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ToothIcon from '@/components/icons/ToothIcon';

const UpcomingEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = eventService.subscribeToEvents((allEvents) => {
      const today = new Date().toISOString().split('T')[0];
      const upcoming = allEvents.filter(event => event.date >= today);
      setEvents(upcoming);
    });
    return () => unsubscribe();
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Medical Supercurricular': return <Stethoscope className="w-4 h-4" />;
      case 'Dental Supercurricular': return <ToothIcon size={16} />;
      case 'Law Supercurricular': return <Scale className="w-4 h-4" />;
      case 'A Levels': return <GraduationCap className="w-4 h-4" />;
      default: return <Calendar className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Medical Supercurricular': return 'bg-blue-100 text-blue-800';
      case 'Dental Supercurricular': return 'bg-purple-100 text-purple-800';
      case 'Law Supercurricular': return 'bg-amber-100 text-amber-800';
      case 'A Levels': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
    });
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? events.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === events.length - 1 ? 0 : prev + 1));
  };

  if (events.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Free Events</h2>
          <p className="text-gray-600 mb-6">No upcoming events scheduled at the moment.</p>
          <Button
            variant="outline"
            onClick={() => window.open('https://medsoc.myucat.co.uk/events', '_blank')}
          >
            <Calendar className="w-4 h-4 mr-2" />
            View Full Event Calendar
          </Button>
        </div>
      </section>
    );
  }

  const currentEvent = events[currentIndex];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            Free Events
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Free Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our free virtual events, talks, and workshops to boost your application.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Carousel with side arrows */}
          <div className="flex items-center gap-4">
            {/* Left Arrow */}
            {events.length > 1 && (
              <Button
                variant="outline"
                size="icon"
                onClick={goToPrevious}
                className="rounded-full h-12 w-12 shrink-0 border-2 border-primary/20 hover:bg-primary hover:text-white transition-colors"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
            )}

            {/* Event Card */}
            <Card className="flex-1 overflow-hidden shadow-lg border-2 border-primary/10">
              <CardContent className="p-8">
                <div className="text-center">
                  <Badge className={`${getCategoryColor(currentEvent.category)} gap-1 mb-4`}>
                    {getCategoryIcon(currentEvent.category)}
                    {currentEvent.category}
                  </Badge>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {currentEvent.title}
                  </h3>

                  <p className="text-gray-600 mb-6">
                    {currentEvent.description}
                  </p>

                  <div className="flex items-center justify-center gap-6 text-sm text-gray-500 mb-6">
                    <span className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-primary" />
                      {formatDate(currentEvent.date)}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-primary" />
                      {currentEvent.time}
                    </span>
                  </div>

                  {/* Zoom Link Button */}
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white mb-4"
                    onClick={() => window.open('https://zoom.us/s/93575381575?pwd=qlt0b29YPMqmKIbb1hhbNwwkInNp3C.1', '_blank')}
                  >
                    <Video className="w-4 h-4 mr-2" />
                    Join on Zoom
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Right Arrow */}
            {events.length > 1 && (
              <Button
                variant="outline"
                size="icon"
                onClick={goToNext}
                className="rounded-full h-12 w-12 shrink-0 border-2 border-primary/20 hover:bg-primary hover:text-white transition-colors"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            )}
          </div>

          {/* Dot Navigation */}
          {events.length > 1 && (
            <div className="flex items-center justify-center gap-2 mt-6">
              {events.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-primary w-6' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Event Counter */}
          <p className="text-center text-sm text-gray-500 mt-4">
            Event {currentIndex + 1} of {events.length}
          </p>
        </div>

        {/* View All Events Button */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white"
            onClick={() => window.open('https://medsoc.myucat.co.uk/events', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            View Full Event Calendar
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
