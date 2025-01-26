/**
 * @jest-environment jsdom
 */

import React from 'react'; // Ensure React is imported
import { render, screen, fireEvent } from '@testing-library/react';
import AllEmployee from '../../Pages/AllEmployee';
import useAllEmployees from '../path/to/useAllEmployees';

// Mock the `useAllEmployees` hook
jest.mock('../../Pages/AllEmployee/useAllEmployees', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockEmployees = [
  { id: 1, name: 'John Doe', role: 'Developer' },
  { id: 2, name: 'Jane Smith', role: 'Manager' },
];

beforeEach(() => {
  useAllEmployees.mockReturnValue([mockEmployees, false, jest.fn()]);
});

test('displays employee list correctly', () => {
  render(<AllEmployee />);
  const employeeNames = screen.getAllByText(/John Doe|Jane Smith/i);
  expect(employeeNames.length).toBe(2);
});

test('search functionality filters employees by name', () => {
  render(<AllEmployee />);
  const searchInput = screen.getByPlaceholderText(/Search/i);
  fireEvent.change(searchInput, { target: { value: 'John' } });
  const filteredName = screen.getByText(/John Doe/i);
  expect(filteredName).toBeInTheDocument();
});

test('opens employee details modal when "Details" button is clicked', () => {
  render(<AllEmployee />);
  const detailsButton = screen.getByText(/Details/i); // Adjust selector based on the button text
  fireEvent.click(detailsButton);
  const modalTitle = screen.getByText(/Employee Details/i);
  expect(modalTitle).toBeInTheDocument();
});

test('triggers employee delete confirmation when "Delete" button is clicked', () => {
  render(<AllEmployee />);
  const deleteButton = screen.getByText(/Delete/i); // Adjust selector based on the button text
  fireEvent.click(deleteButton);
  const confirmationMessage = screen.getByText(/Are you sure you want to delete/i);
  expect(confirmationMessage).toBeInTheDocument();
});
