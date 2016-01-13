import session from 'frntnd-framework/src/constants/session';

const UserModel = {
  name: 'user',

  server: 'local',
  url: '/user',
  rest: true,

  methods: {
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