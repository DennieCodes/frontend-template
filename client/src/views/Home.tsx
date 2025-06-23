import { Container, Typography } from '@mui/material';

const Home: React.FC = () => {
  return(
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        Home
      </Typography>
    </Container>
  )
}

export default Home;