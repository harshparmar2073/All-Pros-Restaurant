import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Container, Grid, Paper, Typography, List, ListItem, ListItemText, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { useLocation } from 'react-router-dom';

// ==============================
//   STYLED COMPONENTS / HELPERS
// ==============================
const StatPaper = styled(Paper)(({ theme }) => ({
  borderRadius: 8,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.primary,
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 14px rgba(0,0,0,0.15)',
  },
}));

const TitleText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(12),
  fontWeight: 600,
  color: theme.palette.text.secondary,
}));

const ValueText = styled(Typography)(({ theme }) => ({
  marginTop: theme.spacing(1),
  fontWeight: 700,
  fontSize: theme.typography.pxToRem(24),
  color: theme.palette.text.primary,
}));

const SectionPaper = styled(Paper)(({ theme }) => ({
  borderRadius: 8,
  padding: theme.spacing(2),
  minHeight: 300,
  boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 14px rgba(0,0,0,0.15)',
  },
}));

// ==============================
//          MAIN COMPONENT
// ==============================
export default function DashboardPlaceholder() {
  const [dashboardData, setDashboardData] = useState({
    stats: {
      applications: 0,
      onHold: 0,
      shortlisted: 0,
      vacancies: 0,
      interviewed: 0,
      futureRef: 0,
    },
    jobVacancy: [],
    topReferrers: [],
  });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const location = useLocation();

  useEffect(() => {
    // Try to get restaurant data from location.state first
    let restaurantData = location.state && location.state.restaurantData;
    
    // Fallback to local storage if not in location.state
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
    
    if (!restaurantData || !restaurantData._id) {
      console.error('No restaurant data found. Please ensure the user is authenticated.');
      return;
    }
    
    const userId = restaurantData._id;
    console.log(userId);
    
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/dashboard?userId=${userId}`)
      .then((res) => {
        setDashboardData(res.data);
      })
      .catch((err) => console.error('Error fetching dashboard data:', err));
  }, [location.state]);

  return (
    <Box
      sx={{
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(120deg, #f0f0f0, #fefefe)',
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {/* ROW 1: 3 stat cards */}
          <Grid item xs={12} sm={4}>
            <StatPaper>
              <TitleText>APPLICATIONS</TitleText>
              <ValueText>{dashboardData.stats.applications}</ValueText>
            </StatPaper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StatPaper>
              <TitleText>ON-HOLD</TitleText>
              <ValueText>{dashboardData.stats.onHold}</ValueText>
            </StatPaper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StatPaper>
              <TitleText>SHORTLISTED</TitleText>
              <ValueText>{dashboardData.stats.shortlisted}</ValueText>
            </StatPaper>
          </Grid>

          {/* ROW 2: 3 stat cards */}
          <Grid item xs={12} sm={4}>
            <StatPaper>
              <TitleText>VACANCIES</TitleText>
              <ValueText>{dashboardData.stats.vacancies}</ValueText>
            </StatPaper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StatPaper>
              <TitleText>INTERVIEWED</TitleText>
              <ValueText>{dashboardData.stats.interviewed}</ValueText>
            </StatPaper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <StatPaper>
              <TitleText>FOR FUTURE REFERENCE</TitleText>
              <ValueText>{dashboardData.stats.futureRef}</ValueText>
            </StatPaper>
          </Grid>

          {/* ROW 3: Two sections */}
          <Grid item xs={12} sm={6}>
            <SectionPaper>
              <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1, fontWeight: 600 }}>
                JOB VACANCY
              </Typography>
              <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
                <List dense>
                  {dashboardData.jobVacancy.map((item, idx) => (
                    <ListItem key={idx} disableGutters>
                      <ListItemText primary={item.title} secondary={String(item.count)} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </SectionPaper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <SectionPaper>
              <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1, fontWeight: 600 }}>
                TOP REFERRERS
              </Typography>
              <Box sx={{ flexGrow: 1, overflowY: 'auto' }}>
                <List dense>
                  {dashboardData.topReferrers.map((ref, idx) => (
                    <ListItem key={idx} disableGutters>
                      <ListItemText primary={ref.label} secondary={String(ref.count)} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            </SectionPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
