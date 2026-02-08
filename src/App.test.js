import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio logo', () => {
  render(<App />);
  const logoElement = screen.getByText(/_maheshwar/i);
  expect(logoElement).toBeInTheDocument();
});
