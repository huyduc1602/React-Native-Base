import * as types from '../../app/actions/types';

const TAG = 'LoginAction';

export function requestLogin(params) {
  console.log(TAG + ' requestLogin() ' + JSON.stringify(params));
  return {
    type: types.LOGIN_REQUEST,
    params: params,
  };
}

export function loginFailed() {
  console.log(TAG + ' loginFailed() ');
  return {
    type: types.LOGIN_FAILED,
  };
}

export function onLoginResponse(response) {
  console.log(TAG + ' onLoginResponse() response= ' + JSON.stringify(response));
  return {
    type: types.LOGIN_RESPONSE,
    response,
  };
}
