const request = require('supertest');
const server = require('../server')

describe('GET/api/users - gets all users', () => {
  let expectedProps = ['_id', 'username', 'email', 'skills', 'experience'];
  it('should return JSON array', () => {
    return request(server)
    .get('/api/users')
    .expect(200)
    .then(res => {
      //check that it sends back an array
      expect(res.body).toBeInstanceOf(Array);
    });
  });
  it('should return objs w/ correct props', () => {
    return request(server)
    .get('/api/users')
    .expect(200)
    .then(res => {
      // check for the expected properties
      let sampleKeys = Object.keys(res.body[0]);
      expectedProps.forEach((key) => {
        expect(sampleKeys.includes(key)).toBe(true);
      });
    });
    it('shouldnt return objs with extra props', ()=>{
      return request(server)
      .get('/api/users')
      .expect(200)
      .then(res => {
        // check for only expectedProps
        let extraProps = Object.keys(res.body[0]).filter((key) => {
          return !expectedProps.includes(key);
        });
        expect(extraProps.length).toBe(0)
      });
    });
  });
});

describe('GET/api/users/:username - get user by username', () => {
  it('should return an obj of type User', () => {
    return request(server)
    .get('/api/users/Leigh-ann')
    .expect(200)
    .then((res) => {
      const reqKeys = ['_id', 'username', 'email', 'skills', 'experience'];
      const item = res.body[0];
      reqKeys.forEach((key) => {
         expect(Object.keys(item)).toContain(key);
       });
      expect(typeof item._id).toBe('string');
      expect(typeof item.username).toBe('string');
      expect(typeof item.email).toBe('string');
      expect(typeof item.skills).toBe('object');
      expect(typeof item.experience).toBe('string');
    });
  })

  it('should return a user w/ requested id', () => {
    return request(server)
    .get('/api/users/Leigh-ann')
    .expect(200)
    .then((res) => {
      expect(res.body).toEqual([{
        "username": "Leigh-ann",
        "email": "Leigh-ann@123.com",
        "skills": [
          "'Ruby,'JS'"
        ],
        "experience": "none",
        "_id": "5aa2af36db3c302b999b668b",
        "__v": 0
      }]);
    });
  });

  it('should 400 on a request for a nonexistant id', () => {
    return Promise.all([
      request(server).get('/api/users/Simon')
      .expect(400)
      .then((res) => {
        expect(res.body.message).toBe('No item found with id: -32');
      }),
      request(server).get('/api/users/99999')
      .expect(400)
      .then((res) => {
        expect(res.body.message).toBe('No item found with id: 99999');
      })
    ]);
  });
})
// working with call backs/ promises
describe('GET /api/users', function() {
  it('respond with json', function() {
    return request(server)
      .get('/api/users')
      .set('Accept', 'serverlication/json') // set a header on request only accepts serverlication/json
      .expect(200)
      .then(res => {
        expect(typeof res.body[0].username).toBe('string');
        expect(res.body[0].username).toBe("Sam");
        expect(res.body[0].email).toBe("sam@123.com");
      })
  });
});

describe('GET /api/users', function() {
  it('respond with json', function() {
    return request(server)
      .get('/api/users')
      .set('Accept', 'serverlication/json') // set a header on request only accepts serverlication/json
      .expect(200)
      .then(res => {
        expect(typeof res.body[1].username).toBe('string');
        expect(res.body[1].username).toBe("Leigh-ann");
        expect(res.body[1].email).toBe("Leigh-ann@123.com");
      })
  });
});