const mongoose = require('mongoose')

let Schema = mongoose.Schema; 

const Card = new Schema({
    _id: String,
    title: String,
    description: String

})

module.exports = mongoose.model('Card', Card)