import { useEffect, useState } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';

import { IMAGE_SERVICE_ID_PARAMS_FACTORY_MAP, IMAGE_SERVICE_ID_SERVICE_INSTANCE_MAP } from '../../services';
import { changeImageServiceStateSelector, dayPartSelector } from '../../store';

export const BackgroundImage = () => {
  const { imageSource, tag, imageIndex } = useSelector(changeImageServiceStateSelector);
  const dayPart = useSelector(dayPartSelector);

  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    const abortController = new AbortController();
    const imageService = IMAGE_SERVICE_ID_SERVICE_INSTANCE_MAP.get(imageSource);
    const imageServiceParamsFactory = IMAGE_SERVICE_ID_PARAMS_FACTORY_MAP.get(imageSource);

    if (!imageServiceParamsFactory) {
      throw new Error('No such image service params factory');
    }

    const imageServiceParams = imageServiceParamsFactory(tag, dayPart, imageIndex);

    imageService.getImage(...imageServiceParams, abortController).then((imageUrl: string) => setImageUrl(imageUrl));

    return () => abortController.abort();
  }, [imageSource, tag, imageIndex, dayPart]);

  useEffect(() => {
    if (!imageUrl) {
      return;
    }

    const body = document.body;
    body.style.backgroundImage = `url('${imageUrl}')`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundRepeat = 'no-repeat';
    body.style.backgroundPosition = 'center center';
    body.style.backgroundAttachment = 'fixed';
  }, [imageUrl]);

  return <span style={{ visibility: 'hidden' }}></span>;
};
