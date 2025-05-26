import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ mt: 4, p: 2, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
      <Typography variant="body2">
        © {new Date().getFullYear()} Academic Scheduler. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
