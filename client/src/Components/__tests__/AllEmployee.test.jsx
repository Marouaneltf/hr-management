import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AllEmployee from '../AllEmployee';  // Adjust import path as needed
import { useAllEmployees } from '../../hooks/useAllEmployees';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock the custom hook and Swal
jest.mock('../../hooks/useAllEmployees');
jest.mock('sweetalert2', () => ({
    fire: jest.fn(),
}));

describe('AllEmployee Component', () => {
    const mockEmployees = [
        { employee_id: 1, first_name: 'John', last_name: 'Doe', email: 'john.doe@example.com', phone_number: '123-456-7890', hire_date: '2020-01-01', salary: 50000, job_title: 'Developer', department_name: 'Engineering' },
        { employee_id: 2, first_name: 'Jane', last_name: 'Smith', email: 'jane.smith@example.com', phone_number: '123-555-7890', hire_date: '2019-03-15', salary: 60000, job_title: 'Designer', department_name: 'Design' },
    ];

    beforeEach(() => {
        useAllEmployees.mockReturnValue([mockEmployees, false, jest.fn()]);
    });

    test('displays employee list correctly', () => {
        render(
            <Router>
                <AllEmployee />
            </Router>
        );

        expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
        expect(screen.getByText(/Jane Smith/i)).toBeInTheDocument();
    });

    test('search functionality filters employees by name', () => {
        render(
            <Router>
                <AllEmployee />
            </Router>
        );

        const searchInput = screen.getByPlaceholderText('Search by name or email');
        fireEvent.change(searchInput, { target: { value: 'Jane' } });

        expect(screen.getByText(/Jane Smith/i)).toBeInTheDocument();
        expect(screen.queryByText(/John Doe/i)).not.toBeInTheDocument();
    });

    test('opens employee details modal when "Details" button is clicked', async () => {
        render(
            <Router>
                <AllEmployee />
            </Router>
        );

        const detailsButton = screen.getByText(/Details/i);
        fireEvent.click(detailsButton);

        await waitFor(() => {
            expect(screen.getByText(/Email:/i)).toBeInTheDocument();
            expect(screen.getByText(/Phone:/i)).toBeInTheDocument();
        });
    });

    test('triggers employee delete confirmation when "Delete" button is clicked', async () => {
        render(
            <Router>
                <AllEmployee />
            </Router>
        );

        const deleteButton = screen.getByRole('link', { name: /delete/i });
        fireEvent.click(deleteButton);

        await waitFor(() => {
            expect(Swal.fire).toHaveBeenCalledWith(expect.objectContaining({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
            }));
        });
    });

    test('shows loading spinner when data is being fetched', () => {
        useAllEmployees.mockReturnValue([[], true, jest.fn()]); // Simulate loading state

        render(
            <Router>
                <AllEmployee />
            </Router>
        );

        expect(screen.getByAltText('Loading')).toBeInTheDocument();
    });
});
