import './main.scss';

import { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { nextImageIndex, prevImageIndex } from '../../store';
import { DateAndTime, Greeting } from './components';

export const Main = () => {
  const dispatch = useDispatch();

  const onPrevImageClick = useCallback(() => dispatch(prevImageIndex()), [dispatch]);
  const onNextImageClick = useCallback(() => dispatch(nextImageIndex()), [dispatch]);

  return (
    <main className="main">
      <div className="button left">
        <i className="arrow icon-arrow-left2" onClick={onPrevImageClick}></i>
      </div>
      <div className="time-and-greeting-container">
        <DateAndTime />
        <Greeting />
      </div>
      <div className="button right">
        <i className="arrow icon-arrow-right2" onClick={onNextImageClick}></i>
      </div>
    </main>
  );
};
