import React from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        borderTop: '1px solid rgba(126, 240, 209, 0.1)',
        py: 6,
        px: 4,
        mt: 8
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Brand Section */}
          <Grid item xs={12} md={5}>
            <Typography 
              sx={{ 
                fontSize: '1.5rem',
                fontWeight: 700,
                color: '#4be0c6',
                mb: 2,
                fontFamily: 'Courier New, monospace'
              }}
            >
              <Box component="span" sx={{ color: 'white' }}>SK_Master</Box>DEV
            </Typography>
            <Typography 
              sx={{ 
                color: '#9ca3af',
                fontSize: '0.95rem',
                lineHeight: 1.6
              }}
            >
              Building intelligent AI systems & full-stack applications — turning cutting-edge ideas into real-world digital solutions.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <Box
                component="a"
                href="https://github.com/Komal-Disanayaka"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#9ca3af',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#7ef0d1' }
                }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.18.93-.26 1.92-.39 2.91-.39.99 0 1.98.13 2.91.39 2.22-1.5 3.2-1.18 3.2-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.71 5.4-5.29 5.68.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12 24 5.73 18.27.5 12 .5z"/>
                </svg>
              </Box>
              <Box
                component="a"
                href="https://www.linkedin.com/in/komal-dissanayaka-914978382"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: '#9ca3af',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#7ef0d1' }
                }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8h4.56v15H.22V8zM8.99 8h4.38v2.05h.06c.61-1.16 2.11-2.38 4.35-2.38 4.65 0 5.51 3.06 5.51 7.05V23H18.1v-7.52c0-1.79-.03-4.08-2.49-4.08-2.49 0-2.87 1.94-2.87 3.96V23H8.99V8z"/>
                </svg>
              </Box>
              <Box
                component="a"
                href="mailto:komaldissanayaka.work@gmail.com"
                sx={{
                  color: '#9ca3af',
                  transition: 'color 0.3s ease',
                  '&:hover': { color: '#7ef0d1' }
                }}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M12 13.065L.75 5.25V18c0 1.1.9 2 2 2h18.5c1.1 0 2-.9 2-2V5.25L12 13.065zM12 10L24 2H0l12 8z"/>
                </svg>
              </Box>
            </Box>
          </Grid>

          {/* Get In Touch Section */}
          <Grid item xs={12} md={4}>
            <Typography 
              sx={{ 
                fontSize: '1.2rem',
                fontWeight: 600,
                color: '#e6f0ff',
                mb: 2
              }}
            >
              Get In Touch
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography sx={{ color: '#9ca3af', fontSize: '0.95rem' }}>
                Colombo, Sri Lanka
              </Typography>
              <Typography 
                component="a"
                href="mailto:komaldissanayaka.work@gmail.com"
                sx={{ 
                  color: '#7ef0d1',
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  '&:hover': { color: '#4be0c6' }
                }}
              >
                komaldissanayaka.work@gmail.com
              </Typography>
              <Typography sx={{ color: '#9ca3af', fontSize: '0.95rem' }}>
                +94 773198783
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* Copyright */}
        <Box 
          sx={{ 
            mt: 6,
            pt: 3,
            borderTop: '1px solid rgba(126, 240, 209, 0.1)',
            textAlign: 'center'
          }}
        >
          <Typography sx={{ color: '#9ca3af', fontSize: '0.9rem' }}>
            © {new Date().getFullYear()} Komal Dissanayaka. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
