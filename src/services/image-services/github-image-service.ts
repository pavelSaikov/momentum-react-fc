class GithubImageService {
  private endpoint: string;

  constructor() {
    this.endpoint = 'https://raw.githubusercontent.com';
  }

  getImage(dayTime: string, imageIndex: number): Promise<string> {
    const imageNumber = imageIndex + 1;
    const preparedImageNumber = imageNumber < 10 ? '0' + imageNumber : imageNumber;
    const url = `${this.endpoint}/rolling-scopes-school/stage1-tasks/assets/images/${dayTime}/${preparedImageNumber}.jpg`;

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
