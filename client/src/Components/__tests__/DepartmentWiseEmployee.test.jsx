import { render, screen } from '@testing-library/react';
import DepartmentWiseEmployee from '../DepartmentWiseEmployee';

test('renders DepartmentWiseEmployee component', () => {
  render(<DepartmentWiseEmployee />);
  const title = screen.getByText(/Employees by Department/i);
  expect(title).toBeInTheDocument();
});

test('displays department data', () => {
  const mockData = [{ id: 1, department: 'HR', count: 10 }];
  render(<DepartmentWiseEmployee data={mockData} />);
  const dept = screen.getByText(/HR/i);
  expect(dept).toBeInTheDocument();
});
