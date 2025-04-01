import Restaurant from '../models/RestaurantSignupModel.js';

// Get restaurant profile by ID
export const getRestaurantProfile = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ success: false, message: 'Restaurant not found' });
    }
    res.status(200).json({ success: true, data: restaurant });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// Get restaurant profile by owner ID (requires authentication)
export const getRestaurantByOwner = async (req, res) => {
  try {
    const ownerId = req.user.id; // Provided by authentication middleware
    const restaurant = await Restaurant.findOne({ owner: ownerId });
    if (!restaurant) {
      return res.status(404).json({ success: false, message: 'Restaurant not found for this owner' });
    }
    res.status(200).json({ success: true, data: restaurant });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// Update restaurant profile
export const updateRestaurantProfile = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const updates = req.body;
    // Check if the restaurant exists
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ success: false, message: 'Restaurant not found' });
    }
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(
      restaurantId,
      { $set: updates },
      { new: true, runValidators: true }
    );
    res.status(200).json({ success: true, data: updatedRestaurant });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// Add a menu item
export const addMenuItem = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const { categoryName, item } = req.body;
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ success: false, message: 'Restaurant not found' });
    }
    // Find category by name
    let category = restaurant.menuCategories.find(cat => cat.name === categoryName);
    if (category) {
      category.items.push(item);
    } else {
      restaurant.menuCategories.push({
        name: categoryName,
        items: [item],
      });
    }
    await restaurant.save();
    res.status(200).json({ success: true, data: restaurant });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// Remove a menu item
export const removeMenuItem = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const { categoryIndex, itemIndex } = req.body;
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ success: false, message: 'Restaurant not found' });
    }
    if (!restaurant.menuCategories[categoryIndex]) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }
    if (!restaurant.menuCategories[categoryIndex].items[itemIndex]) {
      return res.status(404).json({ success: false, message: 'Item not found' });
    }
    // Remove the item
    restaurant.menuCategories[categoryIndex].items.splice(itemIndex, 1);
    // Remove the category if empty
    if (restaurant.menuCategories[categoryIndex].items.length === 0) {
      restaurant.menuCategories.splice(categoryIndex, 1);
    }
    await restaurant.save();
    res.status(200).json({ success: true, data: restaurant });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// Add a photo to gallery
export const addPhoto = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const { photoUrl } = req.body;
    if (!photoUrl) {
      return res.status(400).json({ success: false, message: 'Photo URL is required' });
    }
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ success: false, message: 'Restaurant not found' });
    }
    restaurant.photos.push(photoUrl);
    await restaurant.save();
    res.status(200).json({ success: true, data: restaurant });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// Remove a photo from gallery
export const removePhoto = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const { photoIndex } = req.body;
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ success: false, message: 'Restaurant not found' });
    }
    if (!restaurant.photos[photoIndex]) {
      return res.status(404).json({ success: false, message: 'Photo not found' });
    }
    restaurant.photos.splice(photoIndex, 1);
    await restaurant.save();
    res.status(200).json({ success: true, data: restaurant });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// Add a job posting
export const addJob = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const jobData = req.body;
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ success: false, message: 'Restaurant not found' });
    }
    restaurant.jobs.push(jobData);
    await restaurant.save();
    res.status(200).json({ success: true, data: restaurant });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// Remove a job posting
export const removeJob = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const { jobIndex } = req.body;
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ success: false, message: 'Restaurant not found' });
    }
    if (!restaurant.jobs[jobIndex]) {
      return res.status(404).json({ success: false, message: 'Job not found' });
    }
    restaurant.jobs.splice(jobIndex, 1);
    await restaurant.save();
    res.status(200).json({ success: true, data: restaurant });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// Add a specialty
export const addSpecialty = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const { specialty } = req.body;
    if (!specialty) {
      return res.status(400).json({ success: false, message: 'Specialty is required' });
    }
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ success: false, message: 'Restaurant not found' });
    }
    restaurant.specialties.push(specialty);
    await restaurant.save();
    res.status(200).json({ success: true, data: restaurant });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};

// Remove a specialty
export const removeSpecialty = async (req, res) => {
  try {
    const restaurantId = req.params.id;
    const { specialtyIndex } = req.body;
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) {
      return res.status(404).json({ success: false, message: 'Restaurant not found' });
    }
    if (!restaurant.specialties[specialtyIndex]) {
      return res.status(404).json({ success: false, message: 'Specialty not found' });
    }
    restaurant.specialties.splice(specialtyIndex, 1);
    await restaurant.save();
    res.status(200).json({ success: true, data: restaurant });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error', error: error.message });
  }
};
