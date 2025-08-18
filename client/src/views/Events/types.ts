import { BaseEvent } from '../../types/common';

export interface Speaker {
  name: string;
  title?: string;
  bio?: string;
  avatar?: string;
}

export interface EventPageProps {
  event?: BaseEvent & {
    speakers?: Speaker[];
    relatedEvents?: BaseEvent[];
  };
}
