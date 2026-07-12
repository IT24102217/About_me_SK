import React, { useState } from 'react';
import { Box, Typography, Container, Tabs, Tab } from '@mui/material';

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
    { name: '🐘 PostgreSQL', color: '#336791' },
    { name: '📘 TypeScript', color: '#3178C6' },
    { name: '⏭️ Next JS', color: '#ffffff' },
    { name: '🤗 Hugging Face', color: '#FFD21E' },
    { name: '📱 React Native', color: '#61DAFB' },
    { name: '🏗️ Expo', color: '#ffffff' },
    { name: '☁️ Cloudinary', color: '#3448C5' },
    { name: '🌶️ Flask API', color: '#ffffff' },
    { name: '👁️ Yolo V8/V11', color: '#00FFFF' },
    { name: '🐳 Docker', color: '#2496ED' },
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

            {/* Trading Education */}
            <Box sx={{ mb: 4, pb: 3, borderBottom: '1px solid rgba(126, 240, 209, 0.1)' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Box component="span" sx={{ fontSize: '1.5rem' }}>📈</Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#c77dffff',
                    fontWeight: 600,
                    fontSize: '1.3rem'
                  }}
                >
                  Crypto And Forex Trading And Investment
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
                Peoeye Academy Of Business Education (2023 - Present)
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
            {/* Leadership */}
            <Box sx={{ mb: 4, pb: 3, borderBottom: '1px solid rgba(126, 240, 209, 0.1)' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Box component="span" sx={{ fontSize: '1.5rem' }}>🌟</Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#FFD700',
                    fontWeight: 600,
                    fontSize: '1.3rem'
                  }}
                >
                  Leadership & Management
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: '#e6f0ff',
                  fontSize: '1rem',
                  ml: 5
                }}
              >
                Jun 2024 - Present
              </Typography>
            </Box>

            {/* Mobile Application Development */}
            <Box sx={{ mb: 4, pb: 3, borderBottom: '1px solid rgba(126, 240, 209, 0.1)' }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                <Box component="span" sx={{ fontSize: '1.5rem' }}>📱</Box>
                <Typography
                  variant="h6"
                  sx={{
                    color: '#6897d0',
                    fontWeight: 600,
                    fontSize: '1.3rem'
                  }}
                >
                  Mobile Application Developer
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: '#e6f0ff',
                  fontSize: '1rem',
                  ml: 5
                }}
              >
                Jan 2026 - Present
              </Typography>
            </Box>

            {/* AI System Developer */}
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
                  Full Stack Developer
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

            {/* Crypto, Forex and Stock Trader */}
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

const About = () => {
  return (
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
            in the <Box component="span" sx={{ color: '#7ef0d1', fontWeight: 600 }}>MERN Stack And NEXT JS</Box>, creating powerful and
            scalable web applications. I'm passionate about transforming data into meaningful insights, developing <Box component="span" sx={{ color: '#7ef0d1', fontWeight: 600 }}>AI-driven solutions</Box>, and building
            end-to-end systems that solve real-world problems.
          </Typography>
        </Box>

        <AboutTabs />
      </Container>
    </Box>
  );
};

export default About;
