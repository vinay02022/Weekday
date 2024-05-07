import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { HourglassTop, RoomOutlined } from '@mui/icons-material';

const JobInfoCard = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{
        margin: 2,
        boxShadow: 2,
        border: '1px solid #d7dbd8',
        borderRadius: 5,
        width: {
          xs: '90%', 
          sm: 'calc(33.33% - 16px)', // it will take 1/3 width on small screens (minus gutters)
        },
      }}>
      <CardContent sx={{ padding: 2 }}>
        <Box sx={{ border: '1px solid #d7dbd8', borderRadius: 3, display: 'flex', flexDirection: 'row', alignItems: 'center', width: 'fit-content', p: 1 }}>
          <HourglassTop sx={{ fontSize: 13 }} />
          <Typography sx={{ fontSize: 13 }}>Posted 3 days ago</Typography>
        </Box>

        <Box sx={{ mt: 2 }} display="flex" flexDirection="row">
          <Box sx={{ width: '23%', height: '75%', mr: 1 }}>
            <img src="https://example.com/company-logo.png" alt="Company Logo" style={{ width: '100%', height: '100%', borderRadius: 20 }} />
          </Box>
          <Box sx={{ width: '80%' }}>
            <Typography variant="h5" component="div" sx={{ fontSize: '1.2rem', color: '#7f8280', fontWeight: 500, mb: 0.5 }}>
              Example Company Inc.
            </Typography>
            <Typography component="div" sx={{ fontSize: '1rem', color: '#393b39', fontWeight: 400, mb: 0.5 }}>
              Software Developer
            </Typography>
            <Box display="flex" flexDirection="row" sx={{ alignItems: 'center', fontSize: '0.8rem', mb: 0.5 }}>
              <RoomOutlined sx={{ mr: 0.5 }} />
              <Typography variant="body1" color="#5e615f" fontWeight={400} sx={{ fontSize: '0.9rem', ml: 0.5 }}>
                Bengaluru, India
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', mb: 1 }}>
          <Typography variant="body1" fontWeight={400} color="#5e615f" sx={{ fontSize: '1rem', mr: 1 }}>
            Estimated Salary: $80,000 - $100,000 per year
          </Typography>
          <Typography variant="body1" fontWeight={400} color="#5e615f" sx={{ fontSize: '1rem' }}>
            ☑
          </Typography>
        </Box>

        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          About Company:
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 400, mb: 1 }}>
          Example Company Inc. is a leading technology company specializing in software development and innovative solutions.
        </Typography>
        <Typography variant="body2" className="description" sx={{ fontWeight: 300 }}>
          We are committed to creating cutting-edge products that transform industries and improve lives. Our team of talented developers works collaboratively to deliver exceptional software solutions.
          <Button onClick={handleExpandClick} className="expand-button" sx={{ color: 'gray', fontWeight: 300 }}>
            {expanded ? 'Read less' : 'Read more'}
          </Button>
        </Typography>

        <Box sx={{ marginBottom: 1 }}>
          <Typography variant="body1" fontWeight={600} color="#5e615f" sx={{ backgroundColor: '#fff', fontSize: '0.8rem', p: 1 }}>
            Minimum Experience
          </Typography>
          <Typography variant="body1" color="#5e615f" sx={{ backgroundColor: '#fff', fontSize: '0.8rem', p: 1, mb: 1 }}>
            2 years
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default JobInfoCard;
