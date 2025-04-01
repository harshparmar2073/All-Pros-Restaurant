import React from 'react';
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Grid,
  MenuItem,
  Snackbar,
  Alert,
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

const validationSchema = Yup.object({
  jobTitle: Yup.string()
    .required('Job Title is required')
    .min(3, 'Job Title must be at least 3 characters'),
  description: Yup.string().required('Description is required'),
  specialization: Yup.string().required('Specialization is required'),
  postedOn: Yup.date().typeError('Invalid date').required('Posted On is required'),
  startDate: Yup.date().typeError('Invalid date').required('Start Date is required'),
  endDate: Yup.date().typeError('Invalid date').required('End Date is required'),
  assignedBy: Yup.string().required('Assigned By is required'),
  status: Yup.string().required('Status is required'),
  question: Yup.string(),
});

export default function CreateJob({ onClose, onCreateJob }) {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [snackbarMsg, setSnackbarMsg] = React.useState('');
  const [snackbarSeverity, setSnackbarSeverity] = React.useState('success');

  // Retrieve restaurant data from localStorage
  const storedRestaurant = localStorage.getItem('restaurantData')
    ? JSON.parse(localStorage.getItem('restaurantData'))
    : null;
  const restaurantId = storedRestaurant && storedRestaurant._id;

  if (!restaurantId) {
    console.error('No restaurant ID found. Please log in again.');
  }

  const formik = useFormik({
    initialValues: {
      jobTitle: '',
      description: '',
      specialization: '',
      postedOn: dayjs(),
      startDate: dayjs(),
      endDate: dayjs(),
      assignedBy: '',
      status: '',
      question: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      const newJob = {
        title: values.jobTitle,
        description: values.description,
        specialization: values.specialization,
        postedOn: values.postedOn.format('YYYY-MM-DD'),
        startDate: values.startDate.format('YYYY-MM-DD'),
        endDate: values.endDate.format('YYYY-MM-DD'),
        assignedBy: values.assignedBy,
        status: values.status.toLowerCase(),
        additionalQuestion: values.question,
        totalUsers: Math.floor(Math.random() * 20) + 1,
        restaurant: restaurantId,
      };

      try {
        const response = await axios.post('http://localhost:5000/api/job/jobs', newJob);
        setSnackbarMsg('Job created successfully!');
        setSnackbarSeverity('success');
        setOpenSnackbar(true);
        if (onCreateJob) {
          onCreateJob(response.data.job);
        } else if (onClose) {
          onClose();
        }
      } catch (error) {
        console.error('Error creating job:', error.response ? error.response.data : error.message);
        setSnackbarMsg(error.response?.data?.message || 'Error during job creation. Please try again.');
        setSnackbarSeverity('error');
        setOpenSnackbar(true);
      }
    },
  });

  const { values, errors, touched, handleChange, handleSubmit, setFieldValue, handleBlur } = formik;

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: 2,
          borderRadius: 2,
          p: 2,
          color: '#8B2500',
          boxShadow: 'inset 0 0 5px rgba(0,0,0,0.05)',
        }}
      >
        <WorkOutlineIcon sx={{ mr: 1, fontSize: 28 }} />
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Create Job
        </Typography>
      </Box>

      <Paper
        elevation={4}
        sx={{
          p: 3,
          borderRadius: 2,
          maxWidth: 900,
          mx: 'auto',
          background: 'linear-gradient(135deg, #fff 0%, #fdfdfd 100%)',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="jobTitle"
                  label="Job Title"
                  variant="outlined"
                  fullWidth
                  value={values.jobTitle}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.jobTitle && Boolean(errors.jobTitle)}
                  helperText={touched.jobTitle && errors.jobTitle}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="description"
                  label="Description"
                  variant="outlined"
                  multiline
                  rows={3}
                  fullWidth
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.description && Boolean(errors.description)}
                  helperText={touched.description && errors.description}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="specialization"
                  label="Specialization"
                  variant="outlined"
                  fullWidth
                  value={values.specialization}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.specialization && Boolean(errors.specialization)}
                  helperText={touched.specialization && errors.specialization}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <DatePicker
                  label="Posted On"
                  value={values.postedOn}
                  onChange={(newValue) => setFieldValue('postedOn', newValue)}
                  slotProps={{
                    textField: {
                      name: 'postedOn',
                      variant: 'outlined',
                      fullWidth: true,
                      onBlur: handleBlur,
                      error: touched.postedOn && Boolean(errors.postedOn),
                      helperText: touched.postedOn && errors.postedOn,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <DatePicker
                  label="Start Date"
                  value={values.startDate}
                  onChange={(newValue) => setFieldValue('startDate', newValue)}
                  slotProps={{
                    textField: {
                      name: 'startDate',
                      variant: 'outlined',
                      fullWidth: true,
                      onBlur: handleBlur,
                      error: touched.startDate && Boolean(errors.startDate),
                      helperText: touched.startDate && errors.startDate,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <DatePicker
                  label="End Date"
                  value={values.endDate}
                  onChange={(newValue) => setFieldValue('endDate', newValue)}
                  slotProps={{
                    textField: {
                      name: 'endDate',
                      variant: 'outlined',
                      fullWidth: true,
                      onBlur: handleBlur,
                      error: touched.endDate && Boolean(errors.endDate),
                      helperText: touched.endDate && errors.endDate,
                    },
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="assignedBy"
                  label="Assigned By"
                  variant="outlined"
                  fullWidth
                  value={values.assignedBy}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.assignedBy && Boolean(errors.assignedBy)}
                  helperText={touched.assignedBy && errors.assignedBy}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="status"
                  select
                  label="Status"
                  variant="outlined"
                  fullWidth
                  value={values.status}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.status && Boolean(errors.status)}
                  helperText={touched.status && errors.status}
                >
                  <MenuItem value="">Select Status</MenuItem>
                  <MenuItem value="active">Active</MenuItem>
                  <MenuItem value="pending">Pending</MenuItem>
                  <MenuItem value="canceled">Canceled</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="question"
                  label="Additional Question (Optional)"
                  variant="outlined"
                  fullWidth
                  value={values.question}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.question && Boolean(errors.question)}
                  helperText={touched.question && errors.question}
                />
              </Grid>
            </Grid>
            <Box mt={3} display="flex" justifyContent="flex-end" gap={2}>
              <Button
                variant="outlined"
                onClick={onClose}
                sx={{
                  backgroundColor: '#fff',
                  borderColor: '#8B2500',
                  color: '#8B2500',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: '#f9ece6',
                    borderColor: '#8B2500',
                  },
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  background: 'linear-gradient(90deg, #8B2500, #A52A2A)',
                  color: '#fff',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #A52A2A, #8B2500)',
                    boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
                  },
                }}
              >
                CREATE JOB
              </Button>
            </Box>
          </form>
        </LocalizationProvider>
      </Paper>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={() => setOpenSnackbar(false)}
          severity={snackbarSeverity}
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbarMsg}
        </Alert>
      </Snackbar>
    </>
  );
}
