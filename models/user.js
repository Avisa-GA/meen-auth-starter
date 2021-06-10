
// DEPENDENCIES
const mongoose = require('mongoose')
const Schema = mongoose.Schema

// USER SCHEMA
const userSchema = Schema( {
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
})

// USER MODEL
const User = mongoose.model('User', userSchema)

// EXPORT USER MODEL
module.exports = User