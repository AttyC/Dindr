import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var likeSchema = new Schema({
  usernameOfLiked_id: String,
  nameOfLiker : String,
  emailOfLiker : String,
  locationOfLiker : String,
  message: String
});

var Like = mongoose.model('Like', likeSchema);

module.exports = Like;
