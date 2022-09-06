export interface Weather {
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };

  weather: {
    id: string;
    description: string;
    icon: string;
  }[];

  wind: {
    speed: number;
  };

  dt_txt: string;
}

export interface DayForecast {
  temp: number;
  feelsLike: number;
  humidity: number;
  description: { id: string; name: string };
  wind: number;
  date: string;
}
