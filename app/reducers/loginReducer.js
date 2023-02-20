import createReducer from '../../app/stores/createReducer';
import * as types from '../../app/actions/types';

const TAG = 'LoginReducer';

const initialState = {
  status: 'none',
  token: '',
  loading: false,
};

const handlers = {
  [types.LOGIN_REQUEST](state, action) {
    state.loading = true;
    console.log(TAG + ' ' + types.LOGIN_REQUEST + ' state= ' + JSON.stringify(state));
    return {
      ...state,
      params: action.params,
    };
  },
  [types.LOGIN_RESPONSE](state, action) {
    state.loading = false;
    console.log(TAG + ' ' + types.LOGIN_RESPONSE + ' state= ' + JSON.stringify(state));
    console.log(TAG + ' ' + types.LOGIN_RESPONSE + ' action= ' + JSON.stringify(action));

    return {
      loading: false,
      status: 'ok',
      token: action.response.results.token,
    };
  },
  [types.LOGIN_FAILED](state) {
    state.loading = false;
    console.log(TAG + ' ' + types.LOGIN_FAILED + ' state= ' + JSON.stringify(state));
    return {
      status: 'error',
      loading: false,
    };
  },
};

export default loginReducer = createReducer(initialState, handlers);
