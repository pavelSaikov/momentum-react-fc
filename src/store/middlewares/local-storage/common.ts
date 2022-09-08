import { Middleware } from '@reduxjs/toolkit';

import { StoreModel } from '../../models';
import { changeCity, changeLanguage, changeUserName } from '../../slices';
import { commonLocalStorageSaver, COMMON_LOCAL_STORAGE_FIELDS } from './extractors';



export const commonLocalStorageMiddleware: Middleware<{}, StoreModel> = () => (next) => (action) => {
  switch (action.type) {
    case changeUserName.type:
      commonLocalStorageSaver.saveField(COMMON_LOCAL_STORAGE_FIELDS.Username, action.payload);
      break;

    case changeLanguage.type:
      commonLocalStorageSaver.saveField(COMMON_LOCAL_STORAGE_FIELDS.Language, action.payload);
      break;

    case changeCity.type:
      commonLocalStorageSaver.saveField(COMMON_LOCAL_STORAGE_FIELDS.City, action.payload);
      break;
  }

  next(action);
};
