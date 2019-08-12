import { ActionTypes, Action } from '../actions';

export const test = (state: string = '', action: Action) => {
  switch (action.type) {
    case ActionTypes.fetchTest:
      return action.payload;
    default:
      return state;
  }
};
