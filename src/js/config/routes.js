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
    // part of the Controller spec
    model: 'user',
    controller: 'ModelController.list'
  },

  '/user/:id': {
    // part of the View spec
    view: 'test',
    // part of the Controller spec
    model: 'user',
    controller: 'ModelController.details'
  },

  '/user56': {
    view: 'test2',
    controller: 'UserController.getUserWithId56'
  }

};

export default routes;
