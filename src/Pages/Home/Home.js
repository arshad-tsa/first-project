import React from 'react';
import Sidemenu from '../../Component/Sidemenu/Sidemenu';
import { Box, Typography } from '@mui/material';

const Home = () => (
  <>
    <Box sx={{ display: 'flex', height: '100' }}>
      <Sidemenu />
      <Box>
        <Typography>Home</Typography>
      </Box>
    </Box>
  </>
);

export default Home;
