import React, { useState, useEffect } from 'react';
import './App.css';
import { Box, Typography, Container, Tabs, Tab, Chip, Grid, Card, CardContent, TextField, Button } from '@mui/material';
import emailjs from '@emailjs/browser';

const SKLogo = () => (
  <svg width="70" height="70" viewBox="0 0 100 100" className="logo">
    <defs>
      <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{stopColor: '#f0d57eff', stopOpacity: 1}} />
        <stop offset="100%" style={{stopColor: '#d0ce41ff', stopOpacity: 1}} />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="none" stroke="url(#logoGradient)" strokeWidth="3"/>
    <text x="50" y="65" fontSize="42" fontWeight="bold" fill="url(#logoGradient)" textAnchor="middle" fontFamily="Inter, sans-serif">SK</text>
  </svg>
);

const AboutTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const skills = [
    { name: '💙 Deep Learning', color: '#54C5F8' },
    { name: '🎯 Machine Learning', color: '#00B4AB' },
    { name: '🔥 React + MUI', color: '#FFCA28' },
    { name: '🟢 Node.js + Express.js', color: '#68A063' },
    { name: '🍃 MongoDB', color: '#4DB33D' },
    { name: '☕ Java (OOP)', color: '#5382A1' },
    { name: '🐍 Python Advance', color: '#3776AB' },
    { name: '🔧 Git & GitHub', color: '#F05032' },
    { name: '🎨 HTML & CSS', color: '#E34C26' },
    { name: '📡 REST APIs', color: '#6897d0' },
    { name: '💾 MySQL', color: '#00758F' },
    { name: '🤖 Arduino & IoT', color: '#00979D' },
    { name: '🎨 JavaScript Advance', color: '#F24E1E' },
    { name: '📮 Postman(Backend)', color: '#FF6C37' }
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'rgba(126, 240, 209, 0.2)', mb: 4 }}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          centered
          sx={{
            '& .MuiTab-root': {
              color: '#e6f0ff',
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              minWidth: 120,
              '&:hover': {
                color: '#7ef0d1'
              }
            },
            '& .Mui-selected': {
              color: '#7ef0d1 !important'
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#7ef0d1',
              height: 3
            }
          }}
        >
          <Tab label="Skills" />
          <Tab label="Education" />
          <Tab label="Experience" />
        </Tabs>
      </Box>

      {/* Skills Tab */}
      {value === 0 && (
        <Box sx={{ py: 3 }}>
          <Box 
            sx={{ 
              maxWidth: '800px',
              mx: 'auto',
              backgroundColor: 'rgba(30, 50, 100, 0.85)',
              borderRadius: '20px',
              p: 4,
              border: '1px solid rgba(126, 240, 209, 0.3)',
              boxShadow: '0 8px 32px rgba(126, 240, 209, 0.15)'
            }}
          >
            <Box component="ul" sx={{ 
              listStyle: 'none', 
              p: 0, 
              m: 0,
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 2
            }}>
              {skills.map((skill, index) => (
                <Box 
                  component="li" 
                  key={index}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    fontSize: '1.1rem',
                    color: skill.color,
                    fontWeight: 600,
                    py: 1,
                    px: 2,
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      backgroundColor: 'rgba(126, 240, 209, 0.1)',
                      transform: 'translateX(5px)'
                    }
                  }}
                >
                  {skill.name}
                </Box>
              ))}
            </Box>
          </Box>
          
          <Box sx={{ mt: 5, display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
            {['Deep Learning', 'Machine Learning', 'React.js', 'Node.js', 'MongoDB', 'Java', 'Python', 'Git'].map((tech, index) => (
              <Box
                key={index}
                sx={{
                  px: 3,
                  py: 1.5,
                  backgroundColor: 'rgba(30, 40, 80, 0.8)',
                  border: '1px solid rgba(104, 151, 208, 0.4)',
                  borderRadius: '20px',
                  color: '#4be0c6',
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  transition: 'all 0.3s ease',
                  cursor: 'default',
                  '&:hover': {
                    backgroundColor: 'rgba(40, 50, 100, 0.9)',
                    transform: 'scale(1.05)',
                    boxShadow: '0 4px 15px rgba(75, 224, 198, 0.3)'
                  }
                }}
              >
                {tech}
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {/* Education Tab */}
      {value === 1 && (
        <Box sx={{ py: 3 }}>
          <Box 
            sx={{ 
              maxWidth: '900px',
              mx: 'auto',
              backgroundColor: 'rgba(20, 30, 70, 0.7)',
              borderRadius: '20px',
              p: 4,
              border: '1px solid rgba(126, 240, 209, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* BSc */}
            <Box sx={{ mb: 4, pb: 3, borderBottom: '1px solid rgba(126, 240, 209, 0.1)' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Box component="span" sx={{ fontSize: '1.5rem' }}>🎓</Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#4be0c6', 
                    fontWeight: 600,
                    fontSize: '1.3rem'
                  }}
                >
                  BSc (Hons) in Data Science
                </Typography>
              </Box>
              <Typography 
                sx={{ 
                  color: '#e6f0ff', 
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  ml: 5
                }}
              >
                Sri Lanka Institute of Information Technology [SLIIT UNI] (2024 - Present)
              </Typography>
            </Box>

            {/* Advanced Level */}
            <Box sx={{ mb: 4, pb: 3, borderBottom: '1px solid rgba(126, 240, 209, 0.1)' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Box component="span" sx={{ fontSize: '1.5rem' }}>📚</Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#FFD700', 
                    fontWeight: 600,
                    fontSize: '1.3rem'
                  }}
                >
                  Advanced Level - Maths Stream
                </Typography>
              </Box>
              <Typography 
                sx={{ 
                  color: '#e6f0ff', 
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  ml: 5
                }}
              >
               (2021 - 2023)
              </Typography>
            </Box>

            {/* Ordinary Level */}
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Box component="span" sx={{ fontSize: '1.5rem' }}>🏫</Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#8ff07eff', 
                    fontWeight: 600,
                    fontSize: '1.3rem'
                  }}
                >
                  Ordinary Level
                </Typography>
              </Box>
              <Typography 
                sx={{ 
                  color: '#e6f0ff', 
                  fontStyle: 'italic',
                  fontSize: '1rem',
                  ml: 5
                }}
              >
               (2009 - 2020)
              </Typography>
            </Box>
          </Box>
        </Box>
      )}

      {/* Experience Tab */}
      {value === 2 && (
        <Box sx={{ py: 3 }}>
          <Box 
            sx={{ 
              maxWidth: '900px',
              mx: 'auto',
              backgroundColor: 'rgba(20, 30, 70, 0.7)',
              borderRadius: '20px',
              p: 4,
              border: '1px solid rgba(126, 240, 209, 0.15)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
          >
            {/* Freelance Mobile App Developer */}
            <Box sx={{ mb: 4, pb: 3, borderBottom: '1px solid rgba(126, 240, 209, 0.1)' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Box component="span" sx={{ fontSize: '1.5rem' }}>💼</Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#4be0c6', 
                    fontWeight: 600,
                    fontSize: '1.3rem'
                  }}
                >
                  AI System Developer
                </Typography>
              </Box>
              <Typography 
                sx={{ 
                  color: '#e6f0ff', 
                  fontSize: '1rem',
                  ml: 5
                }}
              >
                Jul 2025 - Present
              </Typography>
            </Box>

            {/* Java Developer */}
            <Box sx={{ mb: 4, pb: 3, borderBottom: '1px solid rgba(126, 240, 209, 0.1)' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Box component="span" sx={{ fontSize: '1.5rem' }}>☕</Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#c77dffff', 
                    fontWeight: 600,
                    fontSize: '1.3rem'
                  }}
                >
                  Java Developer
                </Typography>
              </Box>
              <Typography 
                sx={{ 
                  color: '#e6f0ff', 
                  fontSize: '1rem',
                  ml: 5
                }}
              >
                Jul 2024 - Present
              </Typography>
            </Box>

            {/* Full Stack Developer(MERN) */}
            <Box sx={{ mb: 4, pb: 3, borderBottom: '1px solid rgba(126, 240, 209, 0.1)' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Box component="span" sx={{ fontSize: '1.5rem' }}>💻</Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#61DAFB', 
                    fontWeight: 600,
                    fontSize: '1.3rem'
                  }}
                >
                  Full Stack Developer(MERN)
                </Typography>
              </Box>
              <Typography 
                sx={{ 
                  color: '#e6f0ff', 
                  fontSize: '1rem',
                  ml: 5
                }}
              >
                Dec 2025 - Present
              </Typography>
            </Box>

            {/* Crypto, Forex and stock Trader */}
            <Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Box component="span" sx={{ fontSize: '1.5rem' }}>🌍</Box>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#FFD700', 
                    fontWeight: 600,
                    fontSize: '1.3rem'
                  }}
                >
                  Crypto, Forex and Stock Trader
                </Typography>
              </Box>
              <Typography 
                sx={{ 
                  color: '#e6f0ff', 
                  fontSize: '1rem',
                  ml: 5
                }}
              >
                Nov 2023 - Present
              </Typography>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

const ProjectTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const projects = {
    mobile: [
      // {
      //   title: 'Mobile Chat Application',
      //   tech: ['Flutter', 'Firebase'],
      //   description: 'A Flutter chat app with real-time messaging and Firebase auth.',
      //   image: 'https://via.placeholder.com/400x250/6B46C1/FFFFFF?text=Mobile+Chat'
      // },
      // {
      //   title: 'WizyWall Wallpaper App',
      //   tech: ['Flutter', 'API'],
      //   description: 'Browse, search, and download high-quality wallpapers.',
      //   image: 'https://via.placeholder.com/400x250/22C55E/FFFFFF?text=WizyWall+App'
      // },
      // {
      //   title: 'Food Delivery App',
      //   tech: ['Flutter', 'Firebase'],
      //   description: 'Order food, manage cart, and track delivery in real time.',
      //   image: 'https://via.placeholder.com/400x250/F59E0B/FFFFFF?text=Food+Delivery'
      // }
    ],
    web: [
      {
        title: 'Online Book store management System',
        tech: ['HTML', 'CSS' , 'Spring Boot', 'MySQL'],
        description: 'BookStore App with secure auth and local storage.',
        image: '/Project Image/photo-collage2.png.png'
      },
      // {
      //   title: 'Event Ticketing Platform',
      //   tech: ['React', 'Node.js', 'MongoDB'],
      //   description: 'Book and manage event tickets with secure payments.',
      //   image: 'https://via.placeholder.com/400x250/A855F7/FFFFFF?text=Event+Ticketing'
      // },
      // {
      //   title: 'Tourism Package Platform',
      //   tech: ['React', 'Express', 'PostgreSQL'],
      //   description: 'Explore and book travel packages with a user-friendly UI.',
      //   image: 'https://via.placeholder.com/400x250/06B6D4/FFFFFF?text=Tourism+Package'
      // }
    ],
    ai: [
      {
        title: 'Letter Recognition System',
        tech: ['Python', 'PyTorch', 'Deep Learning','RestNet 18'],
        description: 'Deep learning model for English letter recognition using RestNet 18 Model.',
        image: '/Project Image/photo-collage.png.png'
      },
      {
        title: 'Face Recognition System',
        tech: ['Python', 'Scikit-learn', 'SVM' ,'Deep Learning'],
        description: 'ML model for classification and Deep learning-based face recognition.',
        image: '/Project Image/photo-collage1.png.png'
      },
      // {
      //   title: 'Natural Language Processing System',
      //   tech: ['Python', 'NLTK', 'Transformers'],
      //   description: 'NLP system for text analysis, sentiment detection, and language processing tasks.',
      //   image: 'https://via.placeholder.com/400x250/7C3AED/FFFFFF?text=NLP+System'
      // }
    ]
  };

  const allProjects = [...projects.mobile, ...projects.web, ...projects.ai];

  const getProjects = () => {
    if (value === 0) return allProjects;
    if (value === 1) return projects.mobile;
    if (value === 2) return projects.web;
    if (value === 3) return projects.ai;
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'rgba(126, 240, 209, 0.2)', mb: 4 }}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          centered
          sx={{
            '& .MuiTab-root': {
              color: '#e6f0ff',
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              minWidth: 120,
              '&:hover': {
                color: '#7ef0d1'
              }
            },
            '& .Mui-selected': {
              color: '#7ef0d1 !important'
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#7ef0d1',
              height: 3
            }
          }}
        >
          <Tab label="All Projects" />
          <Tab label="Mobile" />
          <Tab label="Web" />
          <Tab label="AI" />
        </Tabs>
      </Box>

      <Box 
        className="projects-grid"
        sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(3, 1fr)' },
          gap: 2,
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}
      >
        {getProjects().map((project, index) => (
          <Box 
            key={index} 
            sx={{ 
              display: 'flex',
              width: '100%'
            }}
          >
            <Card
              sx={{
                backgroundColor: 'rgba(25, 35, 70, 0.92)',
                border: '1px solid rgba(126, 240, 209, 0.15)',
                borderRadius: '16px',
                width: '100%',
                height: '380px',
                transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                boxShadow: '0 6px 24px rgba(0, 0, 0, 0.6)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                position: 'relative',
                '&:hover': {
                  transform: 'translateY(-6px) scale(1.01)',
                  boxShadow: '0 16px 40px rgba(126, 240, 209, 0.15)',
                  border: '1px solid rgba(126, 240, 209, 0.3)',
                  '& img': {
                    transform: 'scale(1.08)'
                  }
                }
              }}
            >
              {/* Project Image */}
              <Box
                sx={{
                  width: '100%',
                  height: '180px',
                  overflow: 'hidden',
                  backgroundColor: 'rgba(20, 30, 50, 0.9)',
                  position: 'relative'
                }}
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.6s ease'
                  }}
                />
                {/* Gradient overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '60px',
                    background: 'linear-gradient(to top, rgba(15, 25, 55, 0.8), transparent)'
                  }}
                />
              </Box>

              <CardContent sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1, gap: 1.5 }}>
                <Typography 
                  variant="h6" 
                  sx={{ 
                    color: '#ffffff', 
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    lineHeight: 1.3,
                    letterSpacing: '-0.2px',
                    textAlign: 'left'
                  }}
                >
                  {project.title}
                </Typography>
                <Typography 
                  sx={{ 
                    color: '#9bb5d1', 
                    fontSize: '0.85rem',
                    lineHeight: 1.5,
                    flexGrow: 1,
                    fontWeight: 400,
                    opacity: 0.9
                  }}
                >
                  {project.description}
                </Typography>
                {/* Tech Tags */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 1 }}>
                  {project.tech.map((tech, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        px: 2.5,
                        py: 0.6,
                        backgroundColor: 'transparent',
                        border: '2px solid rgba(75, 224, 198, 0.4)',
                        borderRadius: '25px',
                        color: '#4be0c6',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        textTransform: 'capitalize',
                        letterSpacing: '0.2px',
                        transition: 'all 0.3s ease',
                        cursor: 'default',
                        '&:hover': {
                          backgroundColor: 'rgba(75, 224, 198, 0.08)',
                          borderColor: '#4be0c6',
                          transform: 'scale(1.05)'
                        }
                      }}
                    >
                      {tech}
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

const TradingTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', mt: 6 }}>
      <Box sx={{ borderBottom: 1, borderColor: 'rgba(126, 240, 209, 0.2)', mb: 4 }}>
        <Tabs 
          value={value} 
          onChange={handleChange} 
          centered
          sx={{
            '& .MuiTab-root': {
              color: '#e6f0ff',
              fontSize: '1rem',
              fontWeight: 600,
              textTransform: 'none',
              minWidth: 120,
              '&:hover': {
                color: '#7ef0d1'
              }
            },
            '& .Mui-selected': {
              color: '#7ef0d1 !important'
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#7ef0d1',
              height: 3
            }
          }}
        >
          <Tab label="My Analysis" />
          <Tab label="Profit Card" />
        </Tabs>
      </Box>

      {/* My Analysis Tab */}
      {value === 0 && (
        <Box sx={{ py: 3 }}>
          <Box 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)' },
              gap: 3,
              maxWidth: '1000px',
              mx: 'auto',
              px: 2
            }}
          >
            {/* Analysis Images - 2 per row */}
            {[
              '/acard/WhatsApp Image 2025-11-28 at 14.17.19_39c3ce48.jpg',
              '/acard/WhatsApp Image 2025-11-28 at 14.17.20_e0766fd6.jpg',
              '/acard/WhatsApp Image 2025-11-28 at 14.20.14_786e9cd0.jpg',
              '/acard/WhatsApp Image 2025-11-28 at 14.20.15_1a517b79.jpg',
              '/acard/WhatsApp Image 2025-11-28 at 14.20.17_1e326835.jpg',
              '/acard/WhatsApp Image 2025-11-28 at 14.20.17_5a09c956.jpg'
            ].map((image, index) => (
              <Box key={index}>
                <Box
                  sx={{
                    backgroundColor: 'rgba(30, 50, 100, 0.85)',
                    borderRadius: '16px',
                    p: 2,
                    border: '1px solid rgba(126, 240, 209, 0.3)',
                    boxShadow: '0 8px 32px rgba(126, 240, 209, 0.15)',
                    transition: 'all 0.3s ease',
                    height: 'fit-content',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 40px rgba(126, 240, 209, 0.2)',
                      border: '1px solid rgba(126, 240, 209, 0.5)'
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={image}
                    alt={`Analysis ${index + 1}`}
                    sx={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover',
                      borderRadius: '12px',
                      display: 'block'
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}

      {/* Profit Card Tab */}
      {value === 1 && (
        <Box sx={{ py: 3 }}>
          <Box 
            sx={{ 
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: 3,
              maxWidth: '1200px',
              mx: 'auto',
              px: 2
            }}
          >
            {/* Profit Card Images - 3 per row */}
            {[
              '/prcard/IMG-20251128-WA0016.jpg',
              '/prcard/IMG-20251128-WA0017.jpg',
              '/prcard/IMG-20251128-WA0018.jpg',
              '/prcard/IMG-20251128-WA0019.jpg',
              '/prcard/IMG-20251128-WA0020.jpg',
              '/prcard/IMG-20251128-WA0021.jpg'
            ].map((image, index) => (
              <Box key={index}>
                <Box
                  sx={{
                    backgroundColor: 'rgba(30, 50, 100, 0.85)',
                    borderRadius: '16px',
                    p: 2,
                    border: '1px solid rgba(126, 240, 209, 0.3)',
                    boxShadow: '0 8px 32px rgba(126, 240, 209, 0.15)',
                    transition: 'all 0.3s ease',
                    height: 'fit-content',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 40px rgba(126, 240, 209, 0.2)',
                      border: '1px solid rgba(126, 240, 209, 0.5)'
                    }
                  }}
                >
                  <Box
                    component="img"
                    src={image}
                    alt={`Profit Card ${index + 1}`}
                    sx={{
                      width: '100%',
                      height: '250px',
                      objectFit: 'cover',
                      borderRadius: '12px',
                      display: 'block'
                    }}
                  />
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

function App() {
  const roles = [
    'Data Engineer',
    'Web System Developer',
    'AI System Developer',
    'Mobile Developer'
  ];
  
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 2000;

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Simulate loading and hide loader after minimum display time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleDownloadCV = (e) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = '/cv.pdf';
    link.download = 'Komal_Dissanayaka_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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

  useEffect(() => {
    const currentRole = roles[roleIndex];
    
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < currentRole.length) {
          setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting backward
        if (displayedText.length > 0) {
          setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        }
      }
    };

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, roles]);

  return (
    <>
      {/* WhatsApp Floating Button - Always visible */}
      <a 
        href="https://wa.me/94713419970" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-float"
        aria-label="Contact via WhatsApp"
      >
        <svg viewBox="0 0 32 32" className="whatsapp-icon">
          <path fill="currentColor" d="M16 0c-8.837 0-16 7.163-16 16 0 2.825 0.737 5.607 2.137 8.048l-2.137 7.952 7.933-2.127c2.42 1.37 5.173 2.127 8.067 2.127 8.837 0 16-7.163 16-16s-7.163-16-16-16zM16 29.467c-2.482 0-4.908-0.646-7.07-1.87l-0.507-0.292-4.713 1.262 1.262-4.669-0.292-0.508c-1.207-2.100-1.847-4.507-1.847-6.973 0-7.51 6.11-13.62 13.62-13.62s13.62 6.11 13.62 13.62c0 7.51-6.11 13.62-13.62 13.62zM21.305 19.26c-0.346-0.174-2.049-1.007-2.366-1.123-0.317-0.116-0.548-0.174-0.779 0.174s-0.895 1.123-1.098 1.354c-0.203 0.232-0.405 0.26-0.751 0.087s-1.466-0.54-2.791-1.721c-1.032-0.92-1.729-2.057-1.931-2.403s-0.022-0.536 0.152-0.709c0.157-0.156 0.348-0.405 0.522-0.608s0.231-0.347 0.347-0.578 0.058-0.434-0.029-0.608c-0.087-0.174-0.779-1.88-1.068-2.574-0.281-0.676-0.567-0.584-0.779-0.596-0.202-0.012-0.433-0.014-0.665-0.014s-0.608 0.087-0.927 0.434c-0.319 0.347-1.218 1.19-1.218 2.902s1.247 3.366 1.421 3.597c0.174 0.232 2.445 3.733 5.922 5.235 0.827 0.357 1.473 0.571 1.977 0.731 0.831 0.263 1.586 0.226 2.183 0.137 0.666-0.099 2.049-0.837 2.338-1.646s0.289-1.501 0.202-1.646c-0.087-0.146-0.319-0.232-0.666-0.405z"/>
        </svg>
      </a>

      {/* Scroll to Top Button - Always visible when scrolled */}
      {showScrollTop && (
        <button 
          onClick={scrollToTop}
          className="scroll-to-top"
          aria-label="Scroll to top"
        >
          <svg viewBox="0 0 24 24" className="scroll-icon">
            <path fill="currentColor" d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
          </svg>
        </button>
      )}

      {loading ? (
        <div className="loader-wrapper">
          <div className="loader-content">
            <div className="logo-loader">
              <SKLogo />
            </div>
            <div className="loader-bars">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <div className="loader-text">Preparing your journey…</div>
          </div>
        </div>
      ) : (
        <div className="site-root page-enter">
      <nav className="nav nav-enter">
        <div className="brand">
          <SKLogo />
          <span><span style={{color: 'white'}}>Master</span>Dev</span>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#trading">Trading</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="nav-right">
          <button className="theme-toggle" aria-label="Toggle theme">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
          </button>
          <a className="btn resume" href="/cv.pdf" onClick={handleDownloadCV}>
            Download CV
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12 15l-4-4h3V3h2v8h3l-4 4zm-6 4h12v2H6v-2z"/>
            </svg>
          </a>
        </div>
      </nav>

      <main className="hero hero-enter" id="home">
        <section className="hero-left hero-left-enter"><br/><br/><br/>          
        <p className="greeting">Hi there, I'm</p>
          <h1 className="name">Komal Dissanayaka</h1>
          <Box className="role" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography 
              component="span" 
              sx={{ 
                fontSize: 'clamp(32px, 4vw, 36px)',
                fontWeight: 700,
                color: '#6897d0ff'
              }}
            >
              I'm a
            </Typography>
            <Typography 
              component="span" 
              className="typing-text"
              sx={{ 
                fontSize: 'clamp(32px, 4vw, 36px)',
                fontWeight: 700,
                color: '#7ef0d1',
                minWidth: '300px',
                display: 'inline-block'
              }}
            >
              {displayedText}
              <span className="typing-cursor"></span>
            </Typography>
          </Box>

          <p className="lead">Passionate about building powerful digital experiences that blend modern UI design with high-performance logic. Specializing in developing full-stack web applications using the MERN stack and crafting intelligent AI-powered systems.</p>

          <div className="cta-row">
            <a className="btn primary" href="#contact">Hire Me</a>
            <a className="btn outline" href="#projects">View Projects</a>
          </div>

          <div className="socials">
            <a aria-label="GitHub" href="https://github.com/Komal-Disanayaka" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.36-1.3-1.72-1.3-1.72-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.69 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.18.93-.26 1.92-.39 2.91-.39.99 0 1.98.13 2.91.39 2.22-1.5 3.2-1.18 3.2-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.42-2.71 5.4-5.29 5.68.42.36.79 1.08.79 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12 24 5.73 18.27.5 12 .5z"/></svg>
            </a>
            <a aria-label="LinkedIn" href="https://www.linkedin.com/in/komal-dissanayaka-914978382" target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM.22 8h4.56v15H.22V8zM8.99 8h4.38v2.05h.06c.61-1.16 2.11-2.38 4.35-2.38 4.65 0 5.51 3.06 5.51 7.05V23H18.1v-7.52c0-1.79-.03-4.08-2.49-4.08-2.49 0-2.87 1.94-2.87 3.96V23H8.99V8z"/></svg>
            </a>
            <a aria-label="Email" href="mailto:komaldissanayaka.work@gmail.com">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 13.065L.75 5.25V18c0 1.1.9 2 2 2h18.5c1.1 0 2-.9 2-2V5.25L12 13.065zM12 10L24 2H0l12 8z"/></svg>
            </a>
          </div>
        </section>

        <section className="hero-right hero-right-enter">
          <div className="profile-wrap">
            <div className="profile-ring" />
            <img className="profile-img" src="/profile.jpg" alt="Komal" />
          </div>
        </section>
      </main>

      {/* About Me Section */}
      <Box 
        id="about" 
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
            About Me
          </Typography>

          <Box sx={{ mb: 4, textAlign: 'center', maxWidth: '900px', mx: 'auto' }}>
            <Typography 
              sx={{ 
                color: '#e6f0ff',
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.8
              }}
            >
              Hi, I'm <Box component="span" sx={{ color: '#7ef0d1', fontWeight: 600 }}>Komal Dissanayaka</Box>, 
              a dedicated <Box component="span" sx={{ color: '#7ef0d1', fontWeight: 600 }}>Data Science student at SLIIT University</Box> and 
              an aspiring <Box component="span" sx={{ color: '#7ef0d1', fontWeight: 600 }}>AI System Developer</Box>. I have hands-on 
              experience building intelligent applications using{' '}
              <Box component="span" sx={{ color: '#7ef0d1', fontWeight: 600 }}>Python, Machine Learning, and Deep Learning</Box> techniques. 
              I'm also a <Box component="span" sx={{ color: '#7ef0d1', fontWeight: 600 }}>Full Stack Developer</Box> specializing 
              in the <Box component="span" sx={{ color: '#7ef0d1', fontWeight: 600 }}>MERN Stack</Box>, creating powerful and 
              scalable web applications. I'm passionate about transforming data into meaningful insights, developing AI-driven solutions, and building 
              end-to-end systems that solve real-world problems.
            </Typography>
          </Box>

          <AboutTabs />
        </Container>
      </Box>

      {/* Projects Section */}
      <Box 
        id="projects" 
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
            My Projects
          </Typography>

          <ProjectTabs />
        </Container>
      </Box>

      {/* Trading Section */}
      <Box 
        id="trading" 
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
            About My Trading Journey
          </Typography>
          
          {/* Trading Journey Content */}
          <Box 
            sx={{ 
              maxWidth: '900px',
              mx: 'auto',
              backgroundColor: 'rgba(30, 50, 100, 0.85)',
              borderRadius: '20px',
              p: 6,
              border: '1px solid rgba(126, 240, 209, 0.3)',
              boxShadow: '0 8px 32px rgba(126, 240, 209, 0.15)'
            }}
          >
            <Typography 
              sx={{ 
                color: '#e6f0ff', 
                fontSize: '1.1rem',
                lineHeight: 1.8,
                textAlign: 'center',
                fontWeight: 400,
                letterSpacing: '0.3px'
              }}
            >
              I'm an experienced trader with 3+ years in the markets, specializing in Elliott Wave, Neo Wave, and Smart Money Concepts. I combine technical analysis, chart patterns, time-series forecasting, and strong money management to trade and invest across crypto, forex, and stocks. My approach is structured, data-driven, and focused on identifying high-probability market opportunities while managing risk with discipline.
            </Typography>
            
            {/* Trading Skills Tags */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', mt: 4 }}>
              {['Elliott Wave', 'Neo Wave', 'Smart Money Concepts', 'Technical Analysis', 'Chart Patterns', 'Time-Series Forecasting', 'Risk Management', 'Crypto Trading', 'Forex', 'Stock Market','SK','SMC','SNR','Fundermental'].map((skill, index) => (
                <Box
                  key={index}
                  sx={{
                    px: 3,
                    py: 1,
                    backgroundColor: 'transparent',
                    border: '2px solid rgba(126, 240, 209, 0.4)',
                    borderRadius: '25px',
                    color: '#7ef0d1',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                    '&:hover': {
                      backgroundColor: 'rgba(126, 240, 209, 0.08)',
                      borderColor: '#7ef0d1',
                      transform: 'scale(1.05)'
                    }
                  }}
                >
                  {skill}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Trading Tabs */}
          <TradingTabs />
        </Container>
      </Box>

      {/* Contact Section */}
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
                Transforming ideas into elegant digital solutions through code and design.
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
        </div>
      )}
    </>
  );
}

export default App;
