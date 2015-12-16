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
    login: {
      method: 'get',
      route: '/user/login',
      security: ['user.isLoggedIn'],
      resolve(user) {
        return session.user = user;
      }
    }
  }
};

export default UserModel;