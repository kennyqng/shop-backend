const request = require('supertest');

const express = require('express');
const routes = require('../../routes');
const { UserController } = require('../../controllers');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

describe('User Routes', () => {
  describe('POST /api/user/registration', () => {
    it('Success case ', async () => {
      const mock = jest.spyOn(UserController, 'registerUser');
      mock.mockImplementation(() => {
        Promise.resolve(true);
      });

      const stateObj = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'abc@gmail.com',
        password: 'hello'
      };

      const response = await request(app)
        .post('/api/user/register')
        .send(stateObj);

      expect(response.body).toEqual({ msg: 'User added.' });
      expect(response.statusCode).toEqual(200);
    });

    it('should give error - no firstName', async () => {
      const stateObj = {
        lastName: 'Doe',
        email: 'abc@gmail.com',
        password: 'hello'
      };
      const response = await request(app)
        .post('/api/user/register')
        .send(stateObj);

      expect(response.statusCode).toEqual(422);
      expect(response.body).toEqual({ msg: 'First Name is required.\n' });
    });

    it('should give error - no lastName', async () => {
      const stateObj = {
        firstName: 'John',
        email: 'abc@gmail.com',
        password: 'hello'
      };
      const response = await request(app)
        .post('/api/user/register')
        .send(stateObj);

      expect(response.statusCode).toEqual(422);
      expect(response.body).toEqual({ msg: 'Last Name is required.\n' });
    });
    it('should give error - no email', async () => {
      const stateObj = {
        firstName: 'John',
        lastName: 'Doe',
        password: 'hello'
      };
      const response = await request(app)
        .post('/api/user/register')
        .send(stateObj);

      expect(response.statusCode).toEqual(422);
      expect(response.body).toEqual({ msg: 'Email is required.\n' });
    });

    it('should give error - no password', async () => {
      const stateObj = {
        firstName: 'John',
        lastName: 'Doe',
        email: 'abc@gmail.com'
      };

      const response = await request(app)
        .post('/api/user/register')
        .send(stateObj);

      expect(response.statusCode).toEqual(422);
      expect(response.body).toEqual({ msg: 'Password is required.\n' });
    });
  });
});
