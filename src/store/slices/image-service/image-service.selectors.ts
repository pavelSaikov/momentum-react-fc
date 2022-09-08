import { createSelector } from '@reduxjs/toolkit';

import { StoreModel } from '../../models';

const selectTag = (state: StoreModel) => state.imageService.imageTag;
const selectImageIndex = (state: StoreModel) => state.imageService.imageIndex;

export const imageTagSelector = createSelector(
  (state: StoreModel) => state.imageService.imageTag,
  (tag) => tag,
);

export const imageSourceSelector = createSelector(
  (state: StoreModel) => state.imageService.imageSource,
  (source) => source,
);

export const changeImageServiceStateSelector = createSelector(
  imageSourceSelector,
  selectTag,
  selectImageIndex,
  (imageSource, tag, imageIndex) => ({ imageSource, tag, imageIndex }),
);
