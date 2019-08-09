import 'react-hot-loader';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './core/App';

ReactDOM.render(
  <BrowserRouter>
    <App complier="TypeScript" framework="React" language="javascript" />
  </BrowserRouter>,
  document.getElementById('root')
);
