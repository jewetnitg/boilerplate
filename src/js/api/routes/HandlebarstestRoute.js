// @todo refactor to the routes config so all routes are defined in one place
const HandlebarstestRoute = {
  route: '/handlebars',
  view: 'HandlebarsTestView',
  security: [
  ],
  data: [
    'user.ensure',
    'user.listener'
  ],
  unauthorized: ''
};

export default HandlebarstestRoute;