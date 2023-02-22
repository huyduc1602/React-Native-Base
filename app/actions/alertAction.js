import * as types from '../../app/actions/types';

const TAG = 'AlertAction';

export function requestAlertErrorAction(params) {
  console.log(TAG + ' requestAlertErrorAction() ');
  return {
    type: types.ALERT_ERROR_REQUEST,
    params,
    ignore: false,
  };
}

export function requestIgnoreAlertErrorAction(params) {
  console.log(TAG + ' requestIgnoreAlertErrorAction() ');
  return {
    type: types.ALERT_ERROR_REQUEST,
    params,
    ignore: true,
  };
}

