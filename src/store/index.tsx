import * as React from 'react';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import * as PropTypes from 'prop-types';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducers } from './reducers';

interface StoreProps {
  children: JSX.Element;
}

const initalState = {};

export const Store: React.FC<StoreProps> = ({ children }) => {
  const store = createStore(
    reducers,
    initalState,
    composeWithDevTools(applyMiddleware(thunk))
  );

  return <Provider store={store}>{children}</Provider>;
};

Store.propTypes = {
  children: PropTypes.element.isRequired
};
