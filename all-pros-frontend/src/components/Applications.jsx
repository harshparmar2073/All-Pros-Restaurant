import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
  TablePagination
} from '@mui/material';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

// Optional helper to color the status Chip
function getStatusColor(status) {
  switch (status?.toLowerCase()) {
    case 'shortlisted':
      return 'primary';
    case 'interviewed':
      return 'info';
    case 'hired':
      return 'success';
    case 'rejected':
      return 'error';
    case 'further reference':
      return 'warning';
    default:
      return 'default';
  }
}

export default function Applications() {
  const [searchTerm, setSearchTerm] = useState('');
  const [applications, setApplications] = useState([]);
  const [filteredApps, setFilteredApps] = useState([]);

  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const location = useLocation();

  // Helper function to get restaurant id from location state or local storage
  const getRestaurantId = () => {
    let restaurantData = location.state && location.state.restaurantData;
    if (!restaurantData) {
      const storedRestaurant = localStorage.getItem('restaurantData');
      if (storedRestaurant) {
        try {
          restaurantData = JSON.parse(storedRestaurant);
        } catch (error) {
          console.error('Error parsing restaurant data from local storage:', error);
        }
      }
    }
    return restaurantData && restaurantData._id;
  };

  // Fetch applications filtered by restaurant id
  useEffect(() => {
    const restaurantId = getRestaurantId();
    if (!restaurantId) {
      console.error('No restaurant data found. Please ensure the user is authenticated.');
      return;
    }
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/applications?userId=${restaurantId}`)
      .then((res) => {
        setApplications(res.data);
        setFilteredApps(res.data);
      })
      .catch((err) => {
        console.error('Error fetching applications:', err);
      });
  }, [location.state]);

  // Update filtered list whenever applications or searchTerm changes
  useEffect(() => {
    if (!searchTerm) {
      setFilteredApps(applications);
    } else {
      const lowerSearch = searchTerm.toLowerCase();
      const filtered = applications.filter((app) =>
        app.firstName?.toLowerCase().includes(lowerSearch) ||
        app.lastName?.toLowerCase().includes(lowerSearch) ||
        app.email?.toLowerCase().includes(lowerSearch) ||
        app.jobAppliedFor?.toLowerCase().includes(lowerSearch)
      );
      setFilteredApps(filtered);
    }
  }, [searchTerm, applications]);

  // Pagination handling
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const startIndex = page * rowsPerPage;
  const currentRows = filteredApps.slice(startIndex, startIndex + rowsPerPage);

  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      {/* Top bar: Title + Search */}
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Applications
        </Typography>
        <TextField
          label="Search..."
          variant="outlined"
          size="small"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          sx={{ width: 250 }}
        />
      </Box>

      {/* Table */}
      <TableContainer component={Paper} elevation={6} sx={{ borderRadius: 2 }}>
        <Table size="small">
          <TableHead sx={{ backgroundColor: '#f5f5f5' }}>
            <TableRow>
              <TableCell><strong>First Name</strong></TableCell>
              <TableCell><strong>Last Name</strong></TableCell>
              <TableCell><strong>Phone Number</strong></TableCell>
              <TableCell><strong>Email</strong></TableCell>
              <TableCell><strong>Address</strong></TableCell>
              <TableCell><strong>Experience</strong></TableCell>
              <TableCell><strong>Job Applied For</strong></TableCell>
              <TableCell><strong>Status</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentRows.length > 0 ? (
              currentRows.map((app, index) => (
                <TableRow
                  key={index}
                  hover
                  sx={{
                    '&:nth-of-type(odd)': {
                      backgroundColor: (theme) => theme.palette.action.hover,
                    },
                  }}
                >
                  <TableCell>{app.firstName}</TableCell>
                  <TableCell>{app.lastName}</TableCell>
                  <TableCell>{app.phoneNumber}</TableCell>
                  <TableCell>{app.email}</TableCell>
                  <TableCell>{app.address}</TableCell>
                  <TableCell>{app.experience}</TableCell>
                  <TableCell>{app.jobAppliedFor}</TableCell>
                  <TableCell>
                    <Chip
                      label={app.status || 'N/A'}
                      color={getStatusColor(app.status)}
                      variant="outlined"
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={8} align="center">
                  No applications found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      <TablePagination
        component="div"
        count={filteredApps.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25, 50]}
        sx={{ mt: 1 }}
      />
    </Container>
  );
}
