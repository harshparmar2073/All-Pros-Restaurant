import express from 'express';
import { body } from 'express-validator';
import { getJobs, createJob } from '../controllers/JobController.js';

const router = express.Router();

// GET /api/jobs
router.get('/jobs', getJobs);

// POST /api/jobs
router.post(
  '/jobs',
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('description').notEmpty().withMessage('Description is required'),
    body('specialization').notEmpty().withMessage('Specialization is required'),
    body('startDate').isISO8601().toDate().withMessage('Valid start date is required'),
    body('endDate').isISO8601().toDate().withMessage('Valid end date is required'),
    body('assignedBy').notEmpty().withMessage('Assigned By is required'),
    body('status')
      .optional()
      .isIn(['active', 'pending', 'canceled'])
      .withMessage('Status must be active, pending, or canceled'),
    body('restaurant').notEmpty().withMessage('Restaurant id is required'),
  ],
  createJob
);

export default router;
