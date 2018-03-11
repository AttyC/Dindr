import express from 'express';
import nodemailer from'nodemailer';
var emailPassword = process.env.EMAILPASSWORD;

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'teamglow2017@gmail.com',
    pass: emailPassword
  }
});

const router = express.Router();
var User = require('../models/users.js');
var Like = require('../models/likes.js');

// find all users
router.get('/users', (req, res)=>{
  User.find({}).then(user => {
    res.send(user);
  });
});

// find user by username within url
var findUserByUserName = function(req,res){
  var username = req.params.username;
  User.find({ username: username } ).then( user => {
    if (user.length !== 0 ) {
      console.log(user);
      res.json(user);
    } else {
      res.status(400).json({
        status: res.status,
        message: `No user found with username: ${username}`
      });
    }
  });
};
router.get('/users/:username', findUserByUserName);

// create new user
router.post('/users/new', function(req, res){
  User.create({
    username: req.body.username,
    email: req.body.email,
    skills: req.body.skills,
    experience: req.body.experience
  }).then(user => {
    res.json(user);
  });
});

router.post('/users/:username/likes', (req, res)=>{
  var username = req.params.username;
  Like.create({
    usernameOfLiked_id: username,
    nameOfLiker: req.body.nameOfLiker,
    emailOfLiker: req.body.emailOfLiker,
    locationOfLiker: req.body.locationOfLiker,
    message: req.body.message
  }).then(like => {
    setMailOptions(like._id);
    res.json(like);
  });
});

var setMailOptions =  function (like_id) {
  Like.find({ _id: like_id }).then(like =>{
    var likeInfo = like[0];
    User.find({username: likeInfo.usernameOfLiked_id}).then(user =>{
      const mailOptions = { from: 'teamglow2017@gmail.com', // sender address
        to: `${user[0].email}`, // list of receivers
        subject: 'You have been liked....', // Subject line
        html: `<p>You have been liked today by ${likeInfo.nameOfLiker}</p>
       <br>${likeInfo.nameOfLiker} asked us to pass on this message: ${likeInfo.message}.
       <br>To get in touch you can email ${likeInfo.nameOfLiker} on ${likeInfo.emailOfLiker}.
       <br>Have fun getting your geek on...
       The Dind'r Team`};
       // plain text body
      sendEmailNotification(mailOptions);
    });
  });
};

var sendEmailNotification = function(mailOptions) {
  transporter.sendMail(mailOptions, function (err, info){
    if (err)
      console.log(err);
    else
    console.log(info);
  });
};

var findUserLikes = function(req,res){
  var username = req.params.username;
  Like.find({ usernameOfLiked_id: username } ).then( userLikes => {
    if (userLikes.length !== 0 ) {
      res.json(userLikes);
    } else {
      res.status(400).json({
        status: res.status,
        message: `No likes found for: ${username}`
      });
    }
  });
};

router.get('/users/:username/likes', findUserLikes);

export default router;
