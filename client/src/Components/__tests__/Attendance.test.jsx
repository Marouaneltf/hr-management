/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import Attendance from '../../Pages/Attendance';

test('renders Attendance component', () => {
  render(<Attendance />);
  const title = screen.getByText(/Attendance Records/i);
  expect(title).toBeInTheDocument();
});

test('shows attendance details', () => {
  const mockAttendance = [{ id: 1, status: 'Present' }, { id: 2, status: 'Absent' }];
  render(<Attendance records={mockAttendance} />);
  const items = screen.getAllByText(/Present|Absent/i);
  expect(items.length).toBe(mockAttendance.length);
});
