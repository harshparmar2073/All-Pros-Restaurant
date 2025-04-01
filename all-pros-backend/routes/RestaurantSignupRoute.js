import express from 'express';
import { body, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import Restaurant from '../models/RestaurantSignupModel.js';

const router = express.Router();

// POST /api/restaurants/signup
router.post(
  '/signup',
  [
    body('restaurantName')
      .notEmpty()
      .withMessage('Name of Restaurant is required'),
    body('ownerName')
      .notEmpty()
      .withMessage('Name of Owner is required'),
    body('contactPersonName')
      .notEmpty()
      .withMessage('Name of Contact Person is required'),
    body('location')
      .notEmpty()
      .withMessage('Location is required'),
    body('phoneNumber')
      .notEmpty()
      .withMessage('Phone number is required'),
    body('supportEmail')
      .isEmail()
      .withMessage('Valid support email is required'),
    body('password')
      .isLength({ min: 6 })
      .withMessage('Password must be at least 6 characters')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/)
      .withMessage('Password must include uppercase, lowercase, number, and special character'),
    body('confirmPassword')
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error('Passwords must match');
        }
        return true;
      }),
    body('restaurantType')
      .notEmpty()
      .withMessage('Type of Restaurant is required'),
    // Only require branchLocation if hasBranches is 'yes'
    body('branchLocation').custom((value, { req }) => {
      if (req.body.hasBranches === 'yes' && !value) {
        throw new Error('Branch Location is required');
      }
      return true;
    }),
  ],
  async (req, res) => {
    // Validate inputs
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Hash the password before saving
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      // Create new restaurant record with hashed password
      const newRestaurant = new Restaurant({
        restaurantName: req.body.restaurantName,
        ownerName: req.body.ownerName,
        contactPersonName: req.body.contactPersonName,
        location: req.body.location,
        phoneNumber: req.body.phoneNumber,
        supportEmail: req.body.supportEmail,
        password: hashedPassword,
        restaurantType: req.body.restaurantType,
        hasBranches: req.body.hasBranches,
        branchLocation: req.body.branchLocation || null,
      });

      const savedRestaurant = await newRestaurant.save();
      return res.status(201).json({ message: 'Signup successful!', restaurant: savedRestaurant });
    } catch (err) {
      console.error('Signup error:', err);
      return res.status(500).json({ message: 'Server error' });
    }
  }
);

export default router;
