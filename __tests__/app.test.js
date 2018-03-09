const request = require('supertest');
const server = require('../server')

describe('server', () => {
 it('gets a 200 response from users end point', () => {
   request(server)
     .get('/api/users')
     .expect('Content-Type', /json/)
     .expect(200)
     .end(function(err, res) {
       if (err) throw err;
    });
  });
})
