import request from 'supertest';
import app from '../index';

test('GET /api/employees returns employee list', async () => {
  const res = await request(app).get('/employees');
  expect(res.statusCode).toBe(200);
  expect(Array.isArray(res.body)).toBe(true);
});
