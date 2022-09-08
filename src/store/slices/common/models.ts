import { DAY_PART, LANGUAGE } from '../../../constants';

export interface CommonSlice {
  dayPart: DAY_PART;
  city: string;
  language: LANGUAGE;
  username: string;
  isSettingsModalOpen: boolean;
}
