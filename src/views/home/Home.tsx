import * as React from 'react';
import { Helmet } from 'react-helmet';
import { RouteComponentProps } from 'react-router-dom';

export const Home: React.FC<RouteComponentProps> = (): JSX.Element => {
  return (
    <div>
      <Helmet>
        <title>About</title>
        <meta
          charSet="utf-8"
          name="description"
          content="We are building a super lightweight react boilerplate using webpack"
        />
      </Helmet>
      Homepage
    </div>
  )
};
