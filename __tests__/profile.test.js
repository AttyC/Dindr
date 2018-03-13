const request = require('supertest');
const server = require('../server')

describe('POST/api/profile/new - upload a new file', () => {

  it('should accept a valid file', function(done){
    request(server).post('/api/profile/new')
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
    .get('/api/profile/ae3808d7a9a077d23afadbcd3c91bc9f.png')
    .expect(200)
    .then(res => {
      expect(res.body).toBeInstanceOf(Object);
    });
  });
  it('should return objs w/ correct props', () => {
    return request(server)
    .get('/api/profile/d3f6ff71adb7468602442cc3d1ceee7f.png')
    .expect(200)
    .then(res => {
      // check for the expected properties
      let sampleKeys = Object.keys(res.body);
      expectedProps.forEach((key) => {
        expect(sampleKeys.includes(key)).toBe(true);
      });
    });
  });
});
