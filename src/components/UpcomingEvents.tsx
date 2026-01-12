import { useState, useEffect } from 'react';
import { eventService, Event } from '@/services/eventService';
import { Calendar, Clock, Stethoscope, Scale, GraduationCap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ToothIcon from '@/components/icons/ToothIcon';

const UpcomingEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const unsubscribe = eventService.subscribeToEvents((allEvents) => {
      const today = new Date().toISOString().split('T')[0];
      const upcoming = allEvents
        .filter(event => event.date >= today)
        .slice(0, 5);
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
      weekday: 'short', day: 'numeric', month: 'short'
    });
  };

  if (events.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <p className="text-gray-600">No upcoming events scheduled.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calendar className="w-4 h-4" />
            Free Events
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Upcoming Events
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our free virtual events, talks, and workshops to boost your application.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="flex-1">
                    <div className="mb-2">
                      <Badge className={`${getCategoryColor(event.category)} gap-1`}>
                        {getCategoryIcon(event.category)}
                        {event.category}
                      </Badge>
                    </div>

                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {event.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-3">
                      {event.description}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(event.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {event.time}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <a
            href="https://medsoc.myucat.co.uk/events"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-medium transition-colors"
          >
            View all events →
          </a>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
