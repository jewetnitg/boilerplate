/**
 * @author rik
 */
const TestStaticView = {
  view: 'test',
  holder: '.static',
  controller(data) {
    console.log('staticview controller data', JSON.stringify(data), 'current data', this.data);

    return {
      test2: 'staticView',
      test: 'staticView'
    }
  }
};

export default TestStaticView;