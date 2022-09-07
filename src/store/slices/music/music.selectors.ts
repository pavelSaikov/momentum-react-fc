import { createSelector } from '@reduxjs/toolkit';

import { StoreModel } from '../../models';

export const trackIndexSelector = createSelector(
  (store: StoreModel) => store.music.index,
  (index) => index,
);

export const trackIndexNameMapSelector = createSelector(
  (store: StoreModel) => store.music.trackListNameMap,
  (map) => map,
);
