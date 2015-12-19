import template from '../../../templates/handlebars/handlebars-test.hbs';

const HandlebarsTestView = {
  adapter: 'handlebars',
  template,
  events: {
    "click": "handleClick"
  },
  handleClick(e) {
    alert('click');
  }
};

export default HandlebarsTestView;