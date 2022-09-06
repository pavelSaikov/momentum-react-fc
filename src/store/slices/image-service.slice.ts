import { createSlice } from '@reduxjs/toolkit';

import { IMAGE_SOURCE } from '../../constants';

const INITIAL_STATE = {
  imageService: IMAGE_SOURCE.Github,
  imageTag: '',
  imageIndex: 0,
};

export const imageServiceSlice = createSlice({
  name: 'imageService',
  initialState: INITIAL_STATE,
  reducers: {
    changeService: (state, action: { payload: IMAGE_SOURCE }) => {
      state.imageService = action.payload;
    },

    changeTag: (state, action: { payload: string }) => {
      state.imageTag = action.payload;
    },

    changeImageIndex: (state, action: { payload: number }) => {
      state.imageIndex = action.payload;
    },
  },
});

export const { changeService, changeTag, changeImageIndex } = imageServiceSlice.actions;
