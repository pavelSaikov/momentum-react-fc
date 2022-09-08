import { createSlice } from '@reduxjs/toolkit';

import { DAY_PART, LANGUAGE } from '../../../constants';
import { getCommonStateFromLocalStorage } from '../../middlewares/local-storage/extractors';
import { calculateDayPart } from './helpers';
import { CommonSlice } from './models';

const INITIAL_STATE: CommonSlice = {
  dayPart: calculateDayPart(),
  city: '',
  language: LANGUAGE.Ru,
  username: '',
  isSettingsModalOpen: false,
  ...getCommonStateFromLocalStorage(),
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

    changeLanguage: (state, action: { payload: LANGUAGE }) => {
      state.language = action.payload;
    },

    changeUserName: (state, action: { payload: string }) => {
      state.username = action.payload;
    },

    toggleSettingsModal: (state) => {
      state.isSettingsModalOpen = !state.isSettingsModalOpen;
    },
  },
});

export const { changeDayPart, changeCity, changeLanguage, changeUserName, toggleSettingsModal } = commonSlice.actions;
