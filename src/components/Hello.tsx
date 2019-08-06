import * as React from 'react';

export interface IProps {
  complier: string;
  framework: string;
}

export const Hello = (props: IProps): JSX.Element => {
  return (
    <h1>
      Hello from {props.complier} and {props.framework}
    </h1>
  );
};
