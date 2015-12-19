/**
 * @author rik
 */
import session from 'frntnd-framework/src/constants/session';

/**
 * @name UserModel
 * @global
 * @type {Model}
 */
const UserModel = {
  connection: 'local-sails',
  requests: {
    cachedFetch: {
      method: 'get',
      route: '/user/:id',
      cache: 10000
    },
    login: {
      method: 'get',
      route: '/user/login',
      security: ['user.isLoggedIn'],
      resolve(user) {
        return session.user = user;
      }
    },
    uploadProfilePicture: {
      method: 'post',
      route: '/user/picture/:id',
      upload: true
    }
  }
};

export default UserModel;