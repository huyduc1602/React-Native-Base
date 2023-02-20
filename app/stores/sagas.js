import { fork, all } from 'redux-saga/effects';
const sagas = function* () {
    yield all([]);
};
export default sagas;

// import { all } from 'redux-saga/effects';
// import { commonSagas } from 'app/sagas/commonSaga';
// import { loginSagas } from 'app/sagas/loginSaga';
// import { logoutSagas } from 'app/sagas/logoutSaga';
// import { registerSagas } from 'app/sagas/registerSaga';
// import { signupSagas } from 'app/sagas/signupSaga';
// import { accountSagas } from 'app/sagas/accountSaga';
// import { settingSagas } from 'app/sagas/settingSaga';
// import { connectDataSagas } from 'app/sagas/connectDataSaga';
// import { forgotPasswordSagas } from 'app/sagas/forgotPasswordSaga';
// import { resetPasswordSagas } from 'app/sagas/resetPasswordSaga';
// import { timeManagementSagas } from 'app/sagas/timeManagementSaga';
// import { timeUpdateSagas } from 'app/sagas/timeUpdateSaga';
// import { timeDeleteSagas } from 'app/sagas/timeDeleteSaga';
// import { timeAddNewSagas } from 'app/sagas/timeAddNewSaga';
// import { leaveSagas } from 'app/sagas/leaveSagas';
// import { timeSagas } from 'app/sagas/timeSagas';
// import { surveyListSagas } from 'app/sagas/surveyListSaga';
// import { refuseSurveySagas } from 'app/sagas/refuseSurveySaga';
// import { payTransSagas } from 'app/sagas/payTransSagas';
// import { paymentAccountSagas } from 'app/sagas/paymentAccountSagas';
// import { pointSagas } from 'app/sagas/pointSagas';
// import { profileSagas } from 'app/sagas/profileSagas';
// import { workingHistorySagas } from 'app/sagas/workingHistorySagas';
// import { eventSagas } from 'app/sagas/eventSagas';
// import { usefulInformationSagas } from 'app/sagas/usefulInformationSaga';
// import { avatarUploadSaga } from 'app/sagas/avatarUploadSaga';
// import { webviewSagas } from 'app/sagas/webViewSaga';
// import { messageSagas } from 'app/sagas/messageSaga';
// import { messageListSagas } from 'app/sagas/messageListSaga';
// import { notificationSagas } from 'app/sagas/notificationSaga';
// import { translateSagas } from 'app/sagas/translateSaga';
// import { alertShowSagas } from 'app/sagas/alertShowSaga';
// import { safetyTipSagas } from 'app/sagas/safetyTipSaga';
// import { thirdPartySaga } from 'app/sagas/thirdPartySaga';
// import { userSagas } from 'app/sagas/userSaga';
// export default function* rootSaga() {
//   yield all([...commonSagas]); // all([...otherSaga])
//   yield all([...loginSagas]);
//   yield all([...logoutSagas]);
//   yield all([...signupSagas]);
//   yield all([...accountSagas]);
//   yield all([...settingSagas]);
//   yield all([...connectDataSagas]);
//   yield all([...registerSagas]);
//   yield all([...forgotPasswordSagas]);
//   yield all([...resetPasswordSagas]);
//   yield all([...timeManagementSagas]);
//   yield all([...timeUpdateSagas]);
//   yield all([...timeDeleteSagas]);
//   yield all([...timeAddNewSagas]);
//   yield all([...leaveSagas]);
//   yield all([...timeSagas]);
//   yield all([...surveyListSagas]);
//   yield all([...refuseSurveySagas]);
//   yield all([...payTransSagas]);
//   yield all([...paymentAccountSagas]);
//   yield all([...pointSagas]);
//   yield all([...profileSagas]);
//   yield all([...workingHistorySagas]);
//   yield all([...eventSagas]);
//   yield all([...usefulInformationSagas]);
//   yield all([...avatarUploadSaga]);
//   yield all([...webviewSagas]);
//   yield all([...messageListSagas]);
//   yield all([...messageSagas]);
//   yield all([...notificationSagas]);
//   yield all([...translateSagas]);
//   yield all([...alertShowSagas]);
//   yield all([...safetyTipSagas]);
//   yield all([...thirdPartySaga]);
//   yield all([...userSagas]);
// }
