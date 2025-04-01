import express from 'express';
import { getDashboardData } from '../controllers/DashboardController.js';

const router = express.Router();

// GET /api/dashboard
router.get('/', getDashboardData);

export default router;
