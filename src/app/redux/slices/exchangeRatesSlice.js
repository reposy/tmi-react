import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rates: [
    { currency: 'USD', unit: 1, value: 1400 },
    { currency: 'EUR', unit: 1, value: 1600 },
  ], // 기본 환율 데이터
};

const exchangeRatesSlice = createSlice({
  name: 'exchangeRates',
  initialState,
  reducers: {
    updateExchangeRates: (state, action) => {
      state.rates = action.payload;
    },
  },
});

export const { updateExchangeRates } = exchangeRatesSlice.actions;
export default exchangeRatesSlice.reducer;