import { env } from '../../constants';

class FlickrImageService {
  private endpoint: string;

  constructor() {
    this.endpoint = 'https://www.flickr.com/services/rest';
  }

  getImage(tags: string, imageNumber: number, abortController: AbortController) {
    const searchParams = new URLSearchParams([
      ['method', 'flickr.photos.search'],
      ['per_page', '20'],
      ['page', '1'],
      ['tags', tags],
      ['api_key', env.FLICKR_API_KEY],
      ['format', 'json'],
      ['nojsoncallback', '1'],
    ]);
    return fetch(`${this.endpoint}/?${searchParams}`, { signal: abortController.signal })
      .then((response) => response.json())
      .then((respJson) => {
        const imageInfo = respJson.photos.photo[imageNumber];

        const url = `https://live.staticflickr.com/${imageInfo.server}/${imageInfo.id}_${imageInfo.secret}_b.jpg`;

        return new Promise((resolve) => {
          const img = new Image();
          img.src = url;
          img.onload = () => resolve(url);
        });
      })
      .catch(() => {
        throw new Error('Image not found');
      });
  }
}

export const flickrImageService = new FlickrImageService();
