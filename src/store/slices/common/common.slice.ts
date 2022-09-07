import { createSlice } from '@reduxjs/toolkit';

import { DAY_PART, Language } from '../../../constants';
import { CommonSlice } from './models';

const INITIAL_STATE: CommonSlice = {
  dayPart: DAY_PART.Morning,
  city: '',
  language: Language.Ru,
};

export const commonSlice = createSlice({
  name: 'common',
  initialState: INITIAL_STATE,
  reducers: {
    changeDayPart: (state, action: { payload: DAY_PART }) => {
      state.dayPart = action.payload;
    },

    changeCity: (state, action: { payload: string }) => {
      state.city = action.payload;
    },

    changeLanguage: (state, action: { payload: Language }) => {
      state.language = action.payload;
    },
  },
});

export const { changeDayPart, changeCity, changeLanguage } = commonSlice.actions;
