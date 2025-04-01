// File: routes/UserSignupRoute.js
import express from 'express';
import { signupUser, uploadResumeMiddleware } from '../controllers/UserController.js';
import { validateSignupInput, validationErrorHandler } from '../middlewares/ValidationMiddleware.js';

const router = express.Router();

router.post(
  '/signup',
  uploadResumeMiddleware,
  validateSignupInput(),
  validationErrorHandler,
  signupUser
);

export default router;
