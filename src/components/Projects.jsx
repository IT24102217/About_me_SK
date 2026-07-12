import React, { useState } from 'react';
import { Box, Typography, Container, Tabs, Tab, Card, CardContent } from '@mui/material';

const ProjectTabs = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const projects = {
    mobile: [
      {
        title: 'PetCare Mobile Application',
        tech: ['React Native', 'Cloudinary', 'Express', 'Node', 'MongoDB'],
        description: 'A full-featured mobile app for pet owners to manage pet health, appointments, and care using a MERN backend with cloud image storage.',
        image: '/Project Image/photo-collage5.png'
      },
    ],
    web: [
      {
        title: 'Online Book store management System',
        tech: ['HTML', 'CSS', 'Spring Boot', 'MySQL'],
        description: 'BookStore App with secure auth and local storage.',
        image: '/Project Image/photo-collage2.png.png'
      },
      {
        title: 'Movie Ticket Booking System',
        tech: ['React Js', 'Node.Js', 'Express Js', 'MongoDB'],
        description: 'Book and manage event tickets with secure payments.',
        image: '/Project Image/photo-collage3.png.png'
      },
    ],
    ai: [
      {
        title: 'Letter Recognition System',
        tech: ['Python', 'PyTorch', 'Deep Learning', 'RestNet 18'],
        description: 'Deep learning model for English letter recognition using RestNet 18 Model.',
        image: '/Project Image/photo-collage.png.png'
      },
      {
        title: 'Face Recognition System',
        tech: ['Python', 'Scikit-learn', 'SVM', 'Deep Learning'],
        description: 'ML model for classification and Deep learning-based face recognition.',
        image: '/Project Image/photo-collage1.png.png'
      },
      {
        title: 'Warehouse PPE Monitoring System',
        tech: ['YOLO V8', 'Hugging Face', 'Docker', 'Vercel', 'Render'],
        description: 'Real-time AI-powered PPE detection system for warehouse safety monitoring using YOLO V8 object detection.',
        image: '/Project Image/photo-collage4.png'
      },
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

const Projects = () => {
  return (
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
  );
};

export default Projects;
