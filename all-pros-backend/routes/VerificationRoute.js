import express from 'express';
import { body, validationResult } from 'express-validator';
import crypto from 'crypto';
import mailgun from 'mailgun-js';
import User from '../models/UserModel.js';
import RestaurantSignup from '../models/RestaurantSignupModel.js';
import Verification from '../models/VerificationModel.js';

const router = express.Router();

// Initialize Mailgun client using your API key and domain from .env
const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.MAILGUN_DOMAIN,
});

// Route Test - Check this first in Postman
router.get('/test', (req, res) => {
  res.send('✅ Verification Route Working with Mailgun');
});

/**
 * POST /api/verify/send
 * Expected JSON Body:
 * {
 *   "email": "user@example.com",
 *   "accountType": "user"   // or "restaurant"
 * }
 */
router.post(
  '/send',
  [
    body('email').isEmail().withMessage('Valid email is required'),
    body('accountType')
      .notEmpty()
      .withMessage('Account type is required')
      .isIn(['user', 'restaurant'])
      .withMessage('Account type must be either "user" or "restaurant"'),
  ],
  async (req, res) => {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation errors:', errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, accountType } = req.body;
    console.log('Received email for OTP:', email, 'Account type:', accountType);

    try {
      // Choose the correct model based on accountType
      let account;
      if (accountType === 'user') {
        account = await User.findOne({ email });
      } else if (accountType === 'restaurant') {
        account = await RestaurantSignup.findOne({ supportEmail: email });
      }
      if (!account) {
        return res.status(404).json({ message: 'Account not found' });
      }

      // Generate a 6-digit OTP
      const otpCode = crypto.randomInt(100000, 999999).toString();
      const expiresAt = new Date(Date.now() + 10 * 60 * 1000); // 10 minute expiry
      console.log('Generated OTP:', otpCode, 'Expires at:', expiresAt);

      // Remove any existing verification record for this account
      await Verification.findOneAndDelete({ userId: account._id });

      // Create new verification record
      const newVerification = new Verification({
        userId: account._id,
        code: otpCode,
        expiresAt,
      });
      await newVerification.save();

      // Prepare Mailgun message data
      const data = {
        from: process.env.MAILGUN_SENDER_EMAIL, // Must be a verified sender in Mailgun
        to: email,
        subject: 'Your OTP Code',
        text: `Your OTP code is ${otpCode} (valid for 10 minutes).`,
        html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                 <h2>Your Verification Code</h2>
                 <p>Your One-Time Password (OTP) is:</p>
                 <h1 style="background-color: #f0f0f0; padding: 10px; text-align: center; letter-spacing: 5px;">${otpCode}</h1>
                 <p>This code will expire in 10 minutes.</p>
                 <small>If you did not request this code, please ignore this email.</small>
               </div>`,
      };

      // Send email using Mailgun
      await new Promise((resolve, reject) => {
        mg.messages().send(data, (error, body) => {
          if (error) {
            return reject(error);
          }
          console.log('Mailgun response:', body);
          resolve(body);
        });
      });

      res.status(200).json({ message: 'OTP sent to your email', expiry: expiresAt });
    } catch (err) {
      console.error('Send OTP Error:', {
        message: err.message,
        stack: err.stack,
        responseBody: err.response?.body,
      });
      res.status(500).json({ message: 'Failed to send OTP', error: err.message });
    }
  }
);

/**
 * POST /api/verify/verify
 * Expected JSON Body:
 * {
 *   "email": "user@example.com",
 *   "accountType": "user",    // or "restaurant"
 *   "code": "123456"
 * }
 */
router.post(
  '/verify',
  [
    body('email').isEmail().withMessage('Valid email is required'),
    body('accountType')
      .notEmpty()
      .withMessage('Account type is required')
      .isIn(['user', 'restaurant'])
      .withMessage('Account type must be either "user" or "restaurant"'),
    body('code')
      .isLength({ min: 6, max: 6 })
      .withMessage('OTP code must be 6 digits'),
  ],
  async (req, res) => {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log('Validation errors:', errors.array());
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, accountType, code } = req.body;
    console.log('Verifying OTP for email:', email, 'Account type:', accountType, 'Code:', code);

    try {
      let account;
      if (accountType === 'user') {
        account = await User.findOne({ email });
      } else if (accountType === 'restaurant') {
        account = await RestaurantSignup.findOne({ supportEmail: email });
      }
      if (!account) {
        return res.status(404).json({ message: 'Account not found' });
      }

      const verification = await Verification.findOne({ userId: account._id });
      if (!verification) {
        return res.status(404).json({ message: 'No OTP found' });
      }

      if (verification.expiresAt < new Date()) {
        await Verification.deleteOne({ userId: account._id });
        return res.status(400).json({ message: 'OTP expired' });
      }

      if (verification.code !== code) {
        return res.status(400).json({ message: 'Invalid OTP' });
      }

      // Mark account as verified (update property based on account type)
      if (accountType === 'user') {
        account.isVerified = true;
      } else if (accountType === 'restaurant') {
        // Optionally, set a verification flag for restaurant accounts if needed.
      }
      await account.save();
      await Verification.deleteOne({ userId: account._id });

      res.status(200).json({ message: 'OTP verified', userId: account._id });
    } catch (err) {
      console.error('Verify OTP Error:', err);
      res.status(500).json({ message: 'Server error' });
    }
  }
);

export default router;
