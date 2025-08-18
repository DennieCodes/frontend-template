import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/GridLegacy';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { EventPageProps } from './types';

const EventPage: React.FC<EventPageProps> = ({ event }) => {
  const [selectedImage, setSelectedImage] = useState(0);

  if (!event) {
    return <div>Event not found</div>;
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid xs={12} md={6}>
          <Box sx={{ mb: 3 }}>
            <img
              src={event.images[selectedImage]}
              alt={event.title}
              style={{ width: '100%', height: 'auto', borderRadius: 8 }}
            />
          </Box>
          <Grid container spacing={1}>
            {event.images.map((image, index) => (
              <Grid xs={3} key={index}>
                <img
                  src={image}
                  alt={`${event.title} ${index + 1}`}
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 4,
                    cursor: 'pointer',
                    border: selectedImage === index ? '2px solid #1976d2' : '2px solid transparent',
                  }}
                  onClick={() => setSelectedImage(index)}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid xs={12} md={6}>
          <Typography variant="h3" component="h1" gutterBottom>
            {event.title}
          </Typography>

          <Box sx={{ mb: 2 }}>
            {event.tags.map((tag, index) => (
              <Chip key={index} label={tag} sx={{ mr: 1, mb: 1 }} />
            ))}
          </Box>

          <Typography variant="h5" component="div" color="primary" gutterBottom>
            {event.date} • {event.time}
          </Typography>

          <Typography variant="body1" paragraph>
            {event.description}
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Location
            </Typography>
            <Typography variant="body1" paragraph>
              {typeof event.location === 'string' ? event.location : event.location?.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {typeof event.location === 'string' ? '' : event.location?.address}
            </Typography>
          </Box>

          <Box sx={{ mb: 3 }}>
            <Button variant="contained" size="large" sx={{ mr: 2 }}>
              Register Now
            </Button>
            <Button variant="outlined" size="large">
              Add to Calendar
            </Button>
          </Box>

          <Paper elevation={1} sx={{ p: 2 }}>
            <Typography variant="subtitle2" gutterBottom>
              Event Details
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Price: {typeof event.price === 'object' ? `${event.price.currency || '$'}${event.price.amount || 'Free'}` : event.price || 'Free'}
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              Capacity: {event.capacity} attendees
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Organizer: {event.organizer}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      {event.speakers && event.speakers.length > 0 && (
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Speakers
          </Typography>
          <Grid container spacing={3}>
            {event.speakers.map((speaker, index) => (
              <Grid xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {typeof speaker === 'string' ? speaker : speaker.name || 'Speaker'}
                    </Typography>
                    {typeof speaker !== 'string' && speaker.title && (
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {speaker.title}
                      </Typography>
                    )}
                    {typeof speaker !== 'string' && speaker.bio && (
                      <Typography variant="body2" color="text.secondary">
                        {speaker.bio}
                      </Typography>
                    )}
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {event.relatedEvents && event.relatedEvents.length > 0 && (
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Related Events
          </Typography>
          <Grid container spacing={3}>
            {event.relatedEvents.map((relatedEvent, index) => (
              <Grid xs={12} sm={6} md={4} key={index}>
                <Card>
                  <CardMedia
                    component="img"
                    height="200"
                    image={relatedEvent.thumbnail || relatedEvent.images?.[0]}
                    alt={relatedEvent.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="h3" gutterBottom>
                      {relatedEvent.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                      {relatedEvent.startDate}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {relatedEvent.shortDescription}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default EventPage;
