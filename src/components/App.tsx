import { hot } from 'react-hot-loader/root';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { AppProps } from '../interfaces/AppInterface';

import './App.scss';

const App: React.FC<AppProps> = (props): JSX.Element => {
  const [count, setCount] = React.useState(0);
  const { complier, framework, language } = props;


  return (
    <div className="App">
      Hello from {complier} and {framework} and yo zozaa {language}
      <button type="button" onClick={() => setCount(count + 1)}>
        Count
      </button>
      {count}
    </div>
  );
};

App.propTypes = {
  complier: PropTypes.string,
  framework: PropTypes.string,
  language: PropTypes.string
};

export default hot(App);
