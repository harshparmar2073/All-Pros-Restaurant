import express from 'express';
import { body } from 'express-validator';
import { 
  userLoginController, 
  userForgotPasswordController,
  userResetPasswordController 
} from '../controllers/UserLoginController.js';
import { authMiddleware } from '../middlewares/AuthenticationMiddleware.js';

const router = express.Router();

// Login Route
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').notEmpty().withMessage('Password is required')
  ],
  userLoginController
);

// Forgot Password Route
router.post(
  '/forgot-password',
  [body('email').isEmail().withMessage('Invalid email address')],
  userForgotPasswordController
);

// Reset Password Route
router.post(
  '/reset-password',
  [
    body('token').notEmpty().withMessage('Reset token is required'),
    body('newPassword')
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
      .withMessage('Password must include uppercase, lowercase, number, and special character')
  ],
  userResetPasswordController
);

// Protected Route Example
router.get(
  '/profile',
  authMiddleware,
  (req, res) => {
    res.json({ user: req.user });
  }
);

export default router;
