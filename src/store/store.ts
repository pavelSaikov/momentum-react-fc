import { configureStore, Store } from '@reduxjs/toolkit';
import { commonLocalStorageMiddleware, ImageServiceLocalStorageMiddleware } from './middlewares';


import { StoreModel } from './models';
import { commonSlice, imageServiceSlice, musicSlice } from './slices';

const store: Store<StoreModel> = configureStore({
  reducer: {
    common: commonSlice.reducer,
    imageService: imageServiceSlice.reducer,
    music: musicSlice.reducer,
  },
  middleware: [ImageServiceLocalStorageMiddleware, commonLocalStorageMiddleware],
});

export default store;
