/**
 * @author rik
 */

/**
 * Config for the {@link Router}
 * @namespace config/router
 * @property defaultRoute {String}
 * @property pushState {Boolean}
 */
const routerConfig = {
  defaultRoute: '/home',
  notFoundRoute: '/404',
  unauthorizedRoute: '/403',
  errorRoute: '/500',
  pushState: true
};

export default routerConfig;