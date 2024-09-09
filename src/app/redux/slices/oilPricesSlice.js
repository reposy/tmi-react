import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  oilPrice: '80 USD / 배럴', // 기본 유가 데이터
};

const oilPricesSlice = createSlice({
  name: 'oilPrices',
  initialState,
  reducers: {
    updateOilPrice: (state, action) => {
      state.oilPrice = action.payload;
    },
  },
});

export const { updateOilPrice } = oilPricesSlice.actions;
export default oilPricesSlice.reducer;