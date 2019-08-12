import { combineReducers } from 'redux';
import { test } from './core';

export interface StoreState {
  test: string;
}

export const reducers = combineReducers<StoreState>({
  test
});
