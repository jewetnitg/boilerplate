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
  template
};

export default HomeView;