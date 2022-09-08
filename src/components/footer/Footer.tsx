import './footer.scss';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { languageSelector, toggleSettingsModal } from '../../store';
import { quotesService } from '../../services';

export const Footer = () => {
  const language = useSelector(languageSelector);
  const dispatch = useDispatch();

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const refreshRef = useRef<HTMLElement>(null);

  const refreshQuote = useMemo(
    () => (language: string) =>
      quotesService.getQuote(language).then((quoteObj) => {
        setQuote(quoteObj.text);
        setAuthor(quoteObj.author);
      }),
    [],
  );
  useEffect(() => {
    refreshQuote(language);
  }, [language, refreshQuote]);

  const onRefreshClick = useCallback(() => {
    refreshRef.current?.classList.remove('rot');

    refreshQuote(language);

    refreshRef.current?.classList.add('rot');
    setTimeout(() => refreshRef.current?.classList.remove('rot'), 300);
  }, [language, refreshQuote]);

  const onOpenSettingsModalClick = useCallback(() => dispatch(toggleSettingsModal()), [dispatch]);

  return (
    <footer className="footer">
      <i ref={refreshRef} className="refresh-button icon-spinner11" onClick={onRefreshClick}></i>
      <p className="quote">{quote}</p>
      <p className="author">{author}</p>
      <i className="settings-button icon-cog" onClick={onOpenSettingsModalClick}></i>
    </footer>
  );
};
