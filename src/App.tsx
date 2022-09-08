import './app.scss';

import { Fragment } from 'react';

import { BackgroundImage, Footer, Header, Main, SettingsModal } from './components';

function App() {
  return (
    <Fragment>
      <BackgroundImage />
      <Header />
      <Main />
      <Footer />
      <SettingsModal />
    </Fragment>
  );
}

export default App;
