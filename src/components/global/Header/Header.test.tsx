import React from 'react';
import { render, screen } from "@testing-library/react";
import Header from './Header';

xit('renders Heaader', () => {
  render(<Header />);
  const title = screen.getByText(/Managed Security Services/i);
  expect(title).toBeInTheDocument();
});
