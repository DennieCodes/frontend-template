import { Container, Typography } from '@mui/material';

const Contact: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Contact Us
      </Typography>
    </Container>
  );
}

export default Contact;