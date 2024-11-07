const mongoose = require('mongoose')

const connectDatabase = async() =>{
    await mongoose.connect('mongodb+srv://vharun06:vharun%402005@vharundatabase.myfuz.mongodb.net/gemini')
    console.log('database connected')
}

module.exports = connectDatabase
