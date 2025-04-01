import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  contactNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    sparse: true // Only indexes documents that have a value for email
  },
  age: {
    type: Number,
    required: true,
    min: 18
  },
  password: {
    type: String,
    required: true
  },
  isVerified: {
    type: Boolean,
    default: false
  },
  previouslyWorked: {
    type: String,
    enum: ['yes', 'no'],
    default: 'no'
  },
  experiences: [{
    restaurantName: String,
    jobProfile: String,
    years: String,
    previouslyWorkedHere: {
      type: String,
      enum: ['yes', 'no'],
      default: 'no'
    }
  }],
  education: [{
    collegeName: String,
    degreeName: String,
    grades: String,
    startYear: Number,
    endYear: Number
  }],
  schoolEducation: [{
    schoolName: String,
    startYear: Number,
    endYear: Number
  }],
  resumeFile: {
    type: String,
    default: null
  },
  termsAccepted: {
    type: Boolean,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Pre-save hook to hash the password if it's new or modified
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Instance method to compare candidate password with stored hashed password
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

export default mongoose.model('User', userSchema);
