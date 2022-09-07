import { createSlice } from '@reduxjs/toolkit';

import { DAY_PART } from '../../../constants';
import { CommonSlice } from './models';

const INITIAL_STATE: CommonSlice = {
  dayPart: DAY_PART.Morning,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState: INITIAL_STATE,
  reducers: {
    changeDayPart: (state, action: { payload: DAY_PART }) => {
      state.dayPart = action.payload;
    },
  },
});

export const { changeDayPart } = commonSlice.actions;
