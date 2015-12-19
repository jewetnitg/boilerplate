/**
 * The routes of the {@link Router}
 *
 * @namespace config/router
 * @example
 * const routes = {
 *  '/login': {
 *     view: 'LoginView'
 *   },
 *
 *  '/users': {
 *     view: 'UserListView',
 *     model: 'user',
 *     controller: 'ModelController.list',
 *     policies: ['isLoggedIn'],
 *     unauthorized: '/login'
 *   },
 *
 *  '/user/:id': {
 *     view: 'UserDetailsView',
 *     model: 'user',
 *     controller: 'ModelController.details'
 *   },
 *
 *  '/user/specialPage': {
 *     view: 'UserSpecialView',
 *     controller: 'UserController.getUserBySomeSpecialCriteria'
 *   }
 * };
 *
 * export default routes;
 */
const routes = {

  '/home': {
    view: 'HomeView',
    data: ['user.ensure', 'user.listener', 'broken'],
    //security: ['alwaysDeny'],
    staticViews: ['menuBar']
  },

  '/500': {
    view: 'ErrorRouteView'
  },

  '/403': {
    view: 'UnauthorizedRouteView'
  },

  '/404': {
    view: 'RouteNotFoundView'
  }

};

export default routes;
