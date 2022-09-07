import { createSelector } from '@reduxjs/toolkit';

import { StoreModel } from '../../models';

export const dayPartSelector = createSelector(
  (store: StoreModel) => store.common.dayPart,
  (dayPart) => dayPart,
);
