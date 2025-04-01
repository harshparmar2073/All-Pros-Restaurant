import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  specialization: { type: String, required: true },
  postedOn: { type: Date, default: Date.now },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  assignedBy: { type: String, required: true },
  status: { type: String, enum: ['active', 'pending', 'canceled'], default: 'pending' },
  // Associate each job with a restaurant (assumes a Restaurant model exists)
  restaurant: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true }
});

const Job = mongoose.model('Job', jobSchema);

export default Job;
