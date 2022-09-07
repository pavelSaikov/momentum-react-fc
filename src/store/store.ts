import { configureStore, Store } from '@reduxjs/toolkit';
import { StoreModel } from './models';

import { commonSlice, imageServiceSlice } from './slices';

const store: Store<StoreModel> = configureStore({
  reducer: {
    common: commonSlice.reducer,
    imageService: imageServiceSlice.reducer,
  },
});

export default store;
