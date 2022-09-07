import { DAY_PART } from '../../../constants';

export const calculateDayPart = (): DAY_PART => {
  const date = new Date();
  const hours = date.getHours();

  if (hours >= 6 && hours < 12) {
    return DAY_PART.Morning;
  }

  if (hours >= 12 && hours < 18) {
    return DAY_PART.Afternoon;
  }

  if (hours >= 18 && hours <= 23) {
    return DAY_PART.Evening;
  }

  if (hours >= 0 && hours < 6) {
    return DAY_PART.Night;
  }

  return DAY_PART.Morning;
};
