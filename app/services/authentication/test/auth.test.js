const request = require('supertest');
const app = require('../app');
const db = require('../config/db');
const bcrypt = require('bcrypt');

beforeAll(async () => {
  await db.query('CREATE TABLE IF NOT EXISTS users (id serial PRIMARY KEY, username VARCHAR(100) NOT NULL, email VARCHAR(100) UNIQUE NOT NULL, password VARCHAR(255) NOT NULL)');

  const username = 'John Doe';
  const email = 'johndoe@example.com';
  const password = 'password123';

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3)', [username, email, hashedPassword]);
});

afterAll(async () => {
  await db.query('DROP TABLE users CASCADE');
});

describe('POST /auth/login', () => {
  const hashedPassword = bcrypt.hash('password123', 10);
  const validUser = {
    username: 'John Doe',
    email: 'johndoe@example.com',
    password: 'password123',
  };
  console.log("VALIDUSER: " + validUser.username + validUser.email + validUser.password)


  test('Debería iniciar sesión con credenciales válidas', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({
        email: validUser.email,
        password: validUser.password,
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('user');
    expect(response.body).toHaveProperty('token');
  });


  test('No debería iniciar sesión con un email incorrecto', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({
        email: 'wrongemail@example.com',
        password: validUser.password,
      });

    expect(response.status).toBe(400);
  });

  test('No debería iniciar sesión con una contraseña incorrecta', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({
        email: validUser.email,
        password: 'wrongpassword',
      });

    expect(response.status).toBe(400);
  });
});
