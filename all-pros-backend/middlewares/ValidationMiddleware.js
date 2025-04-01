// File: middlewares/ValidationMiddleware.js
import { body, validationResult } from 'express-validator';

export const validateSignupInput = () => [
  body('firstName')
    .trim()
    .notEmpty()
    .withMessage('First Name is required')
    .isLength({ min: 2 })
    .withMessage('First Name must be at least 2 characters long'),
  
  body('lastName')
    .trim()
    .notEmpty()
    .withMessage('Last Name is required')
    .isLength({ min: 2 })
    .withMessage('Last Name must be at least 2 characters long'),
  
  body('contactNumber')
    .trim()
    .notEmpty()
    .withMessage('Contact Number is required')
    .matches(/^[0-9]{10}$/)
    .withMessage('Contact Number must be 10 digits'),
  
  body('email')
    .trim()
    .notEmpty()
    .withMessage('Email Address is required')
    .isEmail()
    .withMessage('Invalid email address'),
  
  body('age')
    .notEmpty()
    .withMessage('Age is required')
    .isInt({ min: 18, max: 100 })
    .withMessage('Age must be between 18 and 100'),
  
  body('password')
    .notEmpty()
    .withMessage('Password is required')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)
    .withMessage('Password must include uppercase, lowercase, number, and special character'),
  
  body('confirmPassword')
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error('Passwords do not match');
      }
      return true;
    }),
  
  // Explicitly sanitize termsAccepted so that "true" (string) becomes boolean true.
  body('termsAccepted')
    .customSanitizer(value => {
      return (value === true || value === 'true') ? true : false;
    })
    .custom(value => {
      if (!value) {
        throw new Error('Terms and conditions must be accepted');
      }
      return true;
    }),
  
  body('experiences').optional().isJSON().withMessage('Experiences must be a valid JSON string'),
  body('education').optional().isJSON().withMessage('Education must be a valid JSON string'),
  body('schoolEducation').optional().isJSON().withMessage('School Education must be a valid JSON string'),
];

export const validationErrorHandler = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      message: 'Validation failed', 
      errors: errors.array() 
    });
  }
  next();
};
