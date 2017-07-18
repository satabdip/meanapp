const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Account = new Schema({
	isbn: String,
    username: String,
    email:String,
    password: String,
    confirmpassword:String
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('Account', Account);