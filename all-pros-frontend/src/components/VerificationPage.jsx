import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
  Container,
  CircularProgress,
  Divider,
  Fade,
  Grow,
  IconButton
} from '@mui/material';
import {
  ArrowBack,
  Email,
  Smartphone,
  CheckCircle,
  Refresh,
  Security
} from '@mui/icons-material';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import CustomSnackbar from '../components/CustomSnackbar';

// Define your theme colors (adjust as needed)
const primaryColor = '#FF5722';
const secondaryColor = '#00BCD4';
const accentColor = '#E91E63';
const gradientStart = '#FF9800';
const gradientEnd = '#F44336';
const neutralBg = '#2C3E50';

// Hardcoded verification code for testing
const TEST_VERIFICATION_CODE = "123456";

const VerificationPage = () => {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isVerified, setIsVerified] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('info');
  const [method, setMethod] = useState('email'); // 'email' or 'phone'
  const [animateVerification, setAnimateVerification] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  const navigate = useNavigate();
  const location = useLocation();

  // Set up email from various sources
  useEffect(() => {
    // Try to get email from router state
    const stateEmail = location.state?.email || 
                       location.state?.user?.email || 
                       location.state?.userData?.email;
    
    // Try to get email from localStorage
    const storedEmail = localStorage.getItem('userEmail');
    
    console.log('Location state:', location.state);
    console.log('Email from state:', stateEmail);
    console.log('Email from storage:', storedEmail);
    
    // Use email from state, or localStorage, or if both are empty, use a default for testing
    if (stateEmail) {
      setUserEmail(stateEmail);
      // Also store in localStorage for future reference
      localStorage.setItem('userEmail', stateEmail);
    } else if (storedEmail) {
      setUserEmail(storedEmail);
    } else {
      // For development only - set a default email to prevent the error
      const defaultEmail = 'test@example.com';
      setUserEmail(defaultEmail);
      localStorage.setItem('userEmail', defaultEmail);
      
      // Show notification that we're using a default email
      setSnackbarMessage('Using default email for testing: ' + defaultEmail);
      setSnackbarSeverity('info');
      setSnackbarOpen(true);
    }
  }, [location.state]);

  // Determine login type from state. It can be "user-login" or "restaurant-login"
  const loginType = location.state?.loginType || 'user-login';
  // Map loginType to accountType as expected by the backend
  const accountType = loginType === 'user-login' ? 'user' : 'restaurant';

  // Determine redirect path based on login type
  const redirectPath =
    loginType === 'user-login'
      ? '/user-dashboard'
      : loginType === 'restaurant-login'
      ? '/dashboard'
      : '/';

  const inputRefs = useRef([]);
  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);

  // Countdown timer for resending code
  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleChange = (index, value) => {
    if (value.length > 1) {
      // Handle paste event
      const pastedValue = value.split('').slice(0, 6);
      const newVerificationCode = [...verificationCode];
      pastedValue.forEach((char, i) => {
        if (i + index < 6) {
          newVerificationCode[i + index] = char;
        }
      });
      setVerificationCode(newVerificationCode);
      for (let i = 0; i < 6; i++) {
        if (i + index < 6 && !pastedValue[i]) {
          inputRefs.current[i + index]?.focus();
          break;
        } else if (i === pastedValue.length - 1 || i + index === 5) {
          inputRefs.current[5]?.focus();
          break;
        }
      }
    } else {
      const newVerificationCode = [...verificationCode];
      newVerificationCode[index] = value;
      setVerificationCode(newVerificationCode);
      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !verificationCode[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleVerify = async () => {
    // Validate email
    if (!userEmail || !userEmail.includes('@')) {
      setSnackbarMessage('Please provide a valid email address');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    // Validate account type
    if (!accountType) {
      setSnackbarMessage('Invalid login type. Please log in again.');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    const code = verificationCode.join('');
    if (code.length !== 6) {
      setSnackbarMessage('Please enter the complete 6-digit code');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    setIsVerifying(true);

    try {
      // Check for test verification code
      if (code === TEST_VERIFICATION_CODE) {
        // If using test code, bypass the API call and proceed as if verified
        setAnimateVerification(true);
        setTimeout(() => {
          setIsVerified(true);
          setSnackbarMessage('Verification successful with test code');
          setSnackbarSeverity('success');
          setSnackbarOpen(true);
          setTimeout(() => {
            navigate(redirectPath, {
              replace: true,
              state: { loginType, email: userEmail },
            });
          }, 2000);
        }, 800);
      } else {
        // Proceed with normal verification via API
        const response = await axios.post('http://localhost:5000/api/verify/verify', {
          email: userEmail,
          accountType,
          code: code,
        });

        setAnimateVerification(true);
        setTimeout(() => {
          setIsVerified(true);
          setSnackbarMessage(response.data.message);
          setSnackbarSeverity('success');
          setSnackbarOpen(true);
          setTimeout(() => {
            navigate(redirectPath, {
              replace: true,
              state: { loginType, email: userEmail },
            });
          }, 2000);
        }, 800);
      }
    } catch (error) {
      setIsVerifying(false);
      const errorMessage = error.response?.data?.message || 'Verification failed';
      setSnackbarMessage(errorMessage);
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  // For quickly setting the test code (development convenience)
  const fillTestCode = () => {
    const testCodeArray = TEST_VERIFICATION_CODE.split('');
    setVerificationCode(testCodeArray);
  };

  // Added handleResendCode function with accountType included
  const handleResendCode = async () => {
    // Validate email before resending
    if (!userEmail || !userEmail.includes('@')) {
      setSnackbarMessage('Invalid email address');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    // Validate account type
    if (!accountType) {
      setSnackbarMessage('Invalid login type');
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
      return;
    }

    // Reset the timer
    setTimeLeft(30);
    // Clear the current verification code inputs
    setVerificationCode(['', '', '', '', '', '']);

    // Inform the user that the code is being resent
    setSnackbarMessage(
      `Resending verification code to your ${method === 'email' ? 'email address' : 'phone number'}...`
    );
    setSnackbarSeverity('info');
    setSnackbarOpen(true);

    try {
      // Call the correct endpoint and send both email and accountType
      await axios.post('http://localhost:5000/api/verify/send', {
        email: userEmail,
        accountType,
      });

      setSnackbarMessage('Verification code resent successfully.');
      setSnackbarSeverity('success');
      setSnackbarOpen(true);
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to resend code';
      setSnackbarMessage(errorMessage);
      setSnackbarSeverity('error');
      setSnackbarOpen(true);
    }
  };

  const toggleMethod = () => {
    const newMethod = method === 'email' ? 'phone' : 'email';
    setMethod(newMethod);
    setSnackbarMessage(`Verification code will be sent to your ${newMethod}`);
    setSnackbarSeverity('info');
    setSnackbarOpen(true);
    setTimeLeft(30);
    // Note: You might want to implement phone verification in your backend
  };

  // Example function to get the security shield illustration SVG
  const getSecurityShieldIllustration = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="120" height="120">
      <defs>
        <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={primaryColor} />
          <stop offset="100%" stopColor={accentColor} />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="glow" />
          <feBlend in="SourceGraphic" in2="glow" mode="normal" />
        </filter>
      </defs>
      <path
        d="M120 20 L210 60 C210 60 220 180 120 220 C20 180 30 60 30 60 L120 20z"
        fill="url(#shield-gradient)"
        filter="url(#glow)"
        opacity="0.9"
      />
      <path
        d="M120 40 L190 70 C190 70 200 170 120 200 C40 170 50 70 50 70 L120 40z"
        fill="none"
        stroke="white"
        strokeWidth="2"
        opacity="0.4"
      />
      <rect x="95" y="90" width="50" height="60" rx="6" fill={secondaryColor} />
      <path
        d="M105 90 L105 70 C105 55 135 55 135 70 L135 90"
        fill="none"
        stroke={secondaryColor}
        strokeWidth="12"
        strokeLinecap="round"
      />
      <circle cx="120" cy="115" r="8" fill={neutralBg} />
      <rect x="117" y="115" width="6" height="15" rx="2" fill={neutralBg} />
      <circle cx="120" cy="120" r="70" fill="none" stroke={secondaryColor} strokeWidth="2" opacity="0.3">
        <animate attributeName="r" from="70" to="85" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.3" to="0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="120" cy="120" r="60" fill="none" stroke="white" strokeWidth="1" opacity="0.2">
        <animate attributeName="r" from="60" to="75" dur="2s" begin="0.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.2" to="0" dur="2s" begin="0.5s" repeatCount="indefinite" />
      </circle>
      <path
        d="M60 140 L90 140 L90 160 L150 160 L150 140 L180 140"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        strokeDasharray="4,2"
        opacity="0.6"
      />
      <path
        d="M60 100 L80 100 L80 80 L160 80 L160 100 L180 100"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        strokeDasharray="4,2"
        opacity="0.6"
      />
      {[{ cx: 60, cy: 100 }, { cx: 80, cy: 80 }, { cx: 160, cy: 80 }, { cx: 180, cy: 100 }, { cx: 60, cy: 140 }, { cx: 180, cy: 140 }].map((dot, i) => (
        <circle key={i} {...dot} r="3" fill="white">
          <animate attributeName="opacity" values="1;0.3;1" dur="3s" begin={`${i * 0.3}s`} repeatCount="indefinite" />
        </circle>
      ))}
    </svg>
  );

  return (
    <Container maxWidth="lg" sx={{ mt: { xs: 4, sm: 8 }, mb: 4 }}>
      <Fade in={true} timeout={800}>
        <Card
          elevation={12}
          sx={{
            borderRadius: 4,
            overflow: 'hidden',
            position: 'relative',
            background: 'linear-gradient(135deg, #f9f9f9, #ffffff)',
            border: '1px solid rgba(0, 0, 0, 0.1)',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-5px)',
              boxShadow: '0 30px 60px rgba(0, 0, 0, 0.12)',
            },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              height: '12px',
              width: '100%',
              background: `linear-gradient(90deg, ${gradientStart}, ${gradientEnd})`,
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '12px',
                background: 'inherit',
                clipPath:
                  'polygon(0% 0%, 4% 45%, 8% 0%, 12% 45%, 16% 0%, 20% 45%, 24% 0%, 28% 45%, 32% 0%, 36% 45%, 40% 0%, 44% 45%, 48% 0%, 52% 45%, 56% 0%, 60% 45%, 64% 0%, 68% 45%, 72% 0%, 76% 45%, 80% 0%, 84% 45%, 88% 0%, 92% 45%, 96% 0%, 100% 45%, 100% 100%, 0% 100%)',
              },
            }}
          />
          <CardContent sx={{ p: 0 }}>
            <Grid container>
              <Grid
                item
                xs={12}
                md={5}
                sx={{
                  background: `linear-gradient(135deg, ${neutralBg} 0%, #1A2538 100%)`,
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'relative',
                  color: 'white',
                  textAlign: 'center',
                  overflow: 'hidden',
                  minHeight: '500px',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    overflow: 'hidden',
                    zIndex: 0,
                  }}
                >
                  {[...Array(6)].map((_, i) => (
                    <Box
                      key={i}
                      sx={{
                        position: 'absolute',
                        width: `${Math.random() * 100 + 100}px`,
                        height: '2px',
                        background: `linear-gradient(90deg, transparent, ${i % 2 === 0 ? accentColor : secondaryColor}, transparent)`,
                        top: `${Math.random() * 100}%`,
                        left: '-10%',
                        animation: `scanLine ${Math.random() * 5 + 10}s infinite linear`,
                        opacity: 0.6,
                        boxShadow: `0 0 8px ${i % 2 === 0 ? accentColor : secondaryColor}`,
                        '@keyframes scanLine': {
                          '0%': { transform: 'translateX(0%) rotate(0deg)', opacity: 0 },
                          '20%': { opacity: 0.8 },
                          '100%': { transform: 'translateX(120%) rotate(0deg)', opacity: 0 },
                        },
                      }}
                    />
                  ))}
                  {[...Array(10)].map((_, i) => (
                    <Box
                      key={`shape-${i}`}
                      sx={{
                        position: 'absolute',
                        width: `${Math.random() * 40 + 20}px`,
                        height: `${Math.random() * 40 + 20}px`,
                        borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '0%' : '40%',
                        border: `2px solid ${
                          i % 4 === 0 ? primaryColor : i % 4 === 1 ? secondaryColor : accentColor
                        }`,
                        background: 'transparent',
                        opacity: Math.random() * 0.3 + 0.1,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        animation: `floatShape ${Math.random() * 20 + 15}s infinite ease-in-out`,
                        '@keyframes floatShape': {
                          '0%': { transform: 'translate(0, 0) rotate(0deg)' },
                          '33%': { transform: 'translate(20px, -30px) rotate(120deg)' },
                          '66%': { transform: 'translate(-20px, 30px) rotate(240deg)' },
                          '100%': { transform: 'translate(0, 0) rotate(360deg)' },
                        },
                      }}
                    />
                  ))}
                </Box>
                <Box
                  sx={{
                    zIndex: 2,
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Grow in={true} timeout={1000}>
                    <Box
                      sx={{
                        width: 140,
                        height: 140,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(0, 0, 0, 0.3)',
                        backdropFilter: 'blur(10px)',
                        border: `2px solid ${isVerified ? secondaryColor : primaryColor}`,
                        boxShadow: `0 0 20px ${isVerified ? secondaryColor : primaryColor}`,
                        mb: 3,
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          top: '-3px',
                          left: '-3px',
                          right: '-3px',
                          bottom: '-3px',
                          borderRadius: '50%',
                          border: `1px solid ${isVerified ? secondaryColor : primaryColor}`,
                          opacity: 0.5,
                          animation: 'pulseRing 2s infinite',
                        },
                        '@keyframes pulseRing': {
                          '0%': { transform: 'scale(1)', opacity: 0.8 },
                          '50%': { transform: 'scale(1.15)', opacity: 0 },
                          '100%': { transform: 'scale(1)', opacity: 0 },
                        },
                      }}
                    >
                      {isVerified ? (
                        <CheckCircle
                          sx={{
                            fontSize: 64,
                            color: secondaryColor,
                            animation: 'pulse 2s infinite',
                            '@keyframes pulse': {
                              '0%': { transform: 'scale(1)', opacity: 1 },
                              '50%': { transform: 'scale(1.1)', opacity: 0.8 },
                              '100%': { transform: 'scale(1)', opacity: 1 },
                            },
                          }}
                        />
                      ) : (
                        <Box
                          sx={{
                            animation: animateVerification ? 'spin 1s ease-in-out' : 'none',
                            '@keyframes spin': {
                              '0%': { transform: 'rotate(0deg)' },
                              '100%': { transform: 'rotate(360deg)' },
                            },
                          }}
                        >
                          {getSecurityShieldIllustration()}
                        </Box>
                      )}
                    </Box>
                  </Grow>
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{
                      mb: 2,
                      textShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                      background: `linear-gradient(90deg, ${primaryColor}, ${accentColor})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontFamily: '"Poppins", sans-serif',
                      letterSpacing: '1px',
                    }}
                  >
                    {isVerified ? 'VERIFIED!' : 'VERIFICATION'}
                  </Typography>
                  <Divider
                    sx={{
                      width: '60%',
                      mb: 3,
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        width: '30%',
                        height: '3px',
                        background: `linear-gradient(90deg, ${primaryColor}, ${secondaryColor})`,
                        top: '-1px',
                        left: '35%',
                      },
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 4,
                      opacity: 0.9,
                      maxWidth: '80%',
                      lineHeight: '1.6',
                      fontFamily: '"Roboto", sans-serif',
                      textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
                    }}
                  >
                    {isVerified
                      ? 'Your identity has been verified successfully. You will be redirected shortly.'
                      : `We've sent a verification code to your ${method === 'email' ? 'email address' : 'phone number'} (${userEmail}). Please enter the code to continue.`
                    }
                  </Typography>
                  {!isVerified && (
                    <Button
                      variant="outlined"
                      startIcon={method === 'email' ? <Smartphone /> : <Email />}
                      onClick={toggleMethod}
                      sx={{
                        color: 'white',
                        borderColor: 'rgba(255, 255, 255, 0.3)',
                        '&:hover': {
                          borderColor: primaryColor,
                          backgroundColor: 'rgba(255, 87, 34, 0.1)',
                        },
                        textTransform: 'none',
                        borderRadius: 2,
                        mb: 2,
                        px: 3,
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
                          transform: 'translateX(-100%)',
                        },
                        '&:hover::before': {
                          transform: 'translateX(100%)',
                          transition: 'transform 0.6s ease-in-out',
                        },
                      }}
                    >
                      {`Send code to my ${method === 'email' ? 'phone' : 'email'} instead`}
                    </Button>
                  )}
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                md={7}
                sx={{
                  p: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: 'linear-gradient(135deg, #f9f9f9 0%, #f2f2f2 100%)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    opacity: 0.03,
                    backgroundImage: `radial-gradient(${primaryColor} 2px, transparent 2px)`,
                    backgroundSize: '30px 30px',
                    zIndex: 0,
                  }}
                />
                <Box sx={{ width: '100%', maxWidth: '500px', position: 'relative', zIndex: 2 }}>
                  <Box sx={{ mb: 4, display: 'flex', alignItems: 'center' }}>
                    <IconButton
                      onClick={() => navigate('/user-login')}
                      sx={{
                        mr: 2,
                        color: neutralBg,
                        '&:hover': {
                          backgroundColor: 'rgba(255, 87, 34, 0.1)',
                        },
                      }}
                    >
                      <ArrowBack />
                    </IconButton>
                    <Typography
                      variant="h5"
                      fontWeight="bold"
                      sx={{
                        color: neutralBg,
                        fontFamily: '"Poppins", sans-serif',
                        position: 'relative',
                        display: 'inline-block',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          width: '40%',
                          height: '4px',
                          background: primaryColor,
                          bottom: '-8px',
                          left: '0',
                          borderRadius: '2px',
                        },
                      }}
                    >
                      Verification Code
                    </Typography>
                  </Box>
                  <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                    Enter the 6-digit code sent to your {method === 'email' ? 'email address' : 'phone number'}
                    {userEmail && ` (${userEmail})`}
                  </Typography>
                  <Box sx={{ width: '100%', mb: 4 }}>
                    <Grid container spacing={1} justifyContent="center">
                      {verificationCode.map((digit, index) => (
                        <Grid item key={index}>
                          <TextField
                            inputRef={(el) => (inputRefs.current[index] = el)}
                            variant="outlined"
                            inputProps={{
                              maxLength: 1,
                              style: {
                                textAlign: 'center',
                                fontSize: '1.8rem',
                                fontWeight: 'bold',
                                padding: '8px',
                                width: '28px',
                                color: neutralBg,
                              },
                            }}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: '12px',
                                backgroundColor: 'white',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                                '&:hover': {
                                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                                },
                                '&.Mui-focused': {
                                  boxShadow: `0 4px 20px rgba(255, 87, 34, 0.15)`,
                                },
                                '&.Mui-focused fieldset': {
                                  borderColor: primaryColor,
                                  borderWidth: '2px',
                                },
                                '& fieldset': {
                                  borderColor: 'rgba(0, 0, 0, 0.1)',
                                  transition: 'all 0.3s ease',
                                },
                              },
                            }}
                            value={verificationCode[index]}
                            onChange={(e) => handleChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            disabled={isVerifying || isVerified}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                  <Box sx={{ mb: 3, textAlign: 'center' }}>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      size="large"
                      disabled={isVerifying || isVerified || timeLeft === 0}
                      onClick={handleResendCode}
                      startIcon={<Refresh />}
                      sx={{
                        backgroundColor: 'transparent',
                        color: timeLeft > 0 ? neutralBg : 'rgba(0, 0, 0, 0.26)',
                        border: `1px solid ${timeLeft > 0 ? 'rgba(0, 0, 0, 0.23)' : 'rgba(0, 0, 0, 0.12)'}`,
                        textTransform: 'none',
                        borderRadius: 2,
                        fontWeight: 'normal',
                        boxShadow: 'none',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.04)',
                          boxShadow: 'none',
                        },
                      }}
                    >
                      {timeLeft > 0 ? `Resend code in ${timeLeft}s` : 'Resend code'}
                    </Button>
                  </Box>
                  <Button
                    variant="contained"
                    fullWidth
                    size="large"
                    onClick={handleVerify}
                    disabled={isVerifying || isVerified}
                    sx={{
                      backgroundColor: primaryColor,
                      textTransform: 'none',
                      fontWeight: 'bold',
                      py: 1.5,
                      borderRadius: 2,
                      fontSize: '1rem',
                      boxShadow: `0 4px 12px rgba(255, 87, 34, 0.2)`,
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      '&:hover': {
                        backgroundColor: '#E64A19',
                        boxShadow: `0 6px 20px rgba(255, 87, 34, 0.4)`,
                      },
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(45deg, transparent 0%, rgba(255, 255, 255, 0.2) 100%)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                      },
                      '&:hover::after': {
                        opacity: 1,
                      },
                    }}
                  >
                    {isVerifying ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      'Verify'
                    )}
                  </Button>
                  {process.env.NODE_ENV === 'development' && (
                    <Box sx={{ mt: 3, textAlign: 'center' }}>
                      <Button
                        variant="outlined"
                        size="small"
                        onClick={fillTestCode}
                        sx={{
                          textTransform: 'none',
                          borderColor: 'rgba(0, 0, 0, 0.12)',
                          color: 'text.secondary',
                          borderRadius: 2,
                          fontSize: '0.7rem',
                          py: 0.5,
                        }}
                      >
                        Use test code (123456)
                      </Button>
                    </Box>
                  )}
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Fade>
      <CustomSnackbar
        open={snackbarOpen}
        handleClose={() => setSnackbarOpen(false)}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
    </Container>
  );
};

export default VerificationPage;