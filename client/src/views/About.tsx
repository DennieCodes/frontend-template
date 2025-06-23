import { Container, Typography } from '@mui/material';

const About: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        About Us
      </Typography>
    </Container>
  );
}

export default About;