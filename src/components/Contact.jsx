import React, { useState } from 'react';
import { Box, Typography, Container, Grid, TextField, Button } from '@mui/material';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ type: 'sending', message: 'Sending your message...' });

    try {
      // EmailJS configuration
      const serviceID = 'service_qb5plfc';     // Replace with your Service ID
      const templateID = 'template_ojsg1wn';   // Replace with your Template ID  
      const publicKey = 'VKHkQqmX2pODopYgG';     // Replace with your Public Key

      // Prepare template parameters
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        to_email: 'komaldissanayaka.work@gmail.com',
        message: formData.message,
        reply_to: formData.email
      };

      // Send email using EmailJS
      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      // Success
      setFormStatus({ type: 'success', message: '✓ Message sent successfully!' });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setFormStatus({ type: '', message: '' });
      }, 5000);

    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus({ type: 'error', message: '✗ Failed to send message. Please try again or email directly.' });
      setTimeout(() => {
        setFormStatus({ type: '', message: '' });
      }, 5000);
    }
  };

  return (
    <Box 
      id="contact" 
      sx={{ 
        py: 8,
        px: 4,
        background: 'transparent'
      }}
    >
      <Container maxWidth="lg">
        <Typography 
          variant="h2" 
          align="center" 
          sx={{ 
            mb: 6, 
            color: '#fff',
            fontWeight: 700,
            fontSize: { xs: '2rem', md: '3rem' },
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '-10px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '60px',
              height: '3px',
              background: 'linear-gradient(90deg, #7ef0d1, #4be0c6)',
              borderRadius: '2px'
            }
          }}
        >
          Let's Connect
        </Typography>

        <Grid container spacing={3} alignItems="center" justifyContent="space-between">
          {/* Left Side - Contact Form */}
          <Grid item xs={12} md={8.5} order={{ xs: 2, md: 1 }}>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{
                width: '100%',
                maxWidth: '700px',
                ml: 0,
                mr: 'auto',
                pl: { md: 2 }
              }}
            >
              <Box sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleFormChange}
                  placeholder="First Name"
                  variant="outlined"
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: '#e6f0ff',
                      backgroundColor: 'rgba(245, 247, 250, 0.05)',
                      borderRadius: '50px',
                      width: '200%',
                      height: '56px',
                      '& fieldset': {
                        borderColor: 'rgba(126, 240, 209, 0.2)',
                        borderWidth: '1.5px'
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(126, 240, 209, 0.4)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#7ef0d1',
                        borderWidth: '2px'
                      }
                    },
                    '& .MuiInputBase-input': {
                      padding: '16px 24px',
                      '&::placeholder': {
                        color: 'rgba(230, 240, 255, 0.4)',
                        opacity: 1
                      }
                    }
                  }}
                />
              </Box>

              <Box sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleFormChange}
                  placeholder="Last Name"
                  variant="outlined"
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: '#e6f0ff',
                      backgroundColor: 'rgba(245, 247, 250, 0.05)',
                      borderRadius: '50px',
                      width: '200%',
                      height: '56px',
                      '& fieldset': {
                        borderColor: 'rgba(126, 240, 209, 0.2)',
                        borderWidth: '1.5px'
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(126, 240, 209, 0.4)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#7ef0d1',
                        borderWidth: '2px'
                      }
                    },
                    '& .MuiInputBase-input': {
                      padding: '16px 24px',
                      '&::placeholder': {
                        color: 'rgba(230, 240, 255, 0.4)',
                        opacity: 1
                      }
                    }
                  }}
                />
              </Box>

              <Box sx={{ mb: 3 }}>
                <TextField
                  fullWidth
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="What's your email?"
                  variant="outlined"
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: '#e6f0ff',
                      backgroundColor: 'rgba(245, 247, 250, 0.05)',
                      borderRadius: '50px',
                      width: '200%',
                      height: '56px',
                      '& fieldset': {
                        borderColor: 'rgba(126, 240, 209, 0.2)',
                        borderWidth: '1.5px'
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(126, 240, 209, 0.4)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#7ef0d1',
                        borderWidth: '2px'
                      }
                    },
                    '& .MuiInputBase-input': {
                      padding: '16px 24px',
                      '&::placeholder': {
                        color: 'rgba(230, 240, 255, 0.4)',
                        opacity: 1
                      }
                    }
                  }}
                />
              </Box>

              <Box sx={{ mb: 4 }}>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Your questions..."
                  variant="outlined"
                  required
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      color: '#e6f0ff',
                      backgroundColor: 'rgba(245, 247, 250, 0.05)',
                      width: '200%',
                      borderRadius: '20px',
                      '& fieldset': {
                        borderColor: 'rgba(126, 240, 209, 0.2)',
                        borderWidth: '1.5px'
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(126, 240, 209, 0.4)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#7ef0d1',
                        borderWidth: '2px'
                      }
                    },
                    '& .MuiInputBase-input': {
                      padding: '16px 24px',
                      '&::placeholder': {
                        color: 'rgba(230, 240, 255, 0.4)',
                        opacity: 1
                      }
                    }
                  }}
                />
              </Box>

              {formStatus.message && (
                <Box sx={{ mb: 3, textAlign: 'center' }}>
                  <Typography 
                    sx={{ 
                      color: formStatus.type === 'error' ? '#ff6b6b' : formStatus.type === 'success' ? '#4be0c6' : '#7ef0d1',
                      fontSize: '0.95rem',
                      fontWeight: 500
                    }}
                  >
                    {formStatus.message}
                  </Typography>
                </Box>
              )}

              <Button
                fullWidth
                type="submit"
                variant="contained"
                size="large"
                disabled={formStatus.type === 'sending'}
                sx={{
                  background: 'linear-gradient(90deg, #6ce0ebff, #f9a2f4ff)',
                  color: '#1a1635',
                  fontWeight: 700,
                  fontSize: '1rem',
                  textTransform: 'uppercase',
                  borderRadius: '50px',
                  py: 1.75,
                  boxShadow: '0 8px 20px rgba(126, 240, 209, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'linear-gradient(90deg, #6ce0ebff, #f9a2f4ff)',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 12px 25px rgba(126, 240, 209, 0.4)'
                  },
                  '&:disabled': {
                    opacity: 0.6,
                    cursor: 'not-allowed'
                  }
                }}
              >
                {formStatus.type === 'sending' ? 'Sending...' : 'Send Message'}
              </Button>
            </Box>
          </Grid>

          {/* Right Side - Mail Icon Illustration */}
          <Grid item xs={12} md={3.5} order={{ xs: 1, md: 2 }}>
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'center',
                height: '100%',
                py: { xs: 4, md: 0 },
                mx: 'auto',
                gap: 3
              }}
            >
              {/* Contact Info Box */}
              <Box
                sx={{
                  background: 'rgba(20, 40, 80, 0.8)',
                  borderRadius: '15px',
                  p: 3,
                  border: '1px solid rgba(126, 240, 209, 0.2)',
                  maxWidth: '400px',
                  width: '100%'
                }}
              >
                <Typography 
                  variant="h5" 
                  sx={{ 
                    color: '#fff', 
                    fontWeight: 700, 
                    mb: 2,
                    fontSize: { xs: '1.25rem', md: '1.5rem' }
                  }}
                >
                </Typography>
                <Typography 
                  sx={{ 
                    color: 'rgba(230, 240, 255, 0.8)', 
                    mb: 2.5, 
                    lineHeight: 1.6,
                    fontSize: { xs: '0.875rem', md: '0.95rem' }
                  }}
                >
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2.5 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '24px',
                      height: '24px',
                      color: '#7ef0d1'
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </Box>
                  <Typography 
                    component="a"
                    href="mailto:komaldissanayaka.work@gmail.com"
                    sx={{ 
                      color: '#7ef0d1', 
                      fontWeight: 500,
                      textDecoration: 'none',
                      fontSize: { xs: '0.875rem', md: '0.95rem' },
                      '&:hover': {
                        textDecoration: 'underline'
                      }
                    }}
                  >
                    komaldissanayaka.work@gmail.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Box
                    component="a"
                    href="https://github.com/Komal-Disanayaka"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'rgba(230, 240, 255, 0.7)',
                      transition: 'color 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(126, 240, 209, 0.1)',
                      '&:hover': { 
                        color: '#7ef0d1',
                        background: 'rgba(126, 240, 209, 0.2)'
                      }
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </Box>
                  <Box
                    component="a"
                    href="https://www.linkedin.com/in/komal-dissanayaka-914978382"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: 'rgba(230, 240, 255, 0.7)',
                      transition: 'color 0.3s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      background: 'rgba(126, 240, 209, 0.1)',
                      '&:hover': { 
                        color: '#7ef0d1',
                        background: 'rgba(126, 240, 209, 0.2)'
                      }
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </Box>
                </Box>
              </Box>

              {/* Mail Icon */}
              <Box
                sx={{
                  width: '100%',
                  maxWidth: '650px',
                  mx: 'auto',
                  '& svg': {
                    width: '100%',
                    height: 'auto',
                    minHeight: '400px',
                    filter: 'drop-shadow(0 10px 30px rgba(126, 240, 209, 0.2))'
                  }
                }}
              >
                <svg viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Background decorative elements */}
                  <circle cx="320" cy="40" r="25" fill="#7ef0d1" opacity="0.1"/>
                  <circle cx="60" cy="260" r="20" fill="#4be0c6" opacity="0.1"/>
                  <circle cx="350" cy="250" r="15" fill="#6897d0" opacity="0.1"/>
                  
                  {/* Main envelope body */}
                  <rect x="60" y="80" width="280" height="180" rx="12" fill="#1e2a50" stroke="#4be0c6" strokeWidth="3"/>
                  
                  {/* Letter/Paper inside */}
                  <rect x="85" y="105" width="230" height="130" rx="8" fill="#f5f7fa" stroke="#7ef0d1" strokeWidth="2"/>
                  
                  {/* Letter content lines */}
                  <rect x="110" y="130" width="60" height="8" rx="4" fill="#4be0c6"/>
                  <rect x="110" y="150" width="180" height="5" rx="2.5" fill="#6897d0" opacity="0.6"/>
                  <rect x="110" y="165" width="180" height="5" rx="2.5" fill="#6897d0" opacity="0.6"/>
                  <rect x="110" y="180" width="160" height="5" rx="2.5" fill="#6897d0" opacity="0.6"/>
                  <rect x="110" y="195" width="170" height="5" rx="2.5" fill="#6897d0" opacity="0.6"/>
                  <rect x="110" y="210" width="140" height="5" rx="2.5" fill="#6897d0" opacity="0.6"/>
                  
                  {/* Envelope flap - back */}
                  <path d="M60 80 L200 180 L340 80" fill="#253b6e" stroke="#4be0c6" strokeWidth="3" strokeLinejoin="round"/>
                  
                  {/* Envelope flap - front */}
                  <path d="M60 80 L200 180 L340 80" fill="none" stroke="#7ef0d1" strokeWidth="3" strokeLinejoin="round"/>
                  
                  {/* Decorative dots */}
                  <circle cx="100" cy="50" r="5" fill="#7ef0d1" opacity="0.5"/>
                  <circle cx="300" cy="60" r="6" fill="#4be0c6" opacity="0.5"/>
                  <circle cx="80" cy="280" r="4" fill="#6897d0" opacity="0.5"/>
                </svg>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact;
