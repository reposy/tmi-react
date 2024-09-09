import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Typography } from '@mui/material';

function OilPrices() {
  const oilPrice = useSelector((state) => state.oilPrices.oilPrice); // Redux에서 유가 정보 상태 가져오기

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6">유가 정보</Typography>
      <Typography>{oilPrice}</Typography>
    </Paper>
  );
}

export default OilPrices;