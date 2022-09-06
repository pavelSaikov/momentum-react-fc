import { env } from "../../constants";

class UnsplashImageService {
  private endpoint: string;

  constructor() {
    this.endpoint = 'https://api.unsplash.com/search';
  }

  getImage(keyWords: string, imageNumber: number, abortController: AbortController) {
    const searchParams = new URLSearchParams([
      ['orientation', 'portrait'],
      ['per_page', '25'],
      ['query', keyWords],
      ['client_id', env.UNSPLASH_API_KEY],
    ]);
    return fetch(`${this.endpoint}/photos?${searchParams}`, { signal: abortController.signal })
      .then((response) => response.json())
      .then((respJSON) => respJSON.results[imageNumber].urls.full)
      .then(
        (url) =>
          new Promise((resolve) => {
            const img = new Image();
            img.src = url;
            img.onload = () => resolve(url);
          }),
      )
      .catch(() => {
        throw new Error('Image not found');
      });
  }
}

export const unsplashImageService = new UnsplashImageService();
