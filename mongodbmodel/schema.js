const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, },
  age: { type: Number, },
  city: { type: String,}
});

module.exports = mongoose.model('User', UserSchema);