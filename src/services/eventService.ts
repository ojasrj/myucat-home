import { collection, onSnapshot, query, orderBy, Timestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  category: 'A Levels' | 'Medical Supercurricular' | 'Dental Supercurricular' | 'Law Supercurricular';
  createdAt?: Timestamp;
}

const EVENTS_COLLECTION = 'events';

export const eventService = {
  subscribeToEvents(callback: (events: Event[]) => void) {
    const q = query(collection(db, EVENTS_COLLECTION), orderBy('date', 'asc'));
    return onSnapshot(q, (querySnapshot) => {
      const events = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Event));
      callback(events);
    });
  }
};
