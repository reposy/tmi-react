import React from 'react';
import { useSelector } from 'react-redux';
import { Paper, Typography } from '@mui/material';

function LunarDate() {
  const lunarDate = useSelector((state) => state.lunar.lunarDate); // Redux에서 음력일 상태 가져오기

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6">음력일</Typography>
      <Typography>{lunarDate}</Typography>
    </Paper>
  );
}

export default LunarDate;