import 'dotenv/config'; // Loads environment variables at the very top
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';

// Import Routes
import authRoutes from './routes/UserLoginRoute.js'; 
import verifyRoutes from './routes/VerificationRoute.js';
import restaurantSignupRoutes from './routes/RestaurantSignupRoute.js';
import restaurantLoginRoutes from './routes/RestaurantLoginRoute.js';
import userRoutes from './routes/UserSignupRoute.js';
import jobsRoutes from './routes/JobRoute.js';
import applicationRoutes from './routes/ApplicationRoute.js';
import dashboardRoutes from './routes/DashboardRoute.js';
import restaurantProfileRoutes from './routes/RestaurantProfileRoute.js';
import restaurantSettingsRoutes from './routes/RestaurantSettingRoute.js';

const app = express();

// ✅ Middlewares
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173',  // fallback to default if not in .env
    credentials: true,
  })
);
app.use(helmet()); // Secure HTTP headers
app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per window
    message: 'Too many requests from this IP, please try again later',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  })
);
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ Route mounting
app.use('/api/auth', authRoutes); // Mount auth routes here
app.use('/api/verify', verifyRoutes);
app.use('/api/restaurants', restaurantSignupRoutes);
app.use('/api/restaurants', restaurantLoginRoutes);
app.use('/api/users', userRoutes);
app.use('/api/job', jobsRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/profile', restaurantProfileRoutes);
app.use('/api/options/settings', restaurantSettingsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
