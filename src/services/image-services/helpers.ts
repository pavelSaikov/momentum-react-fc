import { IMAGE_SOURCE } from '../../constants';
import store from '../../store';

export const IMAGE_SERVICE_ID_PARAMS_FACTORY_MAP = new Map<IMAGE_SOURCE, () => [string | string[], number]>([
  [
    IMAGE_SOURCE.Github,
    (): [string, number] => {
      const state = store.getState();
      const imageNumber = state.weatherService.imageIndex;
      const dayPart = state.common.dayPart;

      return [dayPart, imageNumber + 1];
    },
  ],
  [
    IMAGE_SOURCE.Flickr,
    (): [string[], number] => {
      const state = store.getState();
      const imageNumber = state.weatherService.imageIndex;
      const dayPart = state.common.dayPart;
      const tags = [dayPart, state.weatherService.imageTag];

      return [tags, imageNumber];
    },
  ],
  [
    IMAGE_SOURCE.Unsplash,
    (): [string[], number] => {
      const state = store.getState();
      const imageNumber = state.weatherService.imageIndex;
      const dayPart = state.common.dayPart;
      const tags = [dayPart, state.weatherService.imageTag];

      return [tags, imageNumber];
    },
  ],
]);
