import { MAX_IMAGE_INDEX } from '../../../services';

export const calculateNextImageIndex = (currentIndex: number) =>
  currentIndex === MAX_IMAGE_INDEX ? 0 : currentIndex + 1;

export const calculatePrevImageIndex = (currentIndex: number) =>
  currentIndex === 0 ? MAX_IMAGE_INDEX : currentIndex - 1;
