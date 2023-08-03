import mongoose from 'mongoose'; 

let Schema = mongoose.Schema; 

const User = mongoose.model('User', Schema({
    _id: String,
    title: String,
    description: String

}))

export default User; 