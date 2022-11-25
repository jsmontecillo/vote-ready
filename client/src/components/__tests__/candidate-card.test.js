import { render, screen } from '@testing-library/react';
import CandidateCard from '../candidate-card';

test('renders learn react link', () => {
  render(<CandidateCard />);
  const linkElement = screen.getByText(/meet the candidates/i);
  expect(linkElement).toBeInTheDocument();
});
