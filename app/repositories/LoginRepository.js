import ApiInstance from '../../app/api/ApiInstance';
import ApiList from '../../app/api/ApiList';

const TAG = 'LoginRepository';

export function getLogin(params) {
  // const paramsPost = {
  //   email: 'quylm@vn.ids.jp', //params.email
  //   password: 'Ids@12345', //params.password
  //   more: '...',
  // };
  const paramsPost = {
    username: params.username,
    password: params.password,
    from: 'store',
    registrationId:
      'dqgQXFMZQRyhpXtOg-JJ86:APA91bEyW8ssAXMpERT2SxC-HiTec_B3RU28_6FOUXej2KjkCAB0TThEd-XEasqRSD7noKriBvRxgaZarsgvE0U-aNoOBCuC-tL4atal-fKUYZluXevrCzWhR4CeBP_ZgJseJQtc6g04',
    uuid: '5b8e190b-4169-5d6f-8995-fbf45471de4e',
  };
  console.log(TAG + ' paramsPost ' + JSON.stringify(paramsPost));
  return ApiInstance.apiModule.post(ApiList.LOGIN, paramsPost, {});
}
