import Application from '../models/ApplicationModel.js';
import { validationResult } from 'express-validator';

// GET /api/applications?userId=<restaurantId>
// If a userId is provided, only applications matching that user are returned.
export const getApplications = async (req, res) => {
  try {
    const { userId } = req.query;
    let filter = {};
    if (userId) {
      filter.userId = userId;
    }
    const applications = await Application.find(filter).sort({ postedOn: -1 });
    res.status(200).json(applications);
  } catch (err) {
    console.error('Error fetching applications:', err);
    res.status(500).json({ message: 'Server error fetching applications' });
  }
};

// POST /api/applications
// Create a new application. Make sure req.body includes a userId if you wish to associate it.
export const createApplication = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const {
      firstName,
      lastName,
      phoneNumber,
      email,
      address,
      experience,
      jobAppliedFor,
      status,
      userId,  // Pass userId here to associate the application with a restaurant/user
    } = req.body;

    const newApp = new Application({
      firstName,
      lastName,
      phoneNumber,
      email,
      address,
      experience,
      jobAppliedFor,
      status: status || 'further reference',
      userId, // Save the userId for later filtering
    });

    const savedApp = await newApp.save();
    res.status(201).json({ message: 'Application created successfully', application: savedApp });
  } catch (err) {
    console.error('Error creating application:', err);
    res.status(500).json({ message: 'Server error creating application' });
  }
};
