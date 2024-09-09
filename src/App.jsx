import React from 'react';
import { Box, Grid, Typography, Link } from '@mui/material';
import Filters from './app/components/Filters';
import LunarDate from './app/components/LunarDate';
import OilPrices from './app/components/OilPrices';
import ExchangeRates from './app/components/ExchangeRates';
import TestControls from './app/components/TestControls';  // 테스트용 컴포넌트 추가
import { useSelector } from 'react-redux';

function App() {
  const selectedViews = useSelector((state) => state.views);

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Box sx={{ mb: 3 }}>
        <Link sx={{ cursor: 'pointer', textDecoration: 'none' }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold' }}>
            Dashboard
          </Typography>
        </Link>
      </Box>

      {/* Filters 컴포넌트 */}
      <Filters />

      {/* TestControls 컴포넌트 추가 */}
      <TestControls />

      <Grid container spacing={2}>
        {selectedViews.lunar && (
          <Grid item xs={12}>
            <LunarDate />
          </Grid>
        )}
        {selectedViews.oil && (
          <Grid item xs={12}>
            <OilPrices />
          </Grid>
        )}
        {selectedViews.exchange && (
          <Grid item xs={12}>
            <ExchangeRates />
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default App;