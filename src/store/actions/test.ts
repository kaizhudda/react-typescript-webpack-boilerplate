import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface FetchTestAction {
  type: ActionTypes.fetchTest;
  payload: string;
}

export const fetchTest = () => (dispatch: Dispatch) => {
  dispatch<FetchTestAction>({
    type: ActionTypes.fetchTest,
    payload: 'test'
  });
};
