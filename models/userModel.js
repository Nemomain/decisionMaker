import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxlength: 50 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, minlength: 8 },
  name: { type: String, required: true },
  payment_details: [{ type: mongoose.ObjectId, ref: 'paymentDetails' }],


})

userSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.password
    
  },
})

userSchema.virtual('passwordConfirmation')
  .set(function (value) {
    
    this._passwordConfirmation = value
  
  })

//pre validate
//for custom validation 
userSchema.pre('validate', function (next) {
  // ismodifed passwords ensures this only relates to password
  if (this.isModified('password') && this.password !== this._passwordConfirmation) {
    this.validate('passwordConfirmation', 'make sure passwords match')
  }
  next()
})

//bcrypt is used to hash pasword
userSchema.pre('save', function (next) {
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(12))
  }
  next()
})

export default mongoose.model('User', userSchema)