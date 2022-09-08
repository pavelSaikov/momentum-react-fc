import './settings-modal.scss';

import { ChangeEvent, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IMAGE_SOURCE, LANGUAGE } from '../../constants';
import {
    changeImageSource,
    changeLanguage,
    changeTag,
    imageSourceSelector,
    imageTagSelector,
    isSettingModalOpenSelector,
    languageSelector,
    toggleSettingsModal
} from '../../store';

export const SettingsModal = () => {
  const language = useSelector(languageSelector);
  const isSettingsModalOpen = useSelector(isSettingModalOpenSelector);
  const imageService = useSelector(imageSourceSelector);
  const imageTag = useSelector(imageTagSelector);

  const dispatch = useDispatch();

  const onImageTagChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => dispatch(changeTag(event.target.value)),
    [dispatch],
  );

  const onCloseModalClick = useCallback(() => dispatch(toggleSettingsModal()), [dispatch]);

  const onLanguageToggle = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => dispatch(changeLanguage(event.target.value as LANGUAGE)),
    [dispatch],
  );

  const onImageSourceToggle = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => dispatch(changeImageSource(event.target.value as IMAGE_SOURCE)),
    [dispatch],
  );

  if (!isSettingsModalOpen) {
    return null;
  }

  return (
    <div className="settings-modal">
      <div className="settings-modal-header">
        <i className="icon-cross close-button" onClick={onCloseModalClick}></i>
      </div>
      <div className="controls-container">
        <form className="language-toggle">
          <p>{language === LANGUAGE.Ru ? 'Язык' : 'Language'}</p>

          <input
            type={'radio'}
            name="language"
            value={LANGUAGE.Ru}
            id={LANGUAGE.Ru}
            defaultChecked={language === LANGUAGE.Ru}
            onChange={onLanguageToggle}
          />
          <label htmlFor={LANGUAGE.Ru}>{language === LANGUAGE.Ru ? 'Рус' : 'Ru'}</label>

          <input
            type={'radio'}
            name="language"
            value={LANGUAGE.En}
            id={LANGUAGE.En}
            defaultChecked={language === LANGUAGE.En}
            onChange={onLanguageToggle}
          />
          <label htmlFor={LANGUAGE.En}>{language === LANGUAGE.Ru ? 'Анг' : 'En'}</label>
        </form>

        <form className="image-service-toggle">
          <p>{language === LANGUAGE.Ru ? 'Сервис изображений' : 'Image service'}</p>

          <input
            type={'radio'}
            name="image-service"
            value={IMAGE_SOURCE.Github}
            id={IMAGE_SOURCE.Github}
            defaultChecked={imageService === IMAGE_SOURCE.Github}
            onChange={onImageSourceToggle}
          />
          <label htmlFor={IMAGE_SOURCE.Github}>Github</label>

          <input
            type={'radio'}
            name="image-service"
            value={IMAGE_SOURCE.Flickr}
            id={IMAGE_SOURCE.Flickr}
            defaultChecked={imageService === IMAGE_SOURCE.Flickr}
            onChange={onImageSourceToggle}
          />
          <label htmlFor={IMAGE_SOURCE.Flickr}>Flickr</label>

          <input
            type={'radio'}
            name="image-service"
            value={IMAGE_SOURCE.Unsplash}
            id={IMAGE_SOURCE.Unsplash}
            defaultChecked={imageService === IMAGE_SOURCE.Unsplash}
            onChange={onImageSourceToggle}
          />
          <label htmlFor={IMAGE_SOURCE.Unsplash}>Unsplash</label>
        </form>

        <div className="image-tag-input-container">
          <p>{language === LANGUAGE.Ru ? 'Тег' : 'Tag'}</p>
          <input className="image-tag-input" value={imageTag} onChange={onImageTagChange} />
        </div>
      </div>
    </div>
  );
};
