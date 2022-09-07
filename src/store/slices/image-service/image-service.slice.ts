import { createSlice } from '@reduxjs/toolkit';

import { IMAGE_SOURCE } from '../../../constants';
import { MAX_IMAGE_INDEX } from '../../../services';
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

    nextImageIndex: (state) => {
      const currentImageIndex = state.imageIndex;

      const newImageIndex = currentImageIndex === MAX_IMAGE_INDEX ? 0 : currentImageIndex + 1;
      state.imageIndex = newImageIndex;
    },

    prevImageIndex: (state) => {
      const currentTrackNumber = state.imageIndex;

      const newTrackNumber = currentTrackNumber === 0 ? MAX_IMAGE_INDEX : currentTrackNumber - 1;
      state.imageIndex = newTrackNumber;
    },

    changeImageIndex: (state, action: { payload: number }) => {
      state.imageIndex = action.payload;
    },
  },
});

export const {
  changeImageSource: changeService,
  changeTag,
  changeImageIndex,
  nextImageIndex,
  prevImageIndex,
} = imageServiceSlice.actions;
