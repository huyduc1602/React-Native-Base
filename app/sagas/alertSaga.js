import { call, takeEvery } from 'redux-saga/effects';
import { Alert } from 'react-native';
import i18n from '../../app/utils/i18n';
import * as StringNames from '../../app/assets/locales/StringNames';
import * as types from '../../app/actions/types';
const TAG = 'alertSaga';

export function wrappedAlertError(message) {
  return new Promise((resolve) => {
    Alert.alert(
      i18n.t(StringNames.lError),
      message, // Do not translate
      [
        {
          text: i18n.t(StringNames.lOk),
          onPress: function () {
            resolve();
          },
        },
      ],
      { cancelable: false }
    );
  });
}

function convertArrayToString(message) {
  if (!Array.isArray(message)) return message;
  return message.join(', ');
}

export function* fetchAlertErrorSaga(params) {
  console.log(TAG + ' fetchAlertErrorSaga ' + JSON.stringify(params));
  const message = convertArrayToString(params.params.message);

  const ignore = params.ignore;
  if (ignore === false) {
    yield call(wrappedAlertError, message);
  }
}

export const alertSaga = [
  takeEvery(types.ALERT_ERROR_REQUEST, fetchAlertErrorSaga),
];
