import './city-input.scss';

import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';

import {} from 'react-redux';
import { debounceTime, Subject, tap } from 'rxjs';
import { changeCity, citySelector } from '../../../../../store';
import { useSelector } from 'react-redux';

export const CityInput = () => {
  const dispatch = useDispatch();
  const [city] = useState(useSelector(citySelector));
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

  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => subject.next(event.target.value), [subject]);

  return <input className="city-input" onChange={onChange} defaultValue={city}></input>;
};
