import { IMAGE_SOURCE } from '../../constants';
import { flickrImageService } from './flickr-image-service';
import { githubImageService } from './github-image-service';
import { unsplashImageService } from './unsplash-image-service';

export const IMAGE_SERVICE_ID_SERVICE_INSTANCE_MAP = new Map<IMAGE_SOURCE, any>([
  [IMAGE_SOURCE.Flickr, flickrImageService],
  [IMAGE_SOURCE.Github, githubImageService],
  [IMAGE_SOURCE.Unsplash, unsplashImageService],
]);

export { IMAGE_SERVICE_ID_PARAMS_FACTORY_MAP } from './helpers';

export * from './constants';
