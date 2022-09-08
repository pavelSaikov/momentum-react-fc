import { IMAGE_SOURCE, LANGUAGE } from '../../../constants';
import { CommonSlice, ImageServiceSlice } from '../../slices';
import { LocalStorageSaver } from '../local-storage-saver';

export enum IMAGE_SERVICE_LOCAL_STORAGE_FIELDS {
  ImageSource = 'imageSource',
  ImageIndex = 'imageIndex',
  Tag = 'tag',
}

export const imageServiceLocalStorageSaver = new LocalStorageSaver('image-service');

export const commonLocalStorageSaver = new LocalStorageSaver('common');

export enum COMMON_LOCAL_STORAGE_FIELDS {
  Username = 'username',
  Language = 'language',
  City = 'city',
}

export const getImageServiceStateFromLocalStorage = (): Partial<ImageServiceSlice> => ({
  imageSource:
    imageServiceLocalStorageSaver.getField(IMAGE_SERVICE_LOCAL_STORAGE_FIELDS.ImageSource) || IMAGE_SOURCE.Github,
  imageIndex:
    (imageServiceLocalStorageSaver.getField(IMAGE_SERVICE_LOCAL_STORAGE_FIELDS.ImageIndex) &&
      parseInt(imageServiceLocalStorageSaver.getField(IMAGE_SERVICE_LOCAL_STORAGE_FIELDS.ImageIndex))) ||
    0,
  imageTag: imageServiceLocalStorageSaver.getField(IMAGE_SERVICE_LOCAL_STORAGE_FIELDS.Tag) || '',
});

export const getCommonStateFromLocalStorage = (): Partial<CommonSlice> => ({
  username: commonLocalStorageSaver.getField(COMMON_LOCAL_STORAGE_FIELDS.Username) || '',
  language: commonLocalStorageSaver.getField(COMMON_LOCAL_STORAGE_FIELDS.Language) || LANGUAGE.Ru,
  city: commonLocalStorageSaver.getField(COMMON_LOCAL_STORAGE_FIELDS.City) || '',
});
