import React from 'react';
import {
  Container,
  Grid,
  Typography,
  Box,
  Breadcrumbs,
  Link,
  Paper,
  Chip,
  Rating,
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  Avatar,
  Tabs,
  Tab,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  IconButton,
} from '@mui/material';
import {
  Home as HomeIcon,
  LocationOn,
  Phone,
  Email,
  Language,
  Verified,
  Star,
  AccessTime,
  AttachMoney,
  ExpandMore,
  Directions,
  Share,
  Bookmark,
  BookmarkBorder,
} from '@mui/icons-material';
import { ResourcePageProps } from '../types/resource';

const ResourcePage: React.FC<ResourcePageProps> = ({ resource }) => {
  const [activeTab, setActiveTab] = React.useState(0);
  const [isBookmarked, setIsBookmarked] = React.useState(false);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleBookmarkToggle = () => {
    setIsBookmarked(!isBookmarked);
  };

  const formatHours = (hours: any) => {
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    return days.map(day => {
      const dayHours = hours[day.toLowerCase()];
      if (!dayHours) return null;

      if (dayHours.closed) {
        return `${day}: Closed`;
      }
      return `${day}: ${dayHours.open} - ${dayHours.close}`;
    }).filter(Boolean);
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Breadcrumbs */}
      <Box sx={{ mb: 3 }}>
        <Breadcrumbs>
          <Link href="/" color="inherit" sx={{ display: 'flex', alignItems: 'center' }}>
            <HomeIcon sx={{ mr: 0.5 }} fontSize="small" />
            Home
          </Link>
          <Link href="/resources" color="inherit">
            Resources
          </Link>
          <Typography color="text.primary">{resource.name}</Typography>
        </Breadcrumbs>
      </Box>

      <Grid container spacing={4}>
        {/* Main Content */}
        <Grid item xs={12} lg={8}>
          {/* Header */}
          <Paper sx={{ p: 3, mb: 3 }}>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
              {resource.imageUrl && (
                <Avatar
                  src={resource.imageUrl}
                  alt={resource.name}
                  sx={{ width: 80, height: 80, mr: 2 }}
                />
              )}
              <Box sx={{ flexGrow: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <Typography variant="h4" component="h1" sx={{ flexGrow: 1 }}>
                    {resource.name}
                  </Typography>
                  {resource.verified && (
                    <Verified color="primary" sx={{ ml: 1 }} />
                  )}
                  <IconButton onClick={handleBookmarkToggle} sx={{ ml: 1 }}>
                    {isBookmarked ? <Bookmark color="primary" /> : <BookmarkBorder />}
                  </IconButton>
                </Box>

                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  {resource.description}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  <LocationOn fontSize="small" color="action" sx={{ mr: 0.5 }} />
                  <Typography variant="body2" color="text.secondary">
                    {resource.location.city}, {resource.location.state}, {resource.location.country}
                  </Typography>
                </Box>

                {resource.rating && (
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Rating value={resource.rating} readOnly />
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                      ({resource.reviewCount || 0} reviews)
                    </Typography>
                  </Box>
                )}

                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                  <Chip
                    label={resource.category}
                    color="primary"
                    variant="outlined"
                  />
                  {resource.subcategory && (
                    <Chip
                      label={resource.subcategory}
                      variant="outlined"
                    />
                  )}
                  {resource.pricing && (
                    <Chip
                      icon={<AttachMoney />}
                      label={resource.pricing.range}
                      variant="outlined"
                    />
                  )}
                </Box>
              </Box>
            </Box>
          </Paper>

          {/* Tabs */}
          <Paper sx={{ mb: 3 }}>
            <Tabs value={activeTab} onChange={handleTabChange} sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tab label="Overview" />
              <Tab label="Services" />
              <Tab label="Contact & Hours" />
              <Tab label="Reviews" />
            </Tabs>

            <Box sx={{ p: 3 }}>
              {activeTab === 0 && (
                <Box>
                  <Typography variant="h6" gutterBottom>
                    About
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {resource.description}
                  </Typography>

                  {resource.services.length > 0 && (
                    <Box sx={{ mt: 3 }}>
                      <Typography variant="h6" gutterBottom>
                        Services Offered
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {resource.services.map((service, index) => (
                          <Chip
                            key={index}
                            label={service}
                            variant="outlined"
                          />
                        ))}
                      </Box>
                    </Box>
                  )}

                  {resource.tags.length > 0 && (
                    <Box sx={{ mt: 3 }}>
                      <Typography variant="h6" gutterBottom>
                        Tags
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {resource.tags.map((tag, index) => (
                          <Chip
                            key={index}
                            label={tag}
                            size="small"
                            variant="outlined"
                          />
                        ))}
                      </Box>
                    </Box>
                  )}
                </Box>
              )}

              {activeTab === 1 && (
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Services
                  </Typography>
                  <List>
                    {resource.services.map((service, index) => (
                      <ListItem key={index}>
                        <ListItemIcon>
                          <Star color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={service} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              )}

              {activeTab === 2 && (
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>
                      Contact Information
                    </Typography>
                    <List>
                      {resource.contact.phone && (
                        <ListItem>
                          <ListItemIcon>
                            <Phone color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={resource.contact.phone} />
                        </ListItem>
                      )}
                      {resource.contact.email && (
                        <ListItem>
                          <ListItemIcon>
                            <Email color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={resource.contact.email} />
                        </ListItem>
                      )}
                      {resource.contact.website && (
                        <ListItem>
                          <ListItemIcon>
                            <Language color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={resource.contact.website} />
                        </ListItem>
                      )}
                    </List>
                  </Grid>

                  <Grid item xs={12} md={6}>
                    {resource.hours && (
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          Hours of Operation
                        </Typography>
                        <List>
                          {formatHours(resource.hours).map((hours, index) => (
                            <ListItem key={index}>
                              <ListItemIcon>
                                <AccessTime color="primary" />
                              </ListItemIcon>
                              <ListItemText primary={hours} />
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    )}
                  </Grid>
                </Grid>
              )}

              {activeTab === 3 && (
                <Box>
                  <Typography variant="h6" gutterBottom>
                    Reviews
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Reviews functionality would be implemented here.
                  </Typography>
                </Box>
              )}
            </Box>
          </Paper>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} lg={4}>
          {/* Contact Card */}
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Get in Touch
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {resource.contact.phone && (
                  <Button
                    variant="outlined"
                    startIcon={<Phone />}
                    fullWidth
                    href={`tel:${resource.contact.phone}`}
                  >
                    Call Now
                  </Button>
                )}

                {resource.contact.email && (
                  <Button
                    variant="outlined"
                    startIcon={<Email />}
                    fullWidth
                    href={`mailto:${resource.contact.email}`}
                  >
                    Send Email
                  </Button>
                )}

                {resource.contact.website && (
                  <Button
                    variant="outlined"
                    startIcon={<Language />}
                    fullWidth
                    href={resource.contact.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </Button>
                )}

                <Button
                  variant="contained"
                  startIcon={<Directions />}
                  fullWidth
                >
                  Get Directions
                </Button>

                <Button
                  variant="outlined"
                  startIcon={<Share />}
                  fullWidth
                >
                  Share
                </Button>
              </Box>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Additional Information
              </Typography>

              {resource.accessibility && resource.accessibility.length > 0 && (
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="subtitle2">Accessibility</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {resource.accessibility.map((item, index) => (
                        <Chip key={index} label={item} size="small" />
                      ))}
                    </Box>
                  </AccordionDetails>
                </Accordion>
              )}

              {resource.languages && resource.languages.length > 0 && (
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="subtitle2">Languages</Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {resource.languages.map((language, index) => (
                        <Chip key={index} label={language} size="small" />
                      ))}
                    </Box>
                  </AccordionDetails>
                </Accordion>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResourcePage;