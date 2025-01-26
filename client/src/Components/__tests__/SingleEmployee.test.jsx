/**
 * @jest-environment jsdom
 */

import React from 'react'; // Ensure React is imported
import { render, screen } from '@testing-library/react';
import SingleEmployee from '../../Pages/SingleEmployee';

test('renders SingleEmployee component', () => {
  render(<SingleEmployee />);
  const title = screen.getByText(/Employee Details/i);
  expect(title).toBeInTheDocument();
});

test('shows employee info', () => {
  const mockEmployee = { id: 1, name: 'John', role: 'Manager' };
  render(<SingleEmployee employee={mockEmployee} />);
  const name = screen.getByText(/John/i);
  const role = screen.getByText(/Manager/i);
  expect(name).toBeInTheDocument();
  expect(role).toBeInTheDocument();
});
