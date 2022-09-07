import './greeting.scss';

import { useDispatch, useSelector } from 'react-redux';
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import { Subject } from 'rxjs';
import { debounceTime, tap } from 'rxjs/operators';

import { changeUserName, dayPartSelector, languageSelector, usernameSelector } from '../../../../store';
import { formatGreeting } from './helpers';

export const Greeting = () => {
  const dispatch = useDispatch();

  const language = useSelector(languageSelector);
  const dayPart = useSelector(dayPartSelector);

  const [greeting, setGreeting] = useState('');
  const [username, setUsername] = useState(useSelector(usernameSelector));

  const userNameSubject = useMemo(() => new Subject<string>(), []);

  useEffect(() => {
    const subscription = userNameSubject
      .pipe(
        tap((name) => setUsername(name)),
        debounceTime(500),
        tap((name) => dispatch(changeUserName(name))),
      )
      .subscribe();

    return () => subscription.unsubscribe();
  }, [dispatch, userNameSubject]);

  useEffect(() => {
    const greeting = formatGreeting(language, dayPart);
    setGreeting(greeting || '');
  }, [language, dayPart]);

  const onInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => userNameSubject.next(event.target.value),
    [userNameSubject],
  );

  return (
    <div className="greeting">
      <p>{greeting}</p>
      <input className="name-input" value={username} placeholder="[Enter name]" onInput={onInputChange} />
    </div>
  );
};
