import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Container,
  Grid,
  Typography,
  Box,
  Paper,
  Chip,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Tabs,
  Tab,
  Breadcrumbs,
  Link,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  ArrowBack,
  CalendarToday,
  LocationOn,
  AccessTime,
  People,
  Star,
  Event,
  Email,
  Phone,
  Language,
  CheckCircle,
  Cancel,
  CalendarMonth,
} from '@mui/icons-material';
import { sampleEvents } from './mockData';
import { Event as EventType } from '../../types/event';
import { LAYOUT_CONSTANTS, layoutUtils, typographyStyles } from '../../constants/layout';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`event-tabpanel-${index}`}
      aria-labelledby={`event-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </Box>
  );
}

const EventPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [tabValue, setTabValue] = useState(0);

  // Find the event by ID
  const event = sampleEvents.find(e => e.id === id);

  if (!event) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" color="error">
          Event not found
        </Typography>
        <Button
          startIcon={<ArrowBack />}
          onClick={() => navigate('/events')}
          sx={{ mt: 2 }}
        >
          Back to Events
        </Button>
      </Container>
    );
  }

  const formatPrice = (price: any) => {
    if (price.type === 'free') {
      return 'Free';
    }
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: price.currency,
    }).format(price.amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatTime = (timeString: string) => {
    return new Date(`2000-01-01T${timeString}`).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'primary';
      case 'ongoing':
        return 'success';
      case 'completed':
        return 'default';
      case 'cancelled':
        return 'error';
      default:
        return 'default';
    }
  };

  const handleRegister = () => {
    // Handle event registration
    alert('Successfully registered for the event!');
  };

  const handleAddToCalendar = () => {
    // Handle adding to calendar
    alert('Event added to calendar!');
  };

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Breadcrumbs */}
      <Breadcrumbs sx={{ mb: 3 }}>
        <Link href="/" color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
          Home
        </Link>
        <Link href="/events" color="inherit">
          Events
        </Link>
        <Typography color="text.primary">{event.title}</Typography>
      </Breadcrumbs>

      <Grid container spacing={4}>
        {/* Event Images */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Box sx={{ position: 'relative', mb: 2 }}>
              <img
                src={event.images[selectedImage]}
                alt={event.title}
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
              {event.featured && (
                <Chip
                  label="Featured"
                  color="secondary"
                  sx={{
                    position: 'absolute',
                    top: 16,
                    left: 16,
                  }}
                />
              )}
            </Box>

            {/* Thumbnail Images */}
            <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
              {event.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${event.title} ${index + 1}`}
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    border: selectedImage === index ? '2px solid #1976d2' : '2px solid transparent',
                  }}
                  onClick={() => setSelectedImage(index)}
                />
              ))}
            </Box>
          </Paper>
        </Grid>

        {/* Event Details */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            {/* Category and Status */}
            <Box sx={{ display: 'flex', gap: 1, mb: 2, flexWrap: 'wrap' }}>
              <Chip label={event.category} color="primary" variant="outlined" />
              <Chip label={event.status} color={getStatusColor(event.status)} variant="outlined" />
              {event.subcategory && (
                <Chip label={event.subcategory} variant="outlined" />
              )}
            </Box>

            {/* Event Title */}
            <Typography variant="h3" component="h1" gutterBottom sx={{ ...typographyStyles.heading }}>
              {event.title}
            </Typography>

            {/* Date and Time */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <CalendarToday color="primary" />
              <Typography variant="body1" color="text.secondary">
                {formatDate(event.startDate)}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <AccessTime color="primary" />
              <Typography variant="body1" color="text.secondary">
                {formatTime(event.startTime)} - {formatTime(event.endTime)} ({event.timezone})
              </Typography>
            </Box>

            {/* Location */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
              <LocationOn color="primary" />
              <Typography variant="body1" color="text.secondary">
                {event.location.venue}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ ml: 4, mb: 2 }}>
              {event.location.address}<br />
              {event.location.city}, {event.location.state} {event.location.zipCode}<br />
              {event.location.country}
            </Typography>

            {/* Price */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
              <Typography variant="h4" color="primary" fontWeight={600}>
                {formatPrice(event.price)}
              </Typography>
              {event.price.type === 'free' && (
                <Chip label="Free Event" color="success" variant="outlined" />
              )}
            </Box>

            {/* Capacity */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              <People color="primary" />
              <Typography variant="body1" color="text.secondary">
                {event.registeredAttendees} of {event.capacity} spots filled
              </Typography>
            </Box>

            {/* Registration Status */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
              {event.registrationRequired ? (
                <>
                  <CheckCircle color="success" />
                  <Typography color="success.main" fontWeight={500}>
                    Registration Required
                  </Typography>
                </>
              ) : (
                <>
                  <Cancel color="error" />
                  <Typography color="error.main" fontWeight={500}>
                    No Registration Required
                  </Typography>
                </>
              )}
            </Box>

            {/* Actions */}
            <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
              <Button
                variant="contained"
                size="large"
                onClick={handleRegister}
                disabled={!event.registrationRequired}
                sx={{ flexGrow: 1 }}
              >
                {event.registrationRequired ? 'Register Now' : 'Learn More'}
              </Button>
              <Tooltip title="Add to Calendar">
                <IconButton
                  onClick={handleAddToCalendar}
                  color="primary"
                  size="large"
                >
                  <CalendarMonth />
                </IconButton>
              </Tooltip>
            </Box>

            {/* Tags */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {event.tags.map((tag) => (
                <Chip key={tag} label={tag} size="small" variant="outlined" />
              ))}
            </Box>
          </Paper>
        </Grid>
      </Grid>

      {/* Event Details Tabs */}
      <Paper sx={{ mt: 4 }}>
        <Tabs value={tabValue} onChange={handleTabChange} aria-label="event details tabs">
          <Tab label="Description" />
          <Tab label="Features" />
          <Tab label="Organizer" />
        </Tabs>

        <TabPanel value={tabValue} index={0}>
          <Typography variant="body1" paragraph>
            {event.description}
          </Typography>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <List>
            {event.features.map((feature, index) => (
              <ListItem key={index}>
                <ListItemIcon>
                  <CheckCircle color="primary" />
                </ListItemIcon>
                <ListItemText primary={feature} />
              </ListItem>
            ))}
          </List>
        </TabPanel>

        <TabPanel value={tabValue} index={2}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <Typography variant="h6" fontWeight={600}>
              {event.organizer.name}
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Email sx={{ fontSize: 20 }} />
              <Typography variant="body1">
                {event.organizer.email}
              </Typography>
            </Box>
            {event.organizer.phone && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Phone sx={{ fontSize: 20 }} />
                <Typography variant="body1">
                  {event.organizer.phone}
                </Typography>
              </Box>
            )}
            {event.organizer.website && (
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Language sx={{ fontSize: 20 }} />
                <Link href={event.organizer.website} target="_blank" rel="noopener">
                  {event.organizer.website}
                </Link>
              </Box>
            )}
          </Box>
        </TabPanel>
      </Paper>
    </Container>
  );
};

export default EventPage;
