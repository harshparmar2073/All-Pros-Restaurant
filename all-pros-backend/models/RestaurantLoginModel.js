import mongoose from 'mongoose';

const RestaurantLoginSchema = new mongoose.Schema({
  supportEmail: {
    type: String,
    required: true,
    unique: true, // ensures that each email is unique
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Optionally, you can store a last login timestamp
  lastLogin: {
    type: Date,
  }
}, {
  timestamps: true // Automatically adds createdAt and updatedAt fields
});

export default mongoose.model('RestaurantLogin', RestaurantLoginSchema);
