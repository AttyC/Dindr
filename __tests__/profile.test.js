const request = require('supertest');
const server = require('../server')

describe('POST/api/profile/new - upload a new file', () => {
  let file = {
    fieldname: 'file',
    originalname: 'pic2.jpg',
    encoding: '7bit',
    mimetype: 'image/jpeg'
  };
  it('should accept a valid file', ()=>{
    return request(server).post('/api/profile/new')
    .send(file)
    .then((res) => {
      expect(res.status).toBe(200);
      expect(res.file.originalname).toBe('pic2.jpg');
      expect(res.file.bucketName).toBe('uploads');
      expect(res.file.contentType).toBe('image/jpeg');
      expect(res.file.fieldname).toBe('file');
    });
  });
});
