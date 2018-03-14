import express from 'express';
import multer from 'multer';
import path from 'path';
import crypto from 'crypto';
import mongoose from 'mongoose';
import GridFsStorage from 'multer-gridfs-storage';
import Grid from 'gridfs-stream';
import methodOverride from 'method-override';
import bodyParser from 'body-parser';

let gfs;
let User = require('../models/users.js');
const mongoURI = process.env.MONGOLAB_URI;
const conn = mongoose.createConnection(mongoURI);
const router = express.Router();

router.use(bodyParser.json());
router.use(methodOverride('_method'));

conn.once('open', ()=> {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection('uploads');
});

const storage = new GridFsStorage({
  url: mongoURI,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'uploads'
        };
        resolve(fileInfo);
      });
    });
  }
});
const upload = multer({ storage });

const upload = multer({ storage });
router.post('/new', upload.single('file'), (req, res) => {
  User.find({ username: req.body.username }, function(err, user){
    user = user[0];
    user.profileUpload = req.file.filename;
    user.save(function (err){
      if(err) {
        console.log('filename not added');
      }
    });
    res.json({file: req.file});
  });
});

router.get('/', (req, res)=>{
  res.send('Welcome to profile');
});

router.get('/:filename', (req, res) => {
  console.log(2)
  gfs.files.findOne({filename: req.params.filename}, (err, file) =>{ // gets filename from url
    if (!file || file.length === 0){
      return res.status(404).json({
        err: 'No file exists'
      });
    }
    return res.json(file);
  });
});

router.get('/image/:filename', (req, res) => {
  gfs.files.findOne({filename: req.params.filename}, (err, file) =>{ // gets filename from url
    if (!file || file.length === 0){
      return res.status(404).json({
        err: 'No file exists'
      });
    }
    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
      const readstream = gfs.createReadStream(file.filename);
      readstream.pipe(res);
    } else {
      res.status(404).json({
        err: 'Not an image'
      });
    }
  });
});

export default router;
