import ApiInstance from '../../app/api/ApiInstance';
import ApiList from '../../app/api/ApiList';

const TAG = 'LoginRepository';

export function getLogin(params) {
  const paramsPost = {
    email: 'quylm@vn.ids.jp', //params.email
    password: 'Ids@12345', //params.password
    more: '...',
  };
  console.log(TAG + ' paramsPost ' + JSON.stringify(paramsPost));
  return ApiInstance.apiModule.post(ApiList.LOGIN, paramsPost, {});
}
