// src/components/TestControls.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateLunarDate } from '../redux/slices/lunarSlice';
import { updateExchangeRates } from '../redux/slices/exchangeRatesSlice';
import { updateOilPrice } from '../redux/slices/oilPricesSlice';
import { Box, TextField, Button, Typography, Grid } from '@mui/material';

function TestControls() {
  const [lunarDateInput, setLunarDateInput] = useState('');
  const [oilPriceInput, setOilPriceInput] = useState('');
  const [usdRateInput, setUsdRateInput] = useState('');
  const [eurRateInput, setEurRateInput] = useState('');

  const dispatch = useDispatch();

  const handleUpdateLunarDate = () => {
    dispatch(updateLunarDate(lunarDateInput));
  };

  const handleUpdateOilPrice = () => {
    dispatch(updateOilPrice(oilPriceInput));
  };

  const handleUpdateExchangeRates = () => {
    const newRates = [
      { currency: 'USD', unit: 1, value: Number(usdRateInput) },
      { currency: 'EUR', unit: 1, value: Number(eurRateInput) },
    ];
    dispatch(updateExchangeRates(newRates));
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
        테스트 입력값
      </Typography>

      <Grid container spacing={2}>
        {/* 음력일 입력 */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="음력일"
            variant="outlined"
            fullWidth
            value={lunarDateInput}
            onChange={(e) => setLunarDateInput(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" fullWidth onClick={handleUpdateLunarDate}>
            음력일 업데이트
          </Button>
        </Grid>

        {/* 유가 정보 입력 */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="유가 정보"
            variant="outlined"
            fullWidth
            value={oilPriceInput}
            onChange={(e) => setOilPriceInput(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" fullWidth onClick={handleUpdateOilPrice}>
            유가 정보 업데이트
          </Button>
        </Grid>

        {/* USD 환율 입력 */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="USD 환율"
            variant="outlined"
            fullWidth
            value={usdRateInput}
            onChange={(e) => setUsdRateInput(e.target.value)}
          />
        </Grid>

        {/* EUR 환율 입력 */}
        <Grid item xs={12} sm={6}>
          <TextField
            label="EUR 환율"
            variant="outlined"
            fullWidth
            value={eurRateInput}
            onChange={(e) => setEurRateInput(e.target.value)}
          />
        </Grid>

        <Grid item xs={12}>
          <Button variant="contained" fullWidth onClick={handleUpdateExchangeRates}>
            환율 업데이트
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TestControls;