import 'react-hot-loader';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Store } from './store';

import App from './core/App';

ReactDOM.render(
  <Store>
    <BrowserRouter>
      <App complier="TypeScript" framework="React" language="javascript" />
    </BrowserRouter>
  </Store>,
  document.getElementById('root')
);
