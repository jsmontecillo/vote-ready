import { render, screen } from '@testing-library/react';
import Candidates from '../candidates.js';

test('renders candidate name', () => {
  render(<Candidates />);
  const linkElement = screen.getByText(/alex padilla/i);
  expect(linkElement).toBeInTheDocument();
});
