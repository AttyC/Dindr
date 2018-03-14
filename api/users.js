import express from 'express';
const router = express.Router();

var User = require('../models/users.js');
var Like = require('../models/likes.js');

router.get('/', (req, res)=>{
  User.find({}).then(user => {
    res.send(user);
  });
});

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

router.get('/:username', findUserByUserName);

router.post('/new', function(req, res){
  User.create({
    username: req.body.username,
    email: req.body.email,
    skills: req.body.skills,
    experience: req.body.experience,
    bio: req.body.bio
  }).then(user => {
    res.json(user);
  });
});

router.post('/skills', (req, res)=>{
  if (typeof req.body.skills != 'undefined') {
    var regexOrSearchString = new RegExp(req.body.skills.split(' ').join('|'), 'i');
    User.find({})
    .then(users => {
      res.send(users.filter(function(user) {
        return (user.skills.join().search(regexOrSearchString) >= 0);
      }));
    });
  }
});

router.post('/:username/likes', (req, res)=>{
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

router.get('/:username/likes', findUserLikes);


module.exports = router;
