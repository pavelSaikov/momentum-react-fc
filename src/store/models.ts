import { CommonSlice, ImageServiceSlice } from './slices';

export interface StoreModel {
  imageService: ImageServiceSlice;
  common: CommonSlice;
}
