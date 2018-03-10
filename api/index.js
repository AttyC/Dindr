import express from 'express';
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
    res.json(like);
  });
});

export default router;
