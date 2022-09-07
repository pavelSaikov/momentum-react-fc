export enum IMAGE_SOURCE {
  Github = 'Github',
  Unsplash = 'Unsplash',
  Flickr = 'Flickr',
}

export enum DAY_PART {
  Morning = 'Morning',
  Afternoon = 'Afternoon',
  Evening = 'Evening',
  Night = 'Night',
}

export enum LANGUAGE {
  Ru = 'Ru',
  En = 'En',
}

export const env: { [key: string]: string } = {
  FLICKR_API_KEY: process.env.REACT_APP_FLICKR_API_KEY ? process.env.REACT_APP_FLICKR_API_KEY.toString() : '',
  UNSPLASH_API_KEY: process.env.REACT_APP_UNSPLASH_API_KEY ? process.env.REACT_APP_UNSPLASH_API_KEY.toString() : '',
  WEATHER_API_KEY: process.env.REACT_APP_WEATHER_API_KEY ? process.env.REACT_APP_WEATHER_API_KEY.toString() : '',
};
