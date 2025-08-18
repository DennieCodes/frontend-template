import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import EventDirectory from '../../components/EventDirectory/EventDirectory';
import { sampleEvents } from './mockData';
import { Event } from '../../types/event';

const EventsPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleEventClick = (event: Event) => {
    navigate(`/events/${event.id}`);
  };

  return (
    <EventDirectory
      events={sampleEvents}
      title={t('pages.events.title', 'Events')}
      subtitle={t('pages.events.subtitle', 'Discover amazing events happening near you')}
      showFilters={true}
      onEventClick={handleEventClick}
    />
  );
};

export default EventsPage;
