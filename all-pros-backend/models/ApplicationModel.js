import mongoose from 'mongoose';

const applicationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName:  { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email:     { type: String, required: true },
  address:   { type: String, required: true },
  experience:{ type: String, required: true },
  jobAppliedFor: { type: String, required: true },
  status:    { type: String, enum: ['shortlisted', 'interviewed', 'hired', 'rejected', 'further reference'], default: 'further reference' },
  postedOn:  { type: Date, default: Date.now },
});

const Application = mongoose.model('Application', applicationSchema);
export default Application;
