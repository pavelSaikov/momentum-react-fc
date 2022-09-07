import { createSlice } from '@reduxjs/toolkit';

import { IMAGE_SOURCE } from '../../../constants';
import { ImageServiceSlice } from './models';

const INITIAL_STATE: ImageServiceSlice = {
  imageSource: IMAGE_SOURCE.Github,
  imageTag: '',
  imageIndex: 0,
};

export const imageServiceSlice = createSlice({
  name: 'imageService',
  initialState: INITIAL_STATE,
  reducers: {
    changeImageSource: (state, action: { payload: IMAGE_SOURCE }) => {
      state.imageSource = action.payload;
    },

    changeTag: (state, action: { payload: string }) => {
      state.imageTag = action.payload;
    },

    changeImageIndex: (state, action: { payload: number }) => {
      state.imageIndex = action.payload;
    },
  },
});

export const { changeImageSource: changeService, changeTag, changeImageIndex } = imageServiceSlice.actions;
