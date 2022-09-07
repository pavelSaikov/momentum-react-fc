import { createSelector } from '@reduxjs/toolkit';

import { StoreModel } from '../../models';

const selectImageSource = (state: StoreModel) => state.imageService.imageSource;
const selectTag = (state: StoreModel) => state.imageService.imageTag;
const selectImageIndex = (state: StoreModel) => state.imageService.imageIndex;

export const changeImageServiceStateSelector = createSelector(
  selectImageSource,
  selectTag,
  selectImageIndex,
  (imageSource, tag, imageIndex) => ({ imageSource, tag, imageIndex }),
);
