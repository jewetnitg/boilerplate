// @todo refactor to the routes config so all routes are defined in one place
const randomroute = {
  route: '/random',
  view: 'RandomView',
  security: [
  ],
  data: [
    'user.ensure'
  ],
  unauthorized: ''
};

export default randomroute;