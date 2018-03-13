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
