import * as React from 'react';
import * as PropTypes from 'prop-types';
import { AppProps } from '../interfaces/AppInterface';

export const App: React.FC<AppProps> = (props): JSX.Element => {
  const { complier, framework } = props;
  return (
    <h1>
      Hello from {complier} and {framework}
    </h1>
  );
};

App.propTypes = {
  complier: PropTypes.string,
  framework: PropTypes.string
};
