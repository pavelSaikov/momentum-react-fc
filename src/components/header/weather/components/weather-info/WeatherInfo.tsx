import './weather-info.scss';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { LANGUAGE } from '../../../../../constants';
import { DayForecast, weatherService } from '../../../../../services';
import { citySelector, languageSelector } from '../../../../../store';

export const WeatherInfo = () => {
  const city = useSelector(citySelector);
  const language = useSelector(languageSelector);

  const [weather, setWeather] = useState<DayForecast | undefined>();

  useEffect(() => {
    if (!city) {
      return;
    }

    const abortController = new AbortController();
    weatherService
      .getWeather({ place: city, forecastLength: 1, abortController, lang: language })
      .then(({ forecast }) => setWeather(forecast[0]));

    return () => abortController.abort();
  }, [city, language]);

  if (!weather) {
    return null;
  }

  return (
    <div className="weather-info">
      <div className="weather-icon">
        <img src={`http://openweathermap.org/img/wn/${weather.description.icon}@2x.png`} alt="icon" />
      </div>
      <div className="text-info">
        <div className="temperature-and-description">
          <p>
            {weather.feelsLike} &deg;C {weather.description.name}
          </p>
        </div>
        <div className="wind-speed">
          <p>
            {language === LANGUAGE.Ru ? 'Скорость ветра:' : 'Wind speed:'} {weather.wind}
          </p>
        </div>
        <div className="humidity">
          <p>
            {language === LANGUAGE.Ru ? 'Влажность' : 'Humidity'}: {`${weather.humidity}%`}
          </p>
        </div>
      </div>
    </div>
  );
};
