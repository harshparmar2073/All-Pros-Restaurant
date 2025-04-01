import express from 'express';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import RestaurantLogin from '../models/RestaurantSignupModel.js';
// Optionally import jwt if you want to generate a token:
// import jwt from 'jsonwebtoken';

const router = express.Router();

// POST /api/restaurants/login
router.post(
  '/login',
  [
    body('supportEmail').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()){
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { supportEmail, password } = req.body;
      const restaurant = await RestaurantLogin.findOne({ supportEmail });

      if (!restaurant) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Compare password using bcrypt
      const isMatch = await bcrypt.compare(password, restaurant.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Optionally update lastLogin timestamp
      restaurant.lastLogin = new Date();
      await restaurant.save();

      // Optionally generate a JWT token:
      // const token = jwt.sign({ id: restaurant._id }, 'your_jwt_secret', { expiresIn: '1h' });

      // Return the full restaurant data under "restaurantData"
      return res.status(200).json({ 
        message: 'Login successful', 
        // token, // Uncomment if token is generated.
        restaurantData: restaurant 
      });
    } catch (err) {
      console.error('Restaurant login error:', err);
      return res.status(500).json({ message: 'Server error' });
    }
  }
);

export default router;
