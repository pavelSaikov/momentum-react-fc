import './city-input.scss';

import { ChangeEvent, useCallback, useEffect, useMemo } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';

import { changeCity } from '../../../../../store';
import { Subject, tap, debounceTime } from 'rxjs';

export const CityInput = () => {
  const dispatch = useDispatch();
  const subject = useMemo(() => new Subject<string>(), []);

  useEffect(() => {
    const subscription = subject
      .pipe(
        debounceTime(500),
        tap((newCity) => dispatch(changeCity(newCity))),
      )
      .subscribe();

    return () => subscription.unsubscribe();
  }, [subject, dispatch]);

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => subject.next(event.target.value), []);

  return <input className="city-input" onChange={onChange}></input>;
};
