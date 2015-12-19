// @todo refactor to the routes config so all routes are defined in one place
const TestVideoRoute = {
  route: '/testvideo',
  view: 'TestVideoView',
  security: [
  ],
  data: [
    'user.ensure',
    'user.listener'
  ],
  unauthorized: ''
};

export default TestVideoRoute;