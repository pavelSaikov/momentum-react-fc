import { CommonSlice, ImageServiceSlice, MusicSlice } from './slices';

export interface StoreModel {
  imageService: ImageServiceSlice;
  common: CommonSlice;
  music: MusicSlice;
}
