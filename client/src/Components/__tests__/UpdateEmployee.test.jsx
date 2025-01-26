/**
 * @jest-environment jsdom
 */

import React from 'react'; // Ensure React is imported
import { render, screen, fireEvent } from '@testing-library/react';
import UpdateEmployee from '../../Pages/UpdateEmployee';

test('renders UpdateEmployee form', () => {
  render(<UpdateEmployee />);
  const formTitle = screen.getByText(/Update Employee/i);
  expect(formTitle).toBeInTheDocument();
});

test('submits updated employee data', () => {
  const mockUpdate = jest.fn();
  render(<UpdateEmployee onSubmit={mockUpdate} />);
  const input = screen.getByPlaceholderText(/Enter name/i);
  fireEvent.change(input, { target: { value: 'John Doe' } });
  const submit = screen.getByRole('button', { name: /Submit/i });
  fireEvent.click(submit);
  expect(mockUpdate).toHaveBeenCalled();
});
