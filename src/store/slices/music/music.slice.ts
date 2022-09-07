import { createSlice } from '@reduxjs/toolkit';

import { MAX_TRACK_INDEX } from './constants';
import { MusicSlice } from './models';

const INITIAL_STATE: MusicSlice = {
  index: 0,
  trackListNameMap: [
    [0, 'Epic Hollywood Trailer'],
    [1, 'Battle Of The Dragons'],
    [2, 'Cinematic Chillhop Main'],
    [3, 'The Way Home'],
  ],
};

export const musicSlice = createSlice({
  name: 'common',
  initialState: INITIAL_STATE,
  reducers: {
    nextTrack: (store) => {
      const currentTrackNumber = store.index;

      const newTrackNumber = currentTrackNumber === MAX_TRACK_INDEX ? 0 : currentTrackNumber + 1;
      store.index = newTrackNumber;
    },

    previousTrack: (store) => {
      const currentTrackNumber = store.index;

      const newTrackNumber = currentTrackNumber === 0 ? MAX_TRACK_INDEX : currentTrackNumber - 1;
      store.index = newTrackNumber;
    },
  },
});

export const { nextTrack, previousTrack } = musicSlice.actions;
