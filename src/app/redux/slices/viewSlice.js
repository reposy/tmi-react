// src/redux/slices/viewSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lunar: true,   // 기본값 true로 설정
  oil: true,     // 기본값 true로 설정
  exchange: true // 기본값 true로 설정
};

const viewSlice = createSlice({
  name: 'views',
  initialState,
  reducers: {
    toggleView: (state, action) => {
      state[action.payload.name] = action.payload.checked;
    },
  },
});

export const { toggleView } = viewSlice.actions;

export default viewSlice.reducer;