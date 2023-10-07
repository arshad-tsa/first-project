import React from 'react';
import Sidemenu from '../../Component/Sidemenu/Sidemenu';
import { Box, Typography } from '@mui/material';

const About = () => (
  <>
    <Box sx={{ display: 'flex' }}>
      <Sidemenu />
      <Box>
        <Typography>About</Typography>
      </Box>
    </Box>
  </>
);

export default About;
