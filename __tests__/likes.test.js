const request = require('supertest');
const server = require('../server');

describe('POST/api/users/user_id/likes - create a new like', () => {
  let liker = {
    nameOfLiker: 'Sam',
    emailOfLiker: 'Sam@smalls.co.uk',
    locationOfLiker: 'London',
    message: 'Hey Gurl'
  };
  it('should accept a new valid like', ()=>{
    return request(server).post('/api/users/PiggieSmalls/likes')
    .send(liker)
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.body.emailOfLiker).toBe('Sam@smalls.co.uk');
      expect(res.body.nameOfLiker).toBe('Sam');
      expect(res.body.locationOfLiker).toBe('London');
      expect(res.body.usernameOfLiked_id).toBe('PiggieSmalls');
      expect(res.body.message).toBe('Hey Gurl');
    });
  });
});

//
describe('GET/api/users/user_id/likes - gets all individual users likes', () => {
  let expectedProps = ['_id', 'usernameOfLiked_id', 'nameOfLiker', 'emailOfLiker', 'locationOfLiker', 'message', '__v'];
  it('should return JSON array', () => {
    return request(server)
    .get('/api/users/PiggieSmalls/likes')
    .expect(200)
    .then(res => {
      //check that it sends back an array
      expect(res.body).toBeInstanceOf(Array);
    });
  });
  it('should return objs w/ correct props', () => {
    return request(server)
    .get('/api/users/PiggieSmalls/likes')
    .expect(200)
    .then(res => {
      // check for the expected properties
      let sampleKeys = Object.keys(res.body[0]);
      expectedProps.forEach((key) => {
        expect(sampleKeys.includes(key)).toBe(true);
      });
    });
  });
  it('shouldnt return objs with extra props', ()=>{
    return request(server)
      .get('/api/users/PiggieSmalls/likes')
      .expect(200)
      .then(res => {
        // check for only expectedProps
        let extraProps = Object.keys(res.body[0]).filter((key) => {
          return !expectedProps.includes(key);
        });
        expect(extraProps.length).toBe(0);
      });
  });
});

describe('GET/api/users/:username/likes - get likes by user', () => {
  it('should return an obj of type Like', () => {
    return request(server)
    .get('/api/users/PiggieSmalls/likes')
    .expect(200)
    .then((res) => {
      const reqKeys = ['_id', 'usernameOfLiked_id', 'nameOfLiker', 'emailOfLiker', 'locationOfLiker', 'message', '__v'];
      const item = res.body[0];
      reqKeys.forEach((key) => {
        expect(Object.keys(item)).toContain(key);
      });
      expect(typeof item._id).toBe('string');
      expect(typeof item.usernameOfLiked_id).toBe('string');
      expect(typeof item.nameOfLiker).toBe('string');
      expect(typeof item.emailOfLiker).toBe('string');
      expect(typeof item.locationOfLiker).toBe('string');
      expect(typeof item.message).toBe('string');
    });
  });

  it('should return all likes only for requested user', () => {
    return request(server)
    .get('/api/users/PiggieSmalls/likes')
    .expect(200)
    .then((res) => {
      expect(res.body[0].usernameOfLiked_id).toBe('PiggieSmalls');
    });
  });

  it('should 400 on a request for a nonexistant id', () => {
    return Promise.all([
      request(server).get('/api/users/Simon/likes')
      .expect(400)
      .then((res) => {
        expect(res.body.message).toBe('No likes found for: Simon');
      }),
      request(server).get('/api/users/Phil/likes')
      .expect(400)
      .then((res) => {
        expect(res.body.message).toBe('No likes found for: Phil');
      })
    ]);
  });
});
