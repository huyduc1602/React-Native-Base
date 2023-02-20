import { put, call, takeLatest, delay } from 'redux-saga/effects';
import * as loginActions from '../../app/actions/loginAction';
import * as types from '../../app/actions/types';
import * as RootNavigation from '../../app/navigation/RootNavigation';
import * as ScreenTypes from '../../app/navigation/ScreenTypes';


export function* fetchLogin(params) {
  // const response = yield call(getLogin, params.params);

  const response = {
    statusCode: 200,
    loading: false,
    results: {}
  };
  yield delay(2000);

  if (response.statusCode === 200) {
    yield put(loginActions.onLoginResponse(response));
    RootNavigation.navigate(ScreenTypes.Home);
  } else {
    yield put(loginActions.loginFailed());
  }
}

export const loginSagas = [
  takeLatest(types.LOGIN_REQUEST, fetchLogin),
];