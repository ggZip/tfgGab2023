const request = require('supertest');
const app = require('../app');
const db = require('../config/db');

beforeEach(async () => {
  await db.query('DELETE FROM users');
});

afterAll(async () => {
  await db.query('DELETE FROM users');
});

describe('POST /user/register', () => {
  test('Debería crear un nuevo usuario con datos válidos', async () => {
    const response = await request(app)
      .post('/user/register')
      .send({
        username: 'John Doe',
        email: 'johndoe@example.com',
        password: 'password123',
      })
      .expect(201);

    expect(response.body).toHaveProperty('id');
    expect(response.body.username).toBe('John Doe');
    expect(response.body.email).toBe('johndoe@example.com');
  });

  test('No debería crear un usuario con un email inválido', async () => {
    const response = await request(app)
      .post('/user/register')
      .send({
        username: 'Jane Doe',
        email: 'janedoe@example',
        password: 'password123',
      })
      .expect(400);

    expect(response.body.error).toBe('Invalid email format');
  });
});
