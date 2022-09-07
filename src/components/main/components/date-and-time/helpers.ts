import { LANGUAGE } from '../../../../constants';
import {
  EN_MONTH_NUMBER_MONTH_NAME_MAP,
  EN_WEEK_DAY_NUMBER_WEEK_DAY_NAME_MAP,
  RU_MONTH_NUMBER_MONTH_NAME_MAP,
  RU_WEEK_DAY_NUMBER_WEEK_DAY_NAME_MAP,
} from './constants';

export interface Time {
  hours: string;
  minutes: string;
  seconds: string;
}

export interface Date {
  day: number;
  month: number;
  date: number;
}

export const generateTime = (): Time => {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  const [modifiedHours, modifiedMinutes, modifiedSeconds] = [hours, minutes, seconds].map((value) =>
    value < 10 ? `0${value}` : `${value}`,
  );

  return { hours: modifiedHours, minutes: modifiedMinutes, seconds: modifiedSeconds };
};

const formatRussianDate = ({ day, month, date }: Date) => {
  const dayName = RU_WEEK_DAY_NUMBER_WEEK_DAY_NAME_MAP.get(day);
  const monthName = RU_MONTH_NUMBER_MONTH_NAME_MAP.get(month);

  return `${dayName}, ${monthName} ${date}`;
};

const formatEnglishDate = ({ day, month, date }: Date) => {
  const dayName = EN_WEEK_DAY_NUMBER_WEEK_DAY_NAME_MAP.get(day);
  const monthName = EN_MONTH_NUMBER_MONTH_NAME_MAP.get(month);

  return `${dayName}, ${monthName} ${date}`;
};

const LANGUAGE_DATE_FORMATTER_MAP = new Map([
  [LANGUAGE.Ru, formatRussianDate],
  [LANGUAGE.En, formatEnglishDate],
]);

export const formatDate = ({ day, month, date, language }: Date & { language: LANGUAGE }) => {
  const dateFormatter = LANGUAGE_DATE_FORMATTER_MAP.get(language);

  if (!dateFormatter) {
    throw Error(`Date formatter for language ${language} not found`);
  }

  return dateFormatter({ day, month, date });
};
