import './audio-player.scss';

import { useCallback, useReducer, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { nextTrack, previousTrack, trackIndexSelector } from '../../../../../store';

const createLink = (index: number) => `https://raw.githubusercontent.com/pavelSaikov/assets/main/${index}.mp3`;

export const AudioPlayer = () => {
  const [isPlay, togglePlayState] = useReducer((state) => !state, false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const dispatch = useDispatch();
  const trackIndex = useSelector(trackIndexSelector);

  const playPrevClick = useCallback(() => dispatch(previousTrack()), [dispatch]);
  const playNextClick = useCallback(() => dispatch(nextTrack()), [dispatch]);

  const onCanPlay = useCallback(() => {
    if (isPlay) {
      audioRef.current?.play();
    }
  }, [isPlay]);

  const onPlayPauseClick = useCallback(() => {
    isPlay ? audioRef.current?.pause() : audioRef.current?.play();
    togglePlayState();
  }, [isPlay]);

  return (
    <div className="audio-player">
      <button className="play-prev" onClick={playPrevClick}></button>
      <button className={isPlay ? 'pause' : 'play'} onClick={onPlayPauseClick}></button>
      <button className="play-next" onClick={playNextClick}></button>
      <audio
        ref={audioRef}
        src={createLink(trackIndex)}
        onEnded={playNextClick}
        onCanPlay={onCanPlay}
        style={{ display: 'none' }}
      />
    </div>
  );
};
