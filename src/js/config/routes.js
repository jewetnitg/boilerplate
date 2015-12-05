/**
 * @author rik
 */

const routes = {

  '/users': {
    // frontend-router spec
    policies: ['alwaysDeny'],
    unauthorized: '/user/1',
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

  '/user1': {
    view: 'test2',
    controller: 'UserController.getUserWithId1'
  }

};

export default routes;
