import './music-list.scss';

import { useSelector } from 'react-redux';

import { trackIndexNameMapSelector, trackIndexSelector } from '../../../../../store';

export const MusicList = () => {
  const trackIndex = useSelector(trackIndexSelector);
  const trackIndexNameMap = useSelector(trackIndexNameMapSelector);

  return (
    <div className="music-list">
      {trackIndexNameMap.map(([index, name]) => {
        const className = 'icon-checkmark music-list-item' + (trackIndex === index ? ' selected' : '');
        return (
          <ul className={className} key={index + className}>
            {name}
          </ul>
        );
      })}
    </div>
  );
};
