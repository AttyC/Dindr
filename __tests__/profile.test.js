const request = require('supertest');
const server = require('../server')
import { gfs } from '../api/profile'


describe('POST/api/profile/new - upload a new file', () => {

  it('should accept a valid file', function(done){
    request(server).post('/api/profile/new')
    .field({username: 'PiggieSmalls'})
    .attach('file', '__tests__/testPics/test.jpg')
    .end( function( err, res) {
      expect(res.status).toBe(200);
      expect(res.body.file.originalname).toBe('test.jpg');
      expect(res.body.file.bucketName).toBe('uploads');
      expect(res.body.file.contentType).toBe('image/jpeg');
      expect(res.body.file.fieldname).toBe('file');
      done();
    });
  });
});

describe('GET/api/profile/', () => {
  let expectedProps = ['_id', 'length', 'chunkSize', 'uploadDate', 'md5', 'filename', 'contentType']
  it('should return JSON object', () => {
    return request(server)
    .get('/api/profile/4e27c5120b1bf8fe6bf5ae9c40dc434c.jpg')
    .expect(200)
    .then(res => {
      expect(res.body).toBeInstanceOf(Object);
    });
  });
  it('should return objs w/ correct props', () => {
    return request(server)
    .get('/api/profile/4e27c5120b1bf8fe6bf5ae9c40dc434c.jpg')
    .expect(200)
    .then(res => {
      let sampleKeys = Object.keys(res.body);
      expectedProps.forEach((key) => {
      expect(sampleKeys.includes(key)).toBe(true);
      });
    });
  });
  it('shouldnt return objs with extra props', ()=>{
    return request(server)
    .get('/api/profile/4e27c5120b1bf8fe6bf5ae9c40dc434c.jpg')
    .expect(200)
    .then(res => {
      // check for only expectedProps
      let extraProps = Object.keys(res.body).filter((key) => {
        return !expectedProps.includes(key);
      });
      expect(extraProps.length).toBe(0);
    });
  });
});
