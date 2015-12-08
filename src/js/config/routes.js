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
    staticViews: ['MenuBarView']
  }

};

export default routes;
