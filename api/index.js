import express from 'express';
import { setMailOptions } from './mailer';

const router = express.Router();

var Like = require('../models/likes.js');
var User = require('../models/users.js');

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
