import express from 'express';
import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import mongoose from 'mongoose';
import GridFsStorage from 'multer-gridfs-storage';
import Grid from 'gridfs-stream';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';

const router = express.Router();
router.use(bodyParser.json());
router.use(methodOverride('_method'));

// mongo URI
const mongoURI = process.env.MONGOLAB_URI;
// mongo connection
const conn = mongoose.createConnection(mongoURI);
// Init gfs
let gfs;

conn.once('open', ()=> {
  // init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

// create storage engine

const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => { //used to generate names - unique names
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads' // should match collection name
        };
        resolve(fileInfo); // resolves the promise
      });
    });
  }
});
const upload = multer({ storage }); // passes the storage engine

//  GET/profiles
router.get('/', (req, res)=>{
  res.send('hello');
});

router.post('/', upload.single('file'), (req, res) => {   // 'file' refers to form field
  res.json({file: req.file});
});

// @route POST/upload
// @desc uploads file to database


// var sUpload = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, './api/uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.fieldname + '-' + Date.now() + '.jpg');
//   }
// });
// var upload = multer({ storage: storage }).single('profileImage');
//
// router.post('/', function (req, res) {
//   upload(req, res, function (err) {
//     if (err) {
//
//     }
//     res.json({
//       success: true,
//       message: 'image uploaded'
//     });
//     // Everything went fine
//   });
// });
//
//
export default router;
