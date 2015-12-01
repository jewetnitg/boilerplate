/**
 * @author rik
 */
import session from '../../lib/session';

/**
 * @name UserModel
 * @global
 * @type {Model}
 */
const UserModel = {
  connection: 'local-xhr',
  requests: {
    login: {
      method: 'get',
      route: '/user/login',
      resolve(user) {
        return session.user = user;
      }
    }
  }
};

export default UserModel;