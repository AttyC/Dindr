import express from 'express';
const router = express.Router();
var User = require('../models/users.js');

router.get('/users', (req, res)=>{
  User.find({}).then(user => {
    res.send(user);
  });
});

var findUserByUserName = function(req,res){
  var username = req.params.username;
  User.find({ username: username } ).then( user => {
    res.json(user);
  });
};
router.get('/users/:username', findUserByUserName);

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
