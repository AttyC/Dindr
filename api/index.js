import express from 'express';
const router = express.Router();
var User = require('../models/users.js')

router.get('/users', (req, res)=>{
  User.find({}).then(user => {
    res.send(user);
  });
})

var findUserByUserName = function(req,res){
  var userName = req.params.userName;
  User.find({ userName: userName } ).then( user => {
      res.json(user)
  });
}
router.get('/:userName', findUserByUserName);

router.post('/users/new', function(req, res){
  User.create({
    name: req.body.name,
    email: req.body.email,
    skills: req.body.skills,
    experience: req.body.experience
  }).then(user => {
    res.json(user)
  });
});

export default router;
