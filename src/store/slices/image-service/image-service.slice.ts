import { createSlice } from '@reduxjs/toolkit';

import { IMAGE_SOURCE } from '../../../constants';
import { getImageServiceStateFromLocalStorage } from '../../middlewares/local-storage/extractors';
import { calculateNextImageIndex, calculatePrevImageIndex } from './helpers';
import { ImageServiceSlice } from './models';

const a = getImageServiceStateFromLocalStorage();

const INITIAL_STATE: ImageServiceSlice = {
  imageSource: IMAGE_SOURCE.Github,
  imageTag: '',
  imageIndex: 0,
  ...a,
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

    nextImageIndex: (state) => {
      const currentImageIndex = state.imageIndex;

      const newImageIndex = calculateNextImageIndex(currentImageIndex);
      state.imageIndex = newImageIndex;
    },

    prevImageIndex: (state) => {
      const currentTrackNumber = state.imageIndex;

      const newTrackNumber = calculatePrevImageIndex(currentTrackNumber);
      state.imageIndex = newTrackNumber;
    },

    changeImageIndex: (state, action: { payload: number }) => {
      state.imageIndex = action.payload;
    },
  },
});

export const { changeImageSource, changeTag, nextImageIndex, prevImageIndex } = imageServiceSlice.actions;
