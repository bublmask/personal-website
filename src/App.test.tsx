import React from 'react';
import { render, screen } from '@testing-library/react';
import PSW from './PersonalStreamerWebsite';

test('renders learn react link', () => {
  render(<PSW />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
