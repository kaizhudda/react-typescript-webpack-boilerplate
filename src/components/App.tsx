import * as React from 'react';
import { IAppProps } from '../interfaces/AppInterface';

export const App: React.FC<IAppProps> = (props): JSX.Element => {
  return (
    <h1>
      Hello from {props.complier} and {props.framework}
    </h1>
  );
};
