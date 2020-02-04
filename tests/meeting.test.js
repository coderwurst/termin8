const request = require('supertest');
const app = require('../app');

describe('post endpoint for a meeting', () => {
  test('should create a new meeting', async () => {
    const response = await request(app).post('/api/meeting/');
    expect(response.statusCode).toBe(201);
    expect(response.text).toBe('NOT IMPLEMENTED: create a Meeting');
  });
});

describe('get endpoint for a list of meetings', () => {
  test('should return a list of meetings for the specified user', async () => {
    const response = await request(app).get('/api/meeting/list/12345');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(
      'NOT IMPLEMENTED: List all meetings for a user with id: 12345'
    );
  });
});

describe('get endpoint for a meeting', () => {
  test('should return details for a specific meeting', async () => {
    const response = await request(app).get('/api/meeting/23456');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('NOT IMPLEMENTED: Meeting detail for id: 23456');
  });
});

describe('put endpoint for a meeting', () => {
  test('should update details for meeting with specific id', async () => {
    const response = await request(app).put('/api/meeting/34567');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(
      'NOT IMPLEMENTED: update a meeting with given id: 34567'
    );
  });
});

describe('delete endpoint for a meeting', () => {
  test('should delete specific meeting', async () => {
    const response = await request(app).delete('/api/meeting/45678');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe(
      'NOT IMPLEMENTED: delete the meeting with given id: 45678'
    );
  });
});
