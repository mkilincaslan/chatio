const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const findOrCreate = require('mongoose-find-or-create');

const userSchema = new Schema({
    googleID:{
      type: String,
      unique: true
    },
    name: String,
    surname: String,
    profilePhotoUrl: String
});

userSchema.plugin(findOrCreate);
module.exports = mongoose.model('Users', userSchema);