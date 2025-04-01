// File: controllers/UserController.js
import User from '../models/UserModel.js';
import jwt from 'jsonwebtoken';
import { v4 as uuidv4 } from 'uuid';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Ensure the uploads/resumes directory exists
const resumesDir = path.join(process.cwd(), 'uploads', 'resumes');
if (!fs.existsSync(resumesDir)) {
  fs.mkdirSync(resumesDir, { recursive: true });
}

// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Use the absolute path to the resumes directory
    cb(null, resumesDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + uuidv4();
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = [
      'application/pdf', 
      'application/msword', 
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only PDF and DOC files are allowed.'));
    }
  },
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB file size limit
  }
});

export const signupUser = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      contactNumber,
      email,
      age,
      password,
      previouslyWorked,
      termsAccepted
    } = req.body;

    // Parse JSON fields if they are provided as strings
    let parsedExperiences = [];
    if (req.body.experiences) {
      try {
        parsedExperiences = typeof req.body.experiences === 'string'
          ? JSON.parse(req.body.experiences)
          : req.body.experiences;
      } catch (err) {
        return res.status(400).json({ message: 'Invalid experiences format' });
      }
    }
    
    let parsedEducation = [];
    if (req.body.education) {
      try {
        parsedEducation = typeof req.body.education === 'string'
          ? JSON.parse(req.body.education)
          : req.body.education;
      } catch (err) {
        return res.status(400).json({ message: 'Invalid education format' });
      }
    }
    
    let parsedSchoolEducation = [];
    if (req.body.schoolEducation) {
      try {
        parsedSchoolEducation = typeof req.body.schoolEducation === 'string'
          ? JSON.parse(req.body.schoolEducation)
          : req.body.schoolEducation;
      } catch (err) {
        return res.status(400).json({ message: 'Invalid schoolEducation format' });
      }
    }

    // Check if user already exists
    const existingUser = await User.findOne({ 
      $or: [
        { email },
        { contactNumber }
      ]
    });

    if (existingUser) {
      return res.status(400).json({ 
        message: 'User with this email or contact number already exists' 
      });
    }

    // Validate terms acceptance (assumes validation middleware already did this)
    if (!termsAccepted) {
      return res.status(400).json({ 
        message: 'Terms and conditions must be accepted' 
      });
    }

    // Handle resume upload
    let resumeFileName = null;
    if (req.file) {
      resumeFileName = req.file.filename;
    }

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      contactNumber,
      email,
      age,
      password, // Note: password is hashed in the pre-save hook
      previouslyWorked,
      experiences: parsedExperiences,
      education: parsedEducation,
      schoolEducation: parsedSchoolEducation,
      resumeFile: resumeFileName,
      termsAccepted
    });

    await newUser.save();

    // Generate JWT token
    const token = jwt.sign(
      { 
        userId: newUser._id, 
        email: newUser.emailAddress 
      }, 
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    );

    res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email
      }
    });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ 
      message: 'Server error during signup', 
      error: error.message 
    });
  }
};

export const uploadResumeMiddleware = upload.single('resume');
