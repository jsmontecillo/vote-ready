import { render, screen } from '@testing-library/react';
import Feedback from '../feedback.js';

describe('feedback form', () => {
    test('should render feedback component', () => {
      render(<Feedback />);
      expect(screen.getByText("Name")).toBeInTheDocument();
      expect(screen.getByText("Date")).toBeInTheDocument();
      expect(screen.getByText("Feedback")).toBeInTheDocument();
      expect(screen.getByRole("button", {name: /Submit/i })).toBeInTheDocument();
    });
  });