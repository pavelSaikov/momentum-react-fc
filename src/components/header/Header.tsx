import './header.scss';

import { Weather } from './weather';
import { AudioPlayerWithList } from './audio-player-with-list';

export const Header = () => {
  return (
    <header className="header">
      <AudioPlayerWithList />
      <Weather />
    </header>
  );
};
