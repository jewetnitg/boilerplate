/**
 * @author rik
 */

const routes = {

  '/users': {
    // frontend-router spec
    policies: ['alwaysDeny'],
    unauthorized: '/user/56',
    // part of the View spec
    view: 'test',
    controller: 'ModelController.list',
    // part of the Controller spec
    model: 'user'
  },

  '/user/:id': {
    // part of the View spec
    view: 'test',
    controller: 'ModelController.details',
    // part of the Controller spec
    model: 'user'
  },

  '/user56': {
    view: 'test2',
    controller: 'UserController.getUserWithId56'
  }

};

export default routes;
