import './date-and-time.scss';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { languageSelector } from '../../../../store';
import { formatDate, generateTime, Time } from './helpers';

export const DateAndTime = () => {
  const language = useSelector(languageSelector);
  const [time, setTime] = useState<Time>();
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    const id = setInterval(() => {
      const time = generateTime();
      setTime(time);
    }, 1000);

    return () => clearInterval(id);
  });

  useEffect(() => {
    const date = new Date();
    const day = date.getDay();
    const month = date.getMonth();
    const monthDate = date.getDate();

    setDate(formatDate({ day, month, date: monthDate, language }));
  }, [language]);

  return (
    <div className="date-and-time">
      {time && (
        <div className="time">
          <p>{time.hours} : </p>
          <p>{time.minutes} : </p>
          <p>{time.seconds}</p>
        </div>
      )}
      <div className="date">
        <p>{date}</p>
      </div>
    </div>
  );
};
