/**
 * @jest-environment jsdom
 */

import React from 'react'; // Ensure React is imported
import { render, screen } from '@testing-library/react';
import DepartmentWiseEmployee from '../../Pages/DepartmentWiseEmployee';
import useDepartmentEmployees from '../path/to/useDepartmentEmployees';

// Mock the `useDepartmentEmployees` hook
jest.mock('../path/to/useDepartmentEmployees', () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockEmployees = [
  { id: 1, name: 'John Doe', department: 'Engineering' },
  { id: 2, name: 'Jane Smith', department: 'HR' },
];

beforeEach(() => {
  useDepartmentEmployees.mockReturnValue([mockEmployees, false, jest.fn()]);
});

test('renders department-wise employee list', () => {
  render(<DepartmentWiseEmployee />);
  const departmentName = screen.getByText(/Engineering/i);
  expect(departmentName).toBeInTheDocument();
});
