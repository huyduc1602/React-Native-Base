import { put, call, takeLatest, delay } from 'redux-saga/effects';
import { getLogin } from '../../app/repositories/LoginRepository';
import * as loginActions from '../../app/actions/loginAction';
import * as alertAction from '../../app/actions/alertAction';
import * as types from '../../app/actions/types';
import * as RootNavigation from '../../app/navigation/RootNavigation';
import * as ScreenTypes from '../../app/navigation/ScreenTypes';

const TAG = 'LoginSaga';

export function* fetchLogin(params) {
  let response = yield call(getLogin, params.params);

  //DUMMY DATA
  const NETWORK_ERROR = 'Network Error';
  console.log(TAG + ' response: ' + JSON.stringify(response));
  if (response.status === NETWORK_ERROR) {
    // response = {
    //   statusCode: 200,
    //   loading: false,
    //   results: {},
    // };
    // yield delay(2000);
    console.error(TAG + ' error login: ' + JSON.stringify(response));
  }

  if (response.user) {
    response = {
      statusCode: 200,
      loading: false,
      results: response,
    };
  }

  if (response.statusCode === 200) {
    yield put(loginActions.onLoginResponse(response));
    RootNavigation.navigate(ScreenTypes.Home);
  } else {
    yield put(loginActions.loginFailed());
    yield put(alertAction.requestAlertErrorAction(response));
  }
}

export const loginSaga = [takeLatest(types.LOGIN_REQUEST, fetchLogin)];
