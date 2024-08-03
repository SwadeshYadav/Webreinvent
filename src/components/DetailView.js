import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSelectedItem } from '../redux/actions/itemActions';
import { Container, Box, Typography } from '@mui/material';
import TopVulnerabilities from './TopVulnerabilities'; 

const DetailView = () => {
  const dispatch = useDispatch();
  const selectedItem = useSelector(state => state.items.selectedItem);

  useEffect(() => {
    dispatch(fetchSelectedItem());
  }, [dispatch]);

  if (!selectedItem) {
    return <div>Loading...</div>;
  }

  const stats = [
    { value: 214, label: 'Total Vulnerabilities', color: 'rgb(124 58 237)' },
    { value: 6, label: 'Critical', color: '#e53935' },
    { value: 78, label: 'High', color: 'rgb(245 158 11)' },
    { value: 99, label: 'Medium', color: '#fb8c00' },
    { value: 30, label: 'Low', color: '#43a047' }
  ];

  return (
    <Container>
      <Box mt={4}>
        <Box display="flex" alignItems="center" spacing={2}>
          <Typography variant="body2" component="a" href="/" sx={{ textDecoration: 'none', fontSize:"16px" }}>Home</Typography>
          <Typography variant="body2">/</Typography>
          <Typography variant="body2" component="a" href="/dashboard" sx={{ textDecoration: 'none', fontSize:"16px" }}>Dashboard</Typography>
        </Box>
      </Box>
        
      <Box mt={2}> 
        <Box display="flex" alignItems="center" gap={0} sx={{ backgroundColor: 'white', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', p: 2 }}>
          <Typography variant="body2" component="a" sx={{ backgroundColor: 'rgb(59 130 246)', color: 'white', px: 4, py: 1, borderRadius: 1, textDecoration: 'none' }}>Home</Typography>
          <Typography variant="body2" component="a" sx={{ marginLeft: "24px", fontSize: "18px", textDecoration: 'none' }}>Scanner Result</Typography>
          <Box sx={{ backgroundColor: 'rgb(248 114 114)', color: 'black', px: 1, borderRadius: 4, ml: 1 }}>
            <Typography variant="body2">{stats[0].value}</Typography>
          </Box>
          <Typography variant="body2" component="a" sx={{ marginLeft: "24px", fontSize: "18px", textDecoration: 'none' }}>Report</Typography>
          <Box sx={{ backgroundColor: 'rgb(248 114 114)', color: 'black', px: 1, borderRadius: 4, ml: 1 }}>
            <Typography variant="body2">0</Typography>
          </Box>
        </Box>
      </Box>

      <Box mt={2}>
        <Box display="flex" justifyContent="space-between" gap={2} width="100%" >     
          {stats.map((stat, index) => (
            <Box          
              key={index} 
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                flexGrow: 1,
                backgroundColor: 'white', 
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
                borderRadius: 2
              }}
            >
              <Box 
                sx={{
                  backgroundColor: stat.color,
                  px: 4,
                  py: 2,
                  borderRadius: 1,
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '100%',  
                  mb: 1 
                }}
              >
                <Typography variant="h6">{stat.value}</Typography>
              </Box>
              <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{stat.label}</Typography>
            </Box>
          ))}
        </Box>
      </Box>  

      <TopVulnerabilities /> 
    </Container>
  );
};

export default DetailView;
