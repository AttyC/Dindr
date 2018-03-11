import express from 'express';
const router = express.Router();
var User = require('../models/users.js');

// find all users
router.get('/users', (req, res)=>{
  User.find({}).then(user => {
    res.send(user);
  });
});

router.post('/users/skills', (req, res)=>{
  var regexOrSearchString = new RegExp(req.body.skills.split(" ").join("|"), "i");

  User.find({}).then(user => {
    res.send(user.filter(function(el) {
       return (el.skills.join().search(regexOrSearchString) >= 0);
    }));
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

export default router;
