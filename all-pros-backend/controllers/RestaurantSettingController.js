// controllers/restaurantSettingsController.js
import RestaurantSignup from '../models/RestaurantSignupModel.js';
import bcrypt from 'bcrypt';

// Update Password
export const updatePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const userId = req.user.id;

    // Find the user document by id
    const user = await RestaurantSignup.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Compare the provided old password with stored hashed password
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Current password is incorrect' });
    }

    // Validate new password length
    if (newPassword.length < 8) {
      return res.status(400).json({ message: 'Password must be at least 8 characters' });
    }

    // Hash new password and update the user document
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);

    await user.save();
    res.json({ message: 'Password updated successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update Notification Settings
export const updateNotifications = async (req, res) => {
  try {
    const userId = req.user.id;
    const newSettings = req.body; // Expected to contain fields like emailNotifications, mobileNotifications, etc.

    // Find the user document
    const user = await RestaurantSignup.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Merge existing notification settings with the new settings
    user.notificationSettings = {
      ...user.notificationSettings,
      ...newSettings,
    };

    await user.save();
    res.json({ 
      message: 'Notification preferences saved successfully',
      notificationSettings: user.notificationSettings,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update Security Settings
export const updateSecurity = async (req, res) => {
  try {
    const userId = req.user.id;
    const { emailVerified, phoneVerified, twoFactorEnabled } = req.body;

    // Find the user document
    const user = await RestaurantSignup.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update the security settings
    user.securitySettings = {
      ...user.securitySettings,
      emailVerified,
      phoneVerified,
      twoFactorEnabled,
    };

    await user.save();
    res.json({ 
      message: 'Security settings updated successfully',
      securitySettings: user.securitySettings,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get Current Settings
export const getSettings = async (req, res) => {
  try {
    const userId = req.user.id;
    
    // Find the user document
    const user = await RestaurantSignup.findById(userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    res.json({
      notificationSettings: user.notificationSettings,
      securitySettings: user.securitySettings,
      // Do not send the password back for security reasons
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
};
