import './header.scss';

import React from 'react';

import { Weather } from './weather';

export const Header = () => {
  return (
    <header className="header">
      <Weather />
    </header>
  );
};
