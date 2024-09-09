import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  lunarDate: '2024년 9월 10일 (음력)', // 기본 음력일 데이터
};

const lunarSlice = createSlice({
  name: 'lunar',
  initialState,
  reducers: {
    updateLunarDate: (state, action) => {
      state.lunarDate = action.payload;
    },
  },
});

export const { updateLunarDate } = lunarSlice.actions;
export default lunarSlice.reducer;