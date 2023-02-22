let Server = require('./Server');
const BASE_API = Server.API_SERVER;
const DOMAIN_API = BASE_API + '/api/mobile/';
const DOMAIN_API2 = BASE_API + '/api/v2/mobile/';
const PAY_API = Server.PAY_SERVER;
// const DOMAIN_API = '';

export const LOGIN_API = DOMAIN_API + 'auth/signin';

export default {
  LOGIN: DOMAIN_API + 'auth/signin',
  LOGOUT: DOMAIN_API + 'auth/logout',
};
