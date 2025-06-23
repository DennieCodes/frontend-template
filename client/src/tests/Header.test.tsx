import { render, screen } from '@testing-library/react';
import Header from '../components/Header/Header';

test('renders Home button in Header', () => {
  render(<Header />);
  expect(screen.getByText(/Home/i)).toBeInTheDocument();
});
