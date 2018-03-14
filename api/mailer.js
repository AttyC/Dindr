import nodemailer from'nodemailer';

var Like = require('../models/likes.js');
var User = require('../models/users.js');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'teamglow2017@gmail.com',
    pass: process.env.EMAILPASSWORD
  }
});

exports.setMailOptions = function (like_id) {
  Like.find({ _id: like_id }).then(like =>{
    var likeInfo = like[0];
    User.find({username: likeInfo.usernameOfLiked_id}).then(user =>{
      const mailOptions = { from: 'teamglow2017@gmail.com', // sender address
        to: `${user[0].email}`, // list of receivers
        subject: 'You have been liked....', // Subject line
        html: `<p>You have been liked today by ${likeInfo.nameOfLiker}</p>
       <br>${likeInfo.nameOfLiker} asked us to pass on this message:
       <br>
       <br>${likeInfo.message}.
       <br>
       <br>To get in touch you can email ${likeInfo.nameOfLiker} on ${likeInfo.emailOfLiker}.
       <br>
       <br>Have fun getting your geek on...
       <br>
       <br>The Dind'r Team`};
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
