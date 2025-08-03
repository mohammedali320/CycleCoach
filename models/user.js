const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const userSchema=new mongoose.Schema({
    name:{type: String ,required: true},
    email:{type: String ,required: true},
    password: {type: String ,required: true},
    schedule: [{type:mongoose.Schema.Types.ObjectId, ref:'Workouts'}]
})

userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 8)
  }
  next()
})

// JWT Token Generation
userSchema.methods.generateAuthToken = async function() {
  const token = jwt.sign({ _id: this._id }, 'secret')
  return token
}

// Hide password from JSON responses
userSchema.methods.toJSON = function() {
  const user = this.toObject()
  delete user.password
  return user
}

const User = mongoose.model('User', userSchema)

module.exports = User
