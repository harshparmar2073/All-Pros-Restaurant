import Job from '../models/JobModel.js';
import { validationResult } from 'express-validator';

// GET /api/jobs?restaurantId=<restaurantId>
// If a restaurantId is provided, only jobs for that restaurant are returned.
export const getJobs = async (req, res) => {
  try {
    const { restaurantId } = req.query;
    const filter = restaurantId ? { restaurant: restaurantId } : {};
    const jobs = await Job.find(filter).sort({ postedOn: -1 });
    res.status(200).json(jobs);
  } catch (err) {
    console.error('Error fetching jobs:', err);
    res.status(500).json({ message: 'Server error fetching jobs' });
  }
};

// POST /api/jobs
// Create a new job and associate it with a restaurant.
export const createJob = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const {
      title,
      description,
      specialization,
      startDate,
      endDate,
      assignedBy,
      status,
      restaurant, // The restaurant id to associate with this job
    } = req.body;

    const newJob = new Job({
      title,
      description,
      specialization,
      startDate,
      endDate,
      assignedBy,
      status: status || 'pending',
      restaurant, // Save the restaurant id for filtering later
    });

    const savedJob = await newJob.save();
    res.status(201).json({ message: 'Job created successfully', job: savedJob });
  } catch (err) {
    console.error('Error creating job:', err);
    res.status(500).json({ message: 'Server error creating job' });
  }
};
