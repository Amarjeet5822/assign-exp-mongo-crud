import mongoose from 'mongoose'

const customerSchema = new mongoose.model({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    address: String,
    city: String,
    state: String,
    country: String,
    postalCode: String,
    dateOfBirth: Date,
    gender: { type: String ,enum: ['Male', 'Female','Other']},
    loyaltyPoints: Number,
    status: String,
    deletedAt: Date,

}, {
    timeStamps: true,
    versionKey: false,
})