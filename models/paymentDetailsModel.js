import mongoose from 'mongoose'

const paymentDetailsSchema = new mongoose.Schema({
  card_number: { type: String, required: true, unique: true },
  expiry_date: { type: String, required: true },
  sort_code: { type: String },
  user: { type: mongoose.ObjectId, ref: 'User' },
})




export default mongoose.model('paymentDetails', paymentDetailsSchema)