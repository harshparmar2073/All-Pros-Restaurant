import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Tabs,
  Tab,
  Typography,
  Button,
  CircularProgress,
  TextField,
  Grid,
  Paper,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem as MuiMenuItem,
  Card,
  CardMedia,
  CardContent,
  Chip,
  Tooltip,
  Fade,
  useTheme,
  useMediaQuery,
  Container,
  Backdrop,
  Snackbar,
  Alert
} from '@mui/material';
import {
  Edit,
  Save,
  Add,
  Delete,
  PhotoCamera,
  RestaurantMenu,
  Collections,
  Work,
  Stars,
  FoodBank,
  LocalPhone,
  Email,
  Language,
  AccessTime,
  LocationOn
} from '@mui/icons-material';

const API_BASE_URL = 'http://localhost:5000';

const fetchRestaurantProfile = async (id) => {
  try {
    console.log(`Making API request to: ${API_BASE_URL}/api/profile/${id}`);
    const response = await fetch(`${API_BASE_URL}/api/profile/${id}`);
    console.log('Raw API response:', response);
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`API error (${response.status}):`, errorText);
      throw new Error(`Server returned ${response.status}: ${errorText}`);
    }
    const data = await response.json();
    console.log('Parsed API response data:', data);
    return data;
  } catch (error) {
    console.error('Error in fetchRestaurantProfile:', error);
    throw error;
  }
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`restaurant-tabpanel-${index}`}
      aria-labelledby={`restaurant-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>{children}</Box>
      )}
    </div>
  );
}

const RestaurantProfile = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [id, setId] = useState(null);
  const [dataSource, setDataSource] = useState('initializing');
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
  const [restaurantData, setRestaurantData] = useState({
    name: '',
    description: '',
    address: '',
    phone: '',
    email: '',
    website: '',
    hours: '',
    menu: [],
    photos: [],
    jobs: [],
    specialties: []
  });
  const [menuDialog, setMenuDialog] = useState(false);
  const [jobDialog, setJobDialog] = useState(false);
  const [photoDialog, setPhotoDialog] = useState(false);
  const [specialtyDialog, setSpecialtyDialog] = useState(false);
  const [newMenuItem, setNewMenuItem] = useState({ name: '', description: '', price: '', category: '' });
  const [newJob, setNewJob] = useState({ title: '', description: '', requirements: '', salary: '' });
  const [newPhoto, setNewPhoto] = useState('');
  const [newSpecialty, setNewSpecialty] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    console.log('Current restaurantData state:', restaurantData);
  }, [restaurantData]);

  useEffect(() => {
    const fetchProfileData = async () => {
      setLoading(true);
      try {
        console.log('Attempting to retrieve data from localStorage');
        const storedData = localStorage.getItem('restaurantData');
        console.log('Raw localStorage data:', storedData);
        
        if (!storedData) {
          console.error("No restaurant data found in localStorage");
          setError("Restaurant data not found. Please login again.");
          setLoading(false);
          return;
        }
        
        let parsedData;
        try {
          parsedData = JSON.parse(storedData);
          console.log('Successfully parsed localStorage data:', parsedData);
        } catch (parseErr) {
          console.error("Error parsing localStorage data:", parseErr);
          setError("Invalid data format. Please login again.");
          setLoading(false);
          return;
        }
        
        if (!parsedData) {
          console.error("Parsed data is null or undefined:", parsedData);
          setError("Incomplete restaurant data. Please login again.");
          setLoading(false);
          return;
        }
        
        if (!parsedData._id && parsedData.restaurantName) {
          useFallbackData(parsedData);
          setLoading(false);
          return;
        } else if (!parsedData._id) {
          console.error("Parsed data is missing _id:", parsedData);
          setError("Incomplete restaurant data. Please login again.");
          setLoading(false);
          return;
        }
        
        setId(parsedData._id);
        
        try {
          console.log(`Fetching restaurant profile from API for ID: ${parsedData._id}`);
          const response = await fetchRestaurantProfile(parsedData._id);
          console.log('API response:', response);
          
          if (response && response.success && response.data) {
            console.log('Setting restaurant data from API response');
            setDataSource('api');
            
            const apiData = {
              name: response.data.name || parsedData.restaurantName || 'Restaurant Name',
              description: response.data.description || parsedData.description || '',
              address: response.data.address || parsedData.location || '',
              phone: response.data.phone || parsedData.phoneNumber || '',
              email: response.data.email || parsedData.supportEmail || '',
              website: response.data.website || parsedData.website || '',
              hours: response.data.hours || parsedData.operatingHours || '',
              profileImage: response.data.profileImage || parsedData.profileImage || '',
              menu: Array.isArray(response.data.menu) ? response.data.menu : [],
              photos: Array.isArray(response.data.photos) ? response.data.photos : [],
              jobs: Array.isArray(response.data.jobs) ? response.data.jobs : [],
              specialties: Array.isArray(response.data.specialties) ? response.data.specialties : []
            };
            
            console.log('Normalized API data:', apiData);
            setRestaurantData(apiData);
          } else {
            console.warn("API request succeeded but returned error:", response);
            useFallbackData(parsedData);
          }
        } catch (apiErr) {
          console.error("API request failed:", apiErr);
          useFallbackData(parsedData);
        }
      } catch (err) {
        console.error("General error in fetchProfileData:", err);
        setError("Error loading restaurant profile: " + err.message);
        setRestaurantData({
          name: 'Error Loading Data',
          description: 'There was a problem loading your restaurant profile data.',
          menu: [],
          photos: [],
          jobs: [],
          specialties: []
        });
      } finally {
        setLoading(false);
      }
    };

    const useFallbackData = (parsedData) => {
      console.log('Using fallback data from localStorage', parsedData);
      setDataSource('localStorage');
      
      const fallbackData = {
        name: parsedData.restaurantName || 'Restaurant Name',
        description: parsedData.description || '',
        address: parsedData.location || '',
        phone: parsedData.phoneNumber || '',
        email: parsedData.supportEmail || '',
        website: parsedData.website || '',
        hours: parsedData.operatingHours || '',
        profileImage: parsedData.profileImage || '',
        menu: Array.isArray(parsedData.menu) ? parsedData.menu : [],
        photos: Array.isArray(parsedData.photos) ? parsedData.photos : [],
        jobs: Array.isArray(parsedData.jobs) ? parsedData.jobs : [],
        specialties: Array.isArray(parsedData.specialties) ? parsedData.specialties : []
      };
      
      console.log('Fallback data being set:', fallbackData);
      setRestaurantData(fallbackData);
      setError("Could not connect to server. Showing locally stored data.");
    };

    fetchProfileData();
  }, []);

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  const handleEditProfile = async () => {
    if (isEditing) {
      try {
        if (!id) {
          showSnackbar('Restaurant ID not found', 'error');
          return;
        }
        
        console.log('Saving profile data:', restaurantData);
        
        if (error && error.includes('Could not connect to server')) {
          console.log('Saving locally only (no API connection)');
          const currentData = JSON.parse(localStorage.getItem('restaurantData'));
          
          if (currentData) {
            const updatedLocalData = {
              ...currentData,
              restaurantName: restaurantData.name,
              description: restaurantData.description,
              location: restaurantData.address,
              phoneNumber: restaurantData.phone,
              supportEmail: restaurantData.email,
              website: restaurantData.website,
              operatingHours: restaurantData.hours
            };
            
            localStorage.setItem('restaurantData', JSON.stringify(updatedLocalData));
            showSnackbar('Profile updated locally. Changes will sync when server connection is restored.', 'info');
          }
          
          setIsEditing(false);
          return;
        }
        
        const response = await fetch(`${API_BASE_URL}/api/profile/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(restaurantData)
        });
        
        const data = await response.json();
        console.log('Profile update response:', data);
        
        if (data.success) {
          showSnackbar('Profile updated successfully!', 'success');
          
          const currentData = JSON.parse(localStorage.getItem('restaurantData'));
          if (currentData) {
            const updatedLocalData = {
              ...currentData,
              restaurantName: restaurantData.name,
              description: restaurantData.description,
              location: restaurantData.address,
              phoneNumber: restaurantData.phone,
              supportEmail: restaurantData.email,
              website: restaurantData.website,
              operatingHours: restaurantData.hours
            };
            
            localStorage.setItem('restaurantData', JSON.stringify(updatedLocalData));
          }
        } else {
          showSnackbar('Failed to update profile: ' + (data.message || 'Unknown error'), 'error');
        }
      } catch (err) {
        console.error('Error in profile update:', err);
        showSnackbar('Error updating profile: ' + (err.message || 'Unknown error'), 'error');
      }
    }
    
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Updating field ${name} to: ${value}`);
    setRestaurantData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleProfileImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedImage(file);
      
      // Create a preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result);
        
        // In a real app, we would upload the file here
        // For now, just update the state with the preview URL
        setRestaurantData(prevData => ({
          ...prevData,
          profileImage: e.target.result
        }));
      };
      reader.readAsDataURL(file);
      
      showSnackbar('Profile image updated!', 'success');
    }
  };

  const handleAddMenuItem = async () => {
    try {
      if (!id) {
        showSnackbar('Restaurant ID not found', 'error');
        return;
      }
      
      const { name, description, price, category, newCategory } = newMenuItem;
      
      if (!name || !price) {
        showSnackbar('Name and price are required', 'warning');
        return;
      }
      
      const categoryName = category === 'new' ? newCategory : category;
      
      if (!categoryName) {
        showSnackbar('Category is required', 'warning');
        return;
      }
      
      const item = { name, description, price: parseFloat(price) };
      console.log('Adding menu item:', { categoryName, item });
      
      if (error && error.includes('Could not connect to server')) {
        console.log('Adding menu item locally (no API connection)');
        let updatedMenu = [...(restaurantData.menu || [])];
        const categoryIndex = updatedMenu.findIndex(c => c.name === categoryName);
        
        if (categoryIndex >= 0) {
          updatedMenu[categoryIndex].items.push(item);
        } else {
          updatedMenu.push({ name: categoryName, items: [item] });
        }
        
        setRestaurantData(prevData => ({ ...prevData, menu: updatedMenu }));
        setMenuDialog(false);
        setNewMenuItem({ name: '', description: '', price: '', category: '' });
        showSnackbar('Menu item added locally', 'info');
        return;
      }
      
      const response = await fetch(`${API_BASE_URL}/api/profile/${id}/menu`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ category: categoryName, item })
      });
      
      const data = await response.json();
      console.log('Add menu item response:', data);
      
      if (data.success) {
        setRestaurantData(data.data);
        setMenuDialog(false);
        setNewMenuItem({ name: '', description: '', price: '', category: '' });
        showSnackbar('Menu item added successfully!', 'success');
      } else {
        showSnackbar('Failed to add menu item: ' + (data.message || 'Unknown error'), 'error');
      }
    } catch (err) {
      console.error('Error in add menu item:', err);
      showSnackbar('Error adding menu item: ' + (err.message || 'Unknown error'), 'error');
    }
  };

  const handleRemoveMenuItem = async (categoryIndex, itemIndex) => {
    try {
      if (!id) {
        showSnackbar('Restaurant ID not found', 'error');
        return;
      }
      
      if (error && error.includes('Could not connect to server')) {
        console.log('Removing menu item locally (no API connection)');
        const updatedMenu = [...restaurantData.menu];
        updatedMenu[categoryIndex].items.splice(itemIndex, 1);
        
        if (updatedMenu[categoryIndex].items.length === 0) {
          updatedMenu.splice(categoryIndex, 1);
        }
        
        setRestaurantData(prevData => ({ ...prevData, menu: updatedMenu }));
        showSnackbar('Menu item removed locally', 'info');
        return;
      }
      
      const response = await fetch(`${API_BASE_URL}/api/profile/${id}/menu/${categoryIndex}/${itemIndex}`, {
        method: 'DELETE',
      });
      
      const data = await response.json();
      console.log('Remove menu item response:', data);
      
      if (data.success) {
        setRestaurantData(data.data);
        showSnackbar('Menu item removed successfully!', 'success');
      } else {
        showSnackbar('Failed to remove menu item: ' + (data.message || 'Unknown error'), 'error');
      }
    } catch (err) {
      console.error('Error in remove menu item:', err);
      showSnackbar('Error removing menu item: ' + (err.message || 'Unknown error'), 'error');
    }
  };

  const handleAddPhoto = async () => {
    try {
      if (!id) {
        showSnackbar('Restaurant ID not found', 'error');
        return;
      }
      
      if (!newPhoto) {
        showSnackbar('Photo URL is required', 'warning');
        return;
      }
      
      if (error && error.includes('Could not connect to server')) {
        console.log('Adding photo locally (no API connection)');
        const updatedPhotos = [...(restaurantData.photos || []), newPhoto];
        setRestaurantData(prevData => ({ ...prevData, photos: updatedPhotos }));
        setPhotoDialog(false);
        setNewPhoto('');
        showSnackbar('Photo added locally', 'info');
        return;
      }
      
      const response = await fetch(`${API_BASE_URL}/api/profile/${id}/photos`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ photoUrl: newPhoto })
      });
      
      const data = await response.json();
      console.log('Add photo response:', data);
      
      if (data.success) {
        setRestaurantData(data.data);
        setPhotoDialog(false);
        setNewPhoto('');
        showSnackbar('Photo added successfully!', 'success');
      } else {
        showSnackbar('Failed to add photo: ' + (data.message || 'Unknown error'), 'error');
      }
    } catch (err) {
      console.error('Error in add photo:', err);
      showSnackbar('Error adding photo: ' + (err.message || 'Unknown error'), 'error');
    }
  };

  const handleLocalPhotoUpload = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Create a preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        
        // In a real app, we would upload the file here and get a URL back
        // For now, just add the data URL to the photos array
        const updatedPhotos = [...(restaurantData.photos || []), imageUrl];
        setRestaurantData(prevData => ({ ...prevData, photos: updatedPhotos }));
        showSnackbar('Photo uploaded successfully!', 'success');
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemovePhoto = async (photoIndex) => {
    try {
      if (!id) {
        showSnackbar('Restaurant ID not found', 'error');
        return;
      }
      
      if (error && error.includes('Could not connect to server')) {
        console.log('Removing photo locally (no API connection)');
        const updatedPhotos = [...restaurantData.photos];
        updatedPhotos.splice(photoIndex, 1);
        setRestaurantData(prevData => ({ ...prevData, photos: updatedPhotos }));
        showSnackbar('Photo removed locally', 'info');
        return;
      }
      
      const response = await fetch(`${API_BASE_URL}/api/profile/${id}/photos/${photoIndex}`, {
        method: 'DELETE',
      });
      
      const data = await response.json();
      console.log('Remove photo response:', data);
      
      if (data.success) {
        setRestaurantData(data.data);
        showSnackbar('Photo removed successfully!', 'success');
      } else {
        showSnackbar('Failed to remove photo: ' + (data.message || 'Unknown error'), 'error');
      }
    } catch (err) {
      console.error('Error in remove photo:', err);
      showSnackbar('Error removing photo: ' + (err.message || 'Unknown error'), 'error');
    }
  };

  const handleAddJob = async () => {
    try {
      if (!id) {
        showSnackbar('Restaurant ID not found', 'error');
        return;
      }
      
      if (!newJob.title || !newJob.description) {
        showSnackbar('Job title and description are required', 'warning');
        return;
      }
      
      if (error && error.includes('Could not connect to server')) {
        console.log('Adding job locally (no API connection)');
        const updatedJobs = [...(restaurantData.jobs || []), newJob];
        setRestaurantData(prevData => ({ ...prevData, jobs: updatedJobs }));
        setJobDialog(false);
        setNewJob({ title: '', description: '', requirements: '', salary: '' });
        showSnackbar('Job added locally', 'info');
        return;
      }
      
      const response = await fetch(`${API_BASE_URL}/api/profile/${id}/jobs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newJob)
      });
      
      const data = await response.json();
      console.log('Add job response:', data);
      
      if (data.success) {
        setRestaurantData(data.data);
        setJobDialog(false);
        setNewJob({ title: '', description: '', requirements: '', salary: '' });
        showSnackbar('Job added successfully!', 'success');
      } else {
        showSnackbar('Failed to add job: ' + (data.message || 'Unknown error'), 'error');
      }
    } catch (err) {
      console.error('Error in add job:', err);
      showSnackbar('Error adding job: ' + (err.message || 'Unknown error'), 'error');
    }
  };

  const handleRemoveJob = async (jobIndex) => {
    try {
      if (!id) {
        showSnackbar('Restaurant ID not found', 'error');
        return;
      }
      
      if (error && error.includes('Could not connect to server')) {
        console.log('Removing job locally (no API connection)');
        const updatedJobs = [...restaurantData.jobs];
        updatedJobs.splice(jobIndex, 1);
        setRestaurantData(prevData => ({ ...prevData, jobs: updatedJobs }));
        showSnackbar('Job removed locally', 'info');
        return;
      }
      
      const response = await fetch(`${API_BASE_URL}/api/profile/${id}/jobs/${jobIndex}`, {
        method: 'DELETE',
      });
      
      const data = await response.json();
      console.log('Remove job response:', data);
      
      if (data.success) {
        setRestaurantData(data.data);
        showSnackbar('Job removed successfully!', 'success');
      } else {
        showSnackbar('Failed to remove job: ' + (data.message || 'Unknown error'), 'error');
      }
    } catch (err) {
      console.error('Error in remove job:', err);
      showSnackbar('Error removing job: ' + (err.message || 'Unknown error'), 'error');
    }
  };

  const handleAddSpecialty = async () => {
    try {
      if (!id) {
        showSnackbar('Restaurant ID not found', 'error');
        return;
      }
      
      if (!newSpecialty) {
        showSnackbar('Specialty is required', 'warning');
        return;
      }
      
      if (error && error.includes('Could not connect to server')) {
        console.log('Adding specialty locally (no API connection)');
        const updatedSpecialties = [...(restaurantData.specialties || []), newSpecialty];
        setRestaurantData(prevData => ({ ...prevData, specialties: updatedSpecialties }));
        setSpecialtyDialog(false);
        setNewSpecialty('');
        showSnackbar('Specialty added locally', 'info');
        return;
      }
      
      const response = await fetch(`${API_BASE_URL}/api/profile/${id}/specialties`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ specialty: newSpecialty })
      });
      
      const data = await response.json();
      console.log('Add specialty response:', data);
      
      if (data.success) {
        setRestaurantData(data.data);
        setSpecialtyDialog(false);
        setNewSpecialty('');
        showSnackbar('Specialty added successfully!', 'success');
      } else {
        showSnackbar('Failed to add specialty: ' + (data.message || 'Unknown error'), 'error');
      }
    } catch (err) {
      console.error('Error in add specialty:', err);
      showSnackbar('Error adding specialty: ' + (err.message || 'Unknown error'), 'error');
    }
  };

  const handleRemoveSpecialty = async (specialtyIndex) => {
    try {
      if (!id) {
        showSnackbar('Restaurant ID not found', 'error');
        return;
      }
      
      if (error && error.includes('Could not connect to server')) {
        console.log('Removing specialty locally (no API connection)');
        const updatedSpecialties = [...restaurantData.specialties];
        updatedSpecialties.splice(specialtyIndex, 1);
        setRestaurantData(prevData => ({ ...prevData, specialties: updatedSpecialties }));
        showSnackbar('Specialty removed locally', 'info');
        return;
      }
      
      const response = await fetch(`${API_BASE_URL}/api/profile/${id}/specialties/${specialtyIndex}`, {
        method: 'DELETE',
      });
      
      const data = await response.json();
      console.log('Remove specialty response:', data);
      
      if (data.success) {
        setRestaurantData(data.data);
        showSnackbar('Specialty removed successfully!', 'success');
      } else {
        showSnackbar('Failed to remove specialty: ' + (data.message || 'Unknown error'), 'error');
      }
    } catch (err) {
      console.error('Error in remove specialty:', err);
      showSnackbar('Error removing specialty: ' + (err.message || 'Unknown error'), 'error');
    }
  };

  const showSnackbar = (message, severity = 'success') => {
    setSnackbar({ open: true, message, severity });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  if (loading) {
    return (
      <Backdrop open={true} sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
          <CircularProgress color="primary" size={60} />
          <Typography variant="h6" sx={{ mt: 2, color: 'white' }}>
            Loading restaurant profile...
          </Typography>
        </Box>
      </Backdrop>
    );
  }

  const tabIcons = [
    <RestaurantMenu />,
    <Collections />,
    <Work />,
    <Stars />
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {error && (
        <Paper elevation={3} sx={{ padding: 2, mb: 3, backgroundColor: '#fff9c4', borderLeft: '4px solid #fbc02d' }}>
          <Typography color="error" fontWeight="bold">{error}</Typography>
          {error.includes('Could not connect to server') && (
            <Typography variant="body2">
              Displaying local data. Changes will be saved temporarily but not synchronized with the server.
            </Typography>
          )}
        </Paper>
      )}

      <Paper 
        elevation={6} 
        sx={{ 
          padding: 4, 
          mb: 4, 
          borderRadius: 2,
          backgroundImage: 'linear-gradient(to right bottom, #f5f5f5, #ffffff)',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Grid container spacing={4}>
          <Grid 
            item 
            xs={12} 
            md={4} 
            sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              position: 'relative'
            }}
          >
            <Avatar
              src={restaurantData.profileImage || '/restaurant-placeholder.jpg'}
              sx={{ 
                width: 180, 
                height: 180, 
                mb: 2,
                border: '4px solid white',
                boxShadow: 3,
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: isEditing ? 'scale(1.05)' : 'none',
                },
              }}
            />
            
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="profile-image-upload"
              type="file"
              onChange={handleProfileImageChange}
              disabled={!isEditing}
            />
            
            <label htmlFor="profile-image-upload">
              <Tooltip title={isEditing ? "Change profile image" : "Edit mode to change image"}>
                <span>
                  <IconButton
                    color="primary"
                    component="span"
                    disabled={!isEditing}
                    sx={{
                      backgroundColor: isEditing ? 'rgba(25, 118, 210, 0.1)' : 'transparent',
                      '&:hover': {
                        backgroundColor: isEditing ? 'rgba(25, 118, 210, 0.2)' : 'transparent',
                      },
                    }}
                  >
                    <PhotoCamera />
                  </IconButton>
                </span>
              </Tooltip>
            </label>
            
            {restaurantData.specialties && restaurantData.specialties.length > 0 && (
              <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1 }}>
                {restaurantData.specialties.map((specialty, index) => (
                  <Chip 
                  key={index} 
                  label={specialty} 
                  color="primary" 
                  variant="outlined" 
                  size="small" 
                  sx={{ margin: '2px' }}
                  onDelete={isEditing ? () => handleRemoveSpecialty(index) : undefined}
                />
              ))}
            </Box>
          )}
        </Grid>
        
        <Grid item xs={12} md={8}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
            <Box>
              {isEditing ? (
                <TextField
                  fullWidth
                  name="name"
                  label="Restaurant Name"
                  value={restaurantData.name}
                  onChange={handleInputChange}
                  variant="outlined"
                  sx={{ mb: 2, maxWidth: 500 }}
                />
              ) : (
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
                  {restaurantData.name}
                </Typography>
              )}
              
              {dataSource === 'localStorage' && (
                <Chip 
                  label="Local Data" 
                  size="small" 
                  color="default" 
                  sx={{ mr: 1, mb: 1 }} 
                />
              )}
              
              <Button
                variant={isEditing ? "contained" : "outlined"}
                color={isEditing ? "success" : "primary"}
                startIcon={isEditing ? <Save /> : <Edit />}
                onClick={handleEditProfile}
                sx={{ mt: 1 }}
              >
                {isEditing ? "Save Profile" : "Edit Profile"}
              </Button>
            </Box>
          </Box>
          
          <Box sx={{ mb: 3 }}>
            {isEditing ? (
              <TextField
                fullWidth
                name="description"
                label="Restaurant Description"
                value={restaurantData.description}
                onChange={handleInputChange}
                variant="outlined"
                multiline
                rows={4}
              />
            ) : (
              <Typography variant="body1" paragraph>
                {restaurantData.description || "No description provided. Click Edit Profile to add a description."}
              </Typography>
            )}
          </Box>
          
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <LocationOn color="action" sx={{ mr: 1 }} />
                {isEditing ? (
                  <TextField
                    fullWidth
                    name="address"
                    label="Address"
                    value={restaurantData.address}
                    onChange={handleInputChange}
                    variant="outlined"
                    size="small"
                  />
                ) : (
                  <Typography variant="body2">
                    {restaurantData.address || "No address provided"}
                  </Typography>
                )}
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <LocalPhone color="action" sx={{ mr: 1 }} />
                {isEditing ? (
                  <TextField
                    fullWidth
                    name="phone"
                    label="Phone"
                    value={restaurantData.phone}
                    onChange={handleInputChange}
                    variant="outlined"
                    size="small"
                  />
                ) : (
                  <Typography variant="body2">
                    {restaurantData.phone || "No phone number provided"}
                  </Typography>
                )}
              </Box>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Email color="action" sx={{ mr: 1 }} />
                {isEditing ? (
                  <TextField
                    fullWidth
                    name="email"
                    label="Email"
                    value={restaurantData.email}
                    onChange={handleInputChange}
                    variant="outlined"
                    size="small"
                  />
                ) : (
                  <Typography variant="body2">
                    {restaurantData.email || "No email provided"}
                  </Typography>
                )}
              </Box>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Language color="action" sx={{ mr: 1 }} />
                {isEditing ? (
                  <TextField
                    fullWidth
                    name="website"
                    label="Website"
                    value={restaurantData.website}
                    onChange={handleInputChange}
                    variant="outlined"
                    size="small"
                  />
                ) : (
                  <Typography variant="body2">
                    {restaurantData.website || "No website provided"}
                  </Typography>
                )}
              </Box>
            </Grid>
            
            <Grid item xs={12}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <AccessTime color="action" sx={{ mr: 1 }} />
                {isEditing ? (
                  <TextField
                    fullWidth
                    name="hours"
                    label="Operating Hours"
                    value={restaurantData.hours}
                    onChange={handleInputChange}
                    variant="outlined"
                    size="small"
                  />
                ) : (
                  <Typography variant="body2">
                    {restaurantData.hours || "No operating hours provided"}
                  </Typography>
                )}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
    
    <Paper elevation={3} sx={{ mb: 4, borderRadius: 2 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChangeTab}
          variant={isMobile ? "scrollable" : "fullWidth"}
          scrollButtons={isMobile ? "auto" : false}
          aria-label="restaurant profile tabs"
        >
          <Tab 
            label="Menu" 
            icon={tabIcons[0]} 
            iconPosition="start"
          />
          <Tab 
            label="Photos" 
            icon={tabIcons[1]} 
            iconPosition="start"
          />
          <Tab 
            label="Jobs" 
            icon={tabIcons[2]} 
            iconPosition="start"
          />
          <Tab 
            label="Specialties" 
            icon={tabIcons[3]} 
            iconPosition="start"
          />
        </Tabs>
      </Box>
      
      {/* Menu Tab */}
      <TabPanel value={value} index={0}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6">Menu Items</Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Add />}
            onClick={() => setMenuDialog(true)}
          >
            Add Menu Item
          </Button>
        </Box>
        
        {(!restaurantData.menu || restaurantData.menu.length === 0) ? (
          <Paper elevation={1} sx={{ p: 3, textAlign: 'center', backgroundColor: '#f9f9f9' }}>
            <FoodBank sx={{ fontSize: 60, color: '#bdbdbd', mb: 2 }} />
            <Typography variant="subtitle1" color="textSecondary">
              No menu items added yet. Click "Add Menu Item" to get started.
            </Typography>
          </Paper>
        ) : (
          <Grid container spacing={3}>
            {restaurantData.menu.map((category, categoryIndex) => (
              <Grid item xs={12} key={categoryIndex}>
                <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
                  <Typography variant="h6" gutterBottom>{category.name}</Typography>
                  <Divider sx={{ mb: 2 }} />
                  
                  <List>
                    {category.items.map((item, itemIndex) => (
                      <ListItem 
                        key={itemIndex}
                        secondaryAction={
                          <ListItemSecondaryAction>
                            <Typography variant="body2" color="primary">
                              ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}
                            </Typography>
                            {isEditing && (
                              <IconButton 
                                edge="end" 
                                aria-label="delete" 
                                onClick={() => handleRemoveMenuItem(categoryIndex, itemIndex)}
                              >
                                <Delete />
                              </IconButton>
                            )}
                          </ListItemSecondaryAction>
                        }
                      >
                        <ListItemText
                          primary={item.name}
                          secondary={item.description}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
        
        <Dialog open={menuDialog} onClose={() => setMenuDialog(false)} maxWidth="sm" fullWidth>
          <DialogTitle>Add Menu Item</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Item Name"
              fullWidth
              variant="outlined"
              value={newMenuItem.name}
              onChange={(e) => setNewMenuItem({ ...newMenuItem, name: e.target.value })}
              sx={{ mb: 2 }}
            />
            
            <TextField
              margin="dense"
              label="Description"
              fullWidth
              variant="outlined"
              value={newMenuItem.description}
              onChange={(e) => setNewMenuItem({ ...newMenuItem, description: e.target.value })}
              multiline
              rows={2}
              sx={{ mb: 2 }}
            />
            
            <TextField
              margin="dense"
              label="Price"
              type="number"
              fullWidth
              variant="outlined"
              value={newMenuItem.price}
              onChange={(e) => setNewMenuItem({ ...newMenuItem, price: e.target.value })}
              InputProps={{
                startAdornment: '$',
              }}
              sx={{ mb: 2 }}
            />
            
            <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
              <InputLabel id="category-select-label">Category</InputLabel>
              <Select
                labelId="category-select-label"
                value={newMenuItem.category}
                onChange={(e) => setNewMenuItem({ ...newMenuItem, category: e.target.value })}
                label="Category"
              >
                <MuiMenuItem value="">
                  <em>Select Category</em>
                </MuiMenuItem>
                
                {restaurantData.menu && restaurantData.menu.map((category, index) => (
                  <MuiMenuItem key={index} value={category.name}>{category.name}</MuiMenuItem>
                ))}
                
                <MuiMenuItem value="new">
                  <em>+ Add New Category</em>
                </MuiMenuItem>
              </Select>
            </FormControl>
            
            {newMenuItem.category === 'new' && (
              <TextField
                margin="dense"
                label="New Category Name"
                fullWidth
                variant="outlined"
                value={newMenuItem.newCategory}
                onChange={(e) => setNewMenuItem({ ...newMenuItem, newCategory: e.target.value })}
              />
            )}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setMenuDialog(false)}>Cancel</Button>
            <Button onClick={handleAddMenuItem} color="primary" variant="contained">Add</Button>
          </DialogActions>
        </Dialog>
      </TabPanel>
      
      {/* Photos Tab */}
      <TabPanel value={value} index={1}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6">Restaurant Photos</Typography>
          <Box>
            <input
              accept="image/*"
              style={{ display: 'none' }}
              id="photo-upload"
              type="file"
              onChange={handleLocalPhotoUpload}
            />
            <label htmlFor="photo-upload">
              <Button
                variant="outlined"
                component="span"
                startIcon={<PhotoCamera />}
                sx={{ mr: 1 }}
              >
                Upload Photo
              </Button>
            </label>
            <Button
              variant="contained"
              color="primary"
              startIcon={<Add />}
              onClick={() => setPhotoDialog(true)}
            >
              Add Photo URL
            </Button>
          </Box>
        </Box>
        
        {(!restaurantData.photos || restaurantData.photos.length === 0) ? (
          <Paper elevation={1} sx={{ p: 3, textAlign: 'center', backgroundColor: '#f9f9f9' }}>
            <Collections sx={{ fontSize: 60, color: '#bdbdbd', mb: 2 }} />
            <Typography variant="subtitle1" color="textSecondary">
              No photos added yet. Click "Add Photo URL" to get started.
            </Typography>
          </Paper>
        ) : (
          <Grid container spacing={2}>
            {restaurantData.photos.map((photo, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card sx={{ position: 'relative' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={photo}
                    alt={`Restaurant photo ${index + 1}`}
                    sx={{ objectFit: 'cover' }}
                  />
                  {isEditing && (
                    <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
                      <IconButton
                        aria-label="delete photo"
                        onClick={() => handleRemovePhoto(index)}
                        sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white' }}
                      >
                        <Delete />
                      </IconButton>
                    </Box>
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
        
        <Dialog open={photoDialog} onClose={() => setPhotoDialog(false)} maxWidth="sm" fullWidth>
          <DialogTitle>Add Photo URL</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Photo URL"
              fullWidth
              variant="outlined"
              value={newPhoto}
              onChange={(e) => setNewPhoto(e.target.value)}
              helperText="Enter a valid image URL (jpg, png, etc.)"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setPhotoDialog(false)}>Cancel</Button>
            <Button onClick={handleAddPhoto} color="primary" variant="contained">Add</Button>
          </DialogActions>
        </Dialog>
      </TabPanel>
      
      {/* Jobs Tab */}
      <TabPanel value={value} index={2}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6">Job Openings</Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Add />}
            onClick={() => setJobDialog(true)}
          >
            Add Job Opening
          </Button>
        </Box>
        
        {(!restaurantData.jobs || restaurantData.jobs.length === 0) ? (
          <Paper elevation={1} sx={{ p: 3, textAlign: 'center', backgroundColor: '#f9f9f9' }}>
            <Work sx={{ fontSize: 60, color: '#bdbdbd', mb: 2 }} />
            <Typography variant="subtitle1" color="textSecondary">
              No job openings added yet. Click "Add Job Opening" to get started.
            </Typography>
          </Paper>
        ) : (
          <Grid container spacing={3}>
            {restaurantData.jobs.map((job, index) => (
              <Grid item xs={12} key={index}>
                <Paper elevation={2} sx={{ p: 3, position: 'relative' }}>
                  <Typography variant="h6" gutterBottom>{job.title}</Typography>
                  {job.salary && (
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                      {job.salary}
                    </Typography>
                  )}
                  <Typography variant="body1" paragraph>
                    {job.description}
                  </Typography>
                  {job.requirements && (
                    <>
                      <Typography variant="subtitle2" gutterBottom>Requirements:</Typography>
                      <Typography variant="body2" paragraph>
                        {job.requirements}
                      </Typography>
                    </>
                  )}
                  {isEditing && (
                    <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
                      <IconButton
                        aria-label="delete job"
                        onClick={() => handleRemoveJob(index)}
                      >
                        <Delete />
                      </IconButton>
                    </Box>
                  )}
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
        
        <Dialog open={jobDialog} onClose={() => setJobDialog(false)} maxWidth="md" fullWidth>
          <DialogTitle>Add Job Opening</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Job Title"
              fullWidth
              variant="outlined"
              value={newJob.title}
              onChange={(e) => setNewJob({ ...newJob, title: e.target.value })}
              sx={{ mb: 2 }}
            />
            
            <TextField
              margin="dense"
              label="Job Description"
              fullWidth
              variant="outlined"
              value={newJob.description}
              onChange={(e) => setNewJob({ ...newJob, description: e.target.value })}
              multiline
              rows={3}
              sx={{ mb: 2 }}
            />
            
            <TextField
              margin="dense"
              label="Requirements"
              fullWidth
              variant="outlined"
              value={newJob.requirements}
              onChange={(e) => setNewJob({ ...newJob, requirements: e.target.value })}
              multiline
              rows={2}
              sx={{ mb: 2 }}
            />
            
            <TextField
              margin="dense"
              label="Salary/Compensation"
              fullWidth
              variant="outlined"
              value={newJob.salary}
              onChange={(e) => setNewJob({ ...newJob, salary: e.target.value })}
              helperText="Example: $15-20/hr or $45,000-55,000/year"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setJobDialog(false)}>Cancel</Button>
            <Button onClick={handleAddJob} color="primary" variant="contained">Add</Button>
          </DialogActions>
        </Dialog>
      </TabPanel>
      
      {/* Specialties Tab */}
      <TabPanel value={value} index={3}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h6">Restaurant Specialties</Typography>
          <Button
            variant="contained"
            color="primary"
            startIcon={<Add />}
            onClick={() => setSpecialtyDialog(true)}
          >
            Add Specialty
          </Button>
        </Box>
        
        {(!restaurantData.specialties || restaurantData.specialties.length === 0) ? (
          <Paper elevation={1} sx={{ p: 3, textAlign: 'center', backgroundColor: '#f9f9f9' }}>
            <Stars sx={{ fontSize: 60, color: '#bdbdbd', mb: 2 }} />
            <Typography variant="subtitle1" color="textSecondary">
              No specialties added yet. Click "Add Specialty" to get started.
            </Typography>
          </Paper>
        ) : (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {restaurantData.specialties.map((specialty, index) => (
              <Chip
                key={index}
                label={specialty}
                color="primary"
                sx={{ m: 0.5, p: 1 }}
                onDelete={isEditing ? () => handleRemoveSpecialty(index) : undefined}
              />
            ))}
          </Box>
        )}
        
        <Dialog open={specialtyDialog} onClose={() => setSpecialtyDialog(false)} maxWidth="sm" fullWidth>
          <DialogTitle>Add Restaurant Specialty</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              label="Specialty"
              fullWidth
              variant="outlined"
              value={newSpecialty}
              onChange={(e) => setNewSpecialty(e.target.value)}
              helperText="Example: Vegan Options, Wood-Fired Pizza, Craft Beer"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setSpecialtyDialog(false)}>Cancel</Button>
            <Button onClick={handleAddSpecialty} color="primary" variant="contained">Add</Button>
          </DialogActions>
        </Dialog>
      </TabPanel>
    </Paper>
    
    <Snackbar 
      open={snackbar.open} 
      autoHideDuration={6000} 
      onClose={handleCloseSnackbar}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
        {snackbar.message}
      </Alert>
    </Snackbar>
  </Container>
);
};

export default RestaurantProfile;