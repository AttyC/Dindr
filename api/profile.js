import express from 'express';
import multer from 'multer';
const router = express.Router();

router.get('/', (req, res)=>{
  res.send("hello")
})


var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './api/uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.jpg')
  }
})
var upload = multer({ storage: storage }).single('profileImage')

router.post('/', function (req, res) {
  upload(req, res, function (err) {
    if (err) {

    }
      res.json({
        success: true,
        message: "image uploaded"
      });
    // Everything went fine
  })
})


export default router;
