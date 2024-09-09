import React from 'react';
import { Paper, FormControlLabel, Checkbox, Typography } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { toggleView } from '../redux/slices/viewSlice';

function Filters() {
  const selectedViews = useSelector((state) => state.views);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(toggleView({ name: event.target.name, checked: event.target.checked }));
  };

  return (
    <Paper elevation={3} sx={{ p: 2, mb: 2 }}>
      <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
        오늘의 정보 보기
      </Typography>

      <FormControlLabel
        control={<Checkbox checked={selectedViews.lunar} onChange={handleChange} name="lunar" />}
        label="음력일"
      />
      <FormControlLabel
        control={<Checkbox checked={selectedViews.oil} onChange={handleChange} name="oil" />}
        label="유가 정보"
      />
      <FormControlLabel
        control={<Checkbox checked={selectedViews.exchange} onChange={handleChange} name="exchange" />}
        label="환율 정보"
      />
    </Paper>
  );
}

export default Filters;