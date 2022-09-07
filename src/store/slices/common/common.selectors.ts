import { createSelector } from '@reduxjs/toolkit';

import { StoreModel } from '../../models';

export const dayPartSelector = createSelector(
  (store: StoreModel) => store.common.dayPart,
  (dayPart) => dayPart,
);

export const citySelector = createSelector(
  (store: StoreModel) => store.common.city,
  (city) => city,
);

export const languageSelector = createSelector(
  (store: StoreModel) => store.common.language,
  (language) => language,
);
