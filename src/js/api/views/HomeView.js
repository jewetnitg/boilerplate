/**
 * @author rik
 */
import template from '../../../templates/react/helloworld.jsx';

/**
 * HomeView is an example view
 * @class HomeView
 * @extends View
 */
const HomeView = {
  adapter: 'react',
  //data: ['user.override'],
  //security: ['alwaysDeny'],
  template,
  subViews: {
    menuBar: {
      view: 'MenuBarView',
      holder: '[data-reactid=".0"]',
      data: ['user.ensure', 'user.listener']
    }
  }
};

export default HomeView;