import { createSlice } from '@reduxjs/toolkit';

import { IMAGE_SOURCE } from '../../constants';

export const weatherServiceSlice = createSlice({
  name: 'weatherService',
  initialState: {
    value: IMAGE_SOURCE.Github,
  },
  reducers: {
    changeService: (state, newService) => {
      state.value = newService.payload;
    },
  },
});

export const { changeService } = weatherServiceSlice.actions;
