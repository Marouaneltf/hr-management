import { render, screen } from '@testing-library/react';
import AllEmployee from '../../Pages/AllEmployee';

test('renders AllEmployee component', () => {
  render(<AllEmployee />);
  const heading = screen.getByText(/All Employees/i);
  expect(heading).toBeInTheDocument();
});

test('displays employee list', () => {
  const mockEmployees = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }];
  render(<AllEmployee employees={mockEmployees} />);
  const items = screen.getAllByRole('listitem');
  expect(items).toHaveLength(mockEmployees.length);
});
