import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import { AppProps } from '../interfaces/AppInterface';
import { Routes } from '../routes';

import './App.scss';

const App: React.FC<AppProps> = (): JSX.Element => {
  const [count, setCount] = React.useState(0);

  return (
    <div className="App">
      <Routes />
      <button
        onClick={() => setCount(count + 1)}
        type="button"
        className="button"
      >
        Count
      </button>
      {count}
    </div>
  );
};

export default hot(App);
