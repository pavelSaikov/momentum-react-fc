import { configureStore } from '@reduxjs/toolkit';

import { weatherServiceSlice } from './slices';

export default configureStore({
  reducer: {
    weatherService: weatherServiceSlice.reducer,
  },
});
