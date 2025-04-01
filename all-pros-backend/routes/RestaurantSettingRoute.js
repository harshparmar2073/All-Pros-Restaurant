// routes/restaurantSettings.js
import express from 'express';
import { updatePassword, updateNotifications, updateSecurity, getSettings } from '../controllers/RestaurantSettingController.js';
import authMiddleware from '../middlewares/AuthenticationMiddleware.js';

const router = express.Router();

// Route to update the password
router.put('/password', authMiddleware, updatePassword);

// Route to update notification settings
router.put('/notifications', authMiddleware, updateNotifications);

// Route to update security settings
router.put('/security', authMiddleware, updateSecurity);

// Route to get current settings
router.get('/', authMiddleware, getSettings);

export default router;
