import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
	id: String,   
	firstNmae: String,
	lastName: String,
	fullName: String,
	userName: String,
	primaryEmailAddress: String,
	emailAddresses: [String],
	primaryPhoneNumber: String,
	lastSignInAt: Date
});
