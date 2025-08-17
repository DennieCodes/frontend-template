export interface EventPageProps {
  event?: {
    id?: string;
    title?: string;
    description?: string;
    date?: string;
    location?: string | {
      name: string;
      address: string;
    };
    category?: string;
    images?: string[];
    tags?: string[];
    time?: string;
    price?: string;
    capacity?: number;
    organizer?: string;
    speakers?: any[];
    relatedEvents?: any[];
  };
}
