import { CityInput, WeatherInfo } from './components';

export const Weather = () => {
  return (
    <div className="weather">
      <CityInput />
      <WeatherInfo />
    </div>
  );
};
