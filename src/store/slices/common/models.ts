import { DAY_PART, Language } from '../../../constants';

export interface CommonSlice {
  dayPart: DAY_PART;
  city: string;
  language: Language;
}
