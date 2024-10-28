const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    questions:[String]
})

module.exports = mongoose.model('user',UserSchema)