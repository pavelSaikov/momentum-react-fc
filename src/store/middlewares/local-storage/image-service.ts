import { Middleware } from '@reduxjs/toolkit';

import { StoreModel } from '../../models';
import {
  calculateNextImageIndex,
  calculatePrevImageIndex,
  changeImageSource,
  changeTag,
  nextImageIndex,
  prevImageIndex,
} from '../../slices';
import { imageServiceLocalStorageSaver, IMAGE_SERVICE_LOCAL_STORAGE_FIELDS } from './extractors';




export const ImageServiceLocalStorageMiddleware: Middleware<{}, StoreModel> =
  ({ getState }) =>
  (next) =>
  (action) => {
    switch (action.type) {
      case changeImageSource.type:
        imageServiceLocalStorageSaver.saveField(IMAGE_SERVICE_LOCAL_STORAGE_FIELDS.ImageSource, action.payload);
        break;

      case nextImageIndex.type:
        imageServiceLocalStorageSaver.saveField(
          IMAGE_SERVICE_LOCAL_STORAGE_FIELDS.ImageIndex,
          calculateNextImageIndex(getState().imageService.imageIndex),
        );
        break;

      case prevImageIndex.type:
        imageServiceLocalStorageSaver.saveField(
          IMAGE_SERVICE_LOCAL_STORAGE_FIELDS.ImageIndex,
          calculatePrevImageIndex(getState().imageService.imageIndex),
        );
        break;

      case changeTag.type:
        imageServiceLocalStorageSaver.saveField(IMAGE_SERVICE_LOCAL_STORAGE_FIELDS.Tag, action.payload);
        break;
    }

    next(action);
  };
