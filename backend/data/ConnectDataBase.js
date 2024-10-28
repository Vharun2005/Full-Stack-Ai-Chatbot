const mongoose = require('mongoose')

const connectDatabase = async() =>{
    await mongoose.connect('mongodb://localhost:/gemini')
    console.log('database connected')
}

module.exports = connectDatabase