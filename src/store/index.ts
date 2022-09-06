import { configureStore } from '@reduxjs/toolkit';

import { commonSlice, imageServiceSlice } from './slices';

export default configureStore({
  reducer: {
    common: commonSlice.reducer,
    weatherService: imageServiceSlice.reducer,
  },
});
