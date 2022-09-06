import { Language } from '../../constants';

class QuotesService {
  getQuote(language: string) {
    const url =
      'https://raw.githubusercontent.com/pavelSaikov/assets/main/' +
      (language === Language.En ? 'quotes_en.json' : 'quotes_ru.json');

    return fetch(url)
      .then((res) => res.json())
      .then((data) => data[Math.floor(Math.random() * data.length)]);
  }
}

export const quotesService = new QuotesService();
