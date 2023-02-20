// import { types } from "@babel/core";
import * as types from '../../app/actions/types';

const TAG = 'createReducer';

export default function createReducer(initialState, handlers) {
  // console.log(
  //   TAG +
  //     ' createReducer initialState= ' +
  //     JSON.stringify(initialState) +
  //     '\n handlers= ' +
  //     JSON.stringify(handlers)
  // );
  return function reducer(state = initialState, action) {
    // console.log(
    //   TAG + ' reducer= ' + JSON.stringify(state) + '\n action= ' + JSON.stringify(action)
    // );
    // TODO LMQ
    if (action.type === types.LOGOUT_REQUEST) {
      // console.log('LMQ LOGOUT_REQUEST **********************' + JSON.stringify(initialState));
      // clear all timeout: clearTimeout();
      const resetInitialState = initialState;
      resetInitialState.loading = false;
      return resetInitialState;
    } else if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}
