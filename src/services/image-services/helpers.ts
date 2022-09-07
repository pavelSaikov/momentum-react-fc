import { DAY_PART, IMAGE_SOURCE } from '../../constants';

export const IMAGE_SERVICE_ID_PARAMS_FACTORY_MAP = new Map<
  IMAGE_SOURCE,
  (tag: string, dayPart: DAY_PART, imageNumber: number) => [string | string[], number]
>([
  [
    IMAGE_SOURCE.Github,
    (_tag: string, dayPart: DAY_PART, imageNumber: number): [string, number] => [dayPart, imageNumber + 1],
  ],
  [
    IMAGE_SOURCE.Flickr,
    (tag: string, dayPart: DAY_PART, imageNumber: number): [string[], number] => {
      const tags = [dayPart, tag];

      return [tags, imageNumber];
    },
  ],
  [
    IMAGE_SOURCE.Unsplash,
    (tag: string, dayPart: DAY_PART, imageNumber: number): [string[], number] => {
      const tags = [dayPart, tag];

      return [tags, imageNumber];
    },
  ],
]);
