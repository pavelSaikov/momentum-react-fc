import { env } from '../../constants';
import { DayForecast, Weather } from './models';

class WeatherService {
  private endpoint: string;

  constructor() {
    this.endpoint = 'https://api.openweathermap.org/data/2.5';
  }

  getWeather({
    place,
    forecastLength,
    abortController,
    lang,
  }: {
    place: string;
    forecastLength: number;
    abortController: AbortController;
    lang: string;
  }): Promise<{ forecast: DayForecast[] }> {
    const searchParams = new URLSearchParams([
      ['q', place],
      ['lang', lang],
      ['units', 'metric'],
      ['APPID', env.WEATHER_API_KEY],
    ]);

    return fetch(`${this.endpoint}/forecast?${searchParams}`, { signal: abortController.signal })
      .then((response) => response.json())
      .then(({ list }) => ({
        forecast: this._adaptForecast(list, forecastLength),
      }))
      .catch(() => {
        throw new Error(`Weather not found for city ${place}`);
      });
  }

  _adaptForecast(list: Weather[], forecastLength: number): DayForecast[] {
    const currentWeatherForecast = {
      temp: Math.round(list[0].main.temp) || 0,
      feelsLike: Math.round(list[0].main.feels_like) || 0,
      humidity: list[0].main.humidity,
      description: {
        id: `${list[0].weather[0].id}`,
        name: list[0].weather[0].description,
        icon: list[0].weather[0].icon,
      },
      wind: Math.round(list[0].wind.speed),
      date: list[0].dt_txt,
    };

    const forecastsForOtherDays = list.filter((record) => {
      const recordDate = new Date(record.dt_txt);
      const currentDate = new Date(currentWeatherForecast.date);
      return recordDate.getDate() !== currentDate.getDate() ? true : false;
    });

    const averageTemperatureForOtherDays = this._calculateDailyAverageTemperatureForOtherDays(
      forecastsForOtherDays,
      forecastLength - 1,
    );

    return [currentWeatherForecast, ...averageTemperatureForOtherDays];
  }

  _calculateDailyAverageTemperatureForOtherDays(list: Weather[], forecastLength: number) {
    return list.reduce<{ forecast: DayForecast[]; lastDate: null | number }>(
      (acc, record) => {
        const date = new Date(record.dt_txt);
        if (date.getDate() === acc.lastDate || acc.forecast.length === forecastLength) {
          return acc;
        }

        const hourlyForecasts = list.filter((record) => {
          const recordDate = new Date(record.dt_txt);
          return recordDate.getDate() !== date.getDate() ? false : true;
        });

        const temperaturesSum = hourlyForecasts.reduce((temperaturesSum, record) => {
          return (temperaturesSum += Math.round(record.main.temp) || 0);
        }, 0);

        const averageTemperaturePerDay = Math.round(temperaturesSum / hourlyForecasts.length);
        acc.lastDate = date.getDate();

        acc.forecast.push({
          temp: averageTemperaturePerDay,
          feelsLike: averageTemperaturePerDay,
          humidity: record.main.humidity,
          description: {
            id: `${record.weather[0].id}`,
            name: record.weather[0].description,
            icon: record.weather[0].icon,
          },
          wind: Math.round(record.wind.speed),
          date: record.dt_txt,
        });
        return acc;
      },
      { forecast: [], lastDate: null },
    ).forecast;
  }
}

export const weatherService = new WeatherService();
