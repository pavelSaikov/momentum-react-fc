import { IMAGE_SOURCE } from '../../../constants';

export interface ImageServiceSlice {
  imageSource: IMAGE_SOURCE;
  imageTag: string;
  imageIndex: number;
}
