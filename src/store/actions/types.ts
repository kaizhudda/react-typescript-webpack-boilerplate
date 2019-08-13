/* eslint-disable import/no-cycle */
import { FetchTestAction } from './test';

export enum ActionTypes {
  fetchTest
}

export type Action = FetchTestAction;
