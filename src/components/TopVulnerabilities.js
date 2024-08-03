import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const topVulnerabilitiesData = [
  { category: 'Medium', color: '#e53935', description: 'X-content-type-option-header missing', count: 271 },
  { category: 'High', color: 'rgb(245 158 11)', description: 'X-content-type-option-header missing', count: 54 },
  { category: 'High', color: '#fb8c00', description: 'X-content-type-option-header missing', count: 38 },
  { category: 'Low', color: '#43a047', description: 'X-content-type-option-header missing', count: 8 },
  { category: 'Low', color: 'rgb(124 58 237)', description: 'X-content-type-option-header missing', count: 4 }
];

const TopVulnerabilities = () => {
  return (
    <Container>
      <Box mt={0} p={0}  marginTop= "50px" sx={{ borderRadius: 1 }}>
        {/* Header Section */}
        <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ width: '100%', mb: 2, backgroundColor: '#E8E8E8', boxShadow:"12px" ,borderRadius: 1, p: 2 }}>
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontSize: '14px', fontWeight: "bold" }}>Top Vulnerabilities</Typography>
          </Box>
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontSize: '14px', fontWeight: "bold" }}>Most Common CVE</Typography>
          </Box>
          <Box sx={{ flex: 1, textAlign: 'center' }}>
            <Typography variant="h6" sx={{ fontSize: '14px', fontWeight: "bold" }}>Count</Typography>
          </Box>
        </Box>
        
        {/* Data Section */}
        <Box mt={0} sx={{ textAlign: 'center' }}>
          {topVulnerabilitiesData.map((vuln, index) => (
            <Box key={index} display="flex" justifyContent="space-between" alignItems="center" p={1} sx={{ borderBottom: '1px solid lightgrey' }}>
              <Box sx={{ flex: 1, p: 0 }}>
                <Typography variant="body2" sx={{ display: 'inline-block', backgroundColor: vuln.color, borderRadius: 1, width: '100%', textAlign: 'center', py: 2 }}>
                  {vuln.category}
                </Typography>
              </Box>
              <Box sx={{ flex: 1, p: 1 }}>
                <Typography variant="body2">{vuln.description}</Typography>
              </Box>
              <Box sx={{ flex: 1, p: 1, textAlign: 'center' }}>
                <Typography variant="body2">{vuln.count}</Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default TopVulnerabilities;
