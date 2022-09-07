import { DAY_PART, LANGUAGE } from '../../../../constants';

const RU_DAY_PART_GREETING_MAP = new Map([
  [DAY_PART.Afternoon, 'Добрый день: '],
  [DAY_PART.Evening, 'Добрый вечер: '],
  [DAY_PART.Morning, 'Доброе утро: '],
  [DAY_PART.Night, 'Доброй ночи: '],
]);

const ruGreetingFormatter = (dayPart: DAY_PART): string | undefined => RU_DAY_PART_GREETING_MAP.get(dayPart);

const EN_DAY_PART_GREETING_MAP = new Map([
  [DAY_PART.Afternoon, 'Good Day: '],
  [DAY_PART.Evening, 'Good Evening: '],
  [DAY_PART.Morning, 'Good Morning: '],
  [DAY_PART.Night, 'Good Night: '],
]);

const enGreetingFormatter = (dayPart: DAY_PART): string | undefined => EN_DAY_PART_GREETING_MAP.get(dayPart);

const LANGUAGE_GREETING_FORMATTER_MAP = new Map<LANGUAGE, (dayPart: DAY_PART) => string | undefined>([
  [LANGUAGE.Ru, ruGreetingFormatter],
  [LANGUAGE.En, enGreetingFormatter],
]);

export const formatGreeting = (language: LANGUAGE, dayPart: DAY_PART) => {
  const greetingFormatter = LANGUAGE_GREETING_FORMATTER_MAP.get(language);

  if (!greetingFormatter) {
    throw new Error(`Greeting formatter for language ${language} not found`);
  }

  return greetingFormatter(dayPart);
};
