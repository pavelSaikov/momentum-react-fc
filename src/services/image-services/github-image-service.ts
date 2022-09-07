class GithubImageService {
  private endpoint: string;

  constructor() {
    this.endpoint = 'https://raw.githubusercontent.com';
  }

  getImage(_dayTime: string, imageIndex: number): Promise<string> {
    const url = `${this.endpoint}/pavelSaikov/assets/main/images/${imageIndex}.jpg`;

    return new Promise<string>((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve(url);
    }).catch(() => {
      throw new Error('Image not found');
    });
  }
}

export const githubImageService = new GithubImageService();
