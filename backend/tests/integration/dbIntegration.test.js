import db from '../db';

test('connects to database and retrieves data', async () => {
  const employees = await db.query('SELECT * FROM employees');
  expect(Array.isArray(employees)).toBe(true);
});
