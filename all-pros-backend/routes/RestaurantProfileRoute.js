import express from 'express';
import { 
  getRestaurantProfile, 
  getRestaurantByOwner, 
  updateRestaurantProfile, 
  addMenuItem, 
  removeMenuItem, 
  addPhoto, 
  removePhoto, 
  addJob, 
  removeJob, 
  addSpecialty, 
  removeSpecialty 
} from '../controllers/RestaurantProfileControlller.js';
import {authMiddleware as protect } from '../middlewares/AuthenticationMiddleware.js';

const router = express.Router();

router.get('/:id', getRestaurantProfile);
router.get('/owner/me', protect, getRestaurantByOwner);
router.put('/:id', protect, updateRestaurantProfile);

router.post('/:id/menu', protect, addMenuItem);
router.delete('/:id/menu', protect, removeMenuItem);

router.post('/:id/photos', protect, addPhoto);
router.delete('/:id/photos', protect, removePhoto);

router.post('/:id/jobs', protect, addJob);
router.delete('/:id/jobs', protect, removeJob);

router.post('/:id/specialties', protect, addSpecialty);
router.delete('/:id/specialties', protect, removeSpecialty);

export default router;
