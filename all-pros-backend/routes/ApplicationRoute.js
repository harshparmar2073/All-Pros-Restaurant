import express from 'express';
import { body } from 'express-validator';
import { getApplications, createApplication } from '../controllers/ApplicationController.js';

const router = express.Router();

// GET /api/applications
router.get('/', getApplications);

// POST /api/applications
router.post(
  '/',
  [
    body('firstName').notEmpty().withMessage('First Name is required'),
    body('lastName').notEmpty().withMessage('Last Name is required'),
    body('phoneNumber').notEmpty().withMessage('Phone Number is required'),
    body('email').isEmail().withMessage('A valid email is required'),
    body('address').notEmpty().withMessage('Address is required'),
    body('experience').notEmpty().withMessage('Experience is required'),
    body('jobAppliedFor').notEmpty().withMessage('Job Applied For is required'),
    body('status')
      .optional()
      .isIn(['shortlisted', 'interviewed', 'hired', 'rejected', 'further reference'])
      .withMessage('Status must be one of: shortlisted, interviewed, hired, rejected, or further reference'),
  ],
  createApplication
);

export default router;
