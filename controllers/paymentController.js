import paymentDetails from '../models/paymentDetailsModel.js'


const SK = process.env.PAYMENT_SECRET_KEY
// const stripe = require('stripe')(SK)






// Payment intent creation endpoint equivalent
export const test = async (req, res) => {
  try {
    
    const { cardNumber, expirationDate, cvv, JWTToken } =  req.body
    const newPaymentDetails = paymentDetails.create(req.body)
    // Create a payment intent
    // const intent = await stripe.paymentIntents.create({
    //   amount: 15,
    //   currency: 'GBP',
    //   description: 'One off payment',
    // })

    res.status(200).json({ msg: 'endpoint'})
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}