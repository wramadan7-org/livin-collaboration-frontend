import qs from 'querystring';
import http from '../../helpers/http';

export default {
  login: (data) => ({
    type: 'AUTH_LOGIN_USER',
    payload: http().post('/auth/login', qs.stringify(data)),
  }),
};
