import * as React from 'react';
import * as PropTypes from 'prop-types';
import { AppProps } from '../interfaces/AppInterface';
import * as TSWebpackImage from '../assets/ts-webpack.png';

import './App.scss';

export const App: React.FC<AppProps> = (props): JSX.Element => {
  const { complier, framework, language } = props;
  return (
    <div className="App">
      Hello from {complier} and {framework} and {language}
    </div>
  );
};

App.propTypes = {
  complier: PropTypes.string,
  framework: PropTypes.string,
  language: PropTypes.string
};
