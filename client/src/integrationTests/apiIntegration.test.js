import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import AllEmployee from '../Pages/AllEmployee';

const server = setupServer(
  rest.get('http://localhost:5000/employees', (req, res, ctx) => {
    return res(ctx.json([{ id: 1, name: 'John' }]));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('fetches and displays employees', async () => {
  render(<AllEmployee />);
  const item = await screen.findByText(/John/i);
  expect(item).toBeInTheDocument();
});
