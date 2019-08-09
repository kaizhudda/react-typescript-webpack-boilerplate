import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { AppProps } from '../interfaces/AppInterface';
import { Routes } from '../routes';

import './App.scss';

const App: React.FC<AppProps> = (): JSX.Element => {
  return (
    <div className="App">
      <Routes />
    </div>
  );
};

export default hot(App);
