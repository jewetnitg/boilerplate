/**
 * @author rik
 */

const UserController = {

  collectSomeSpecificData(req) {
    return new Promise(resolve => {
      setTimeout(() => {
        req.sync({
          model: {
            name: 'synced'
          }
        });
      }, 2000);

      resolve({
        model: {
          name: 'bob'
        }
      });
    });
  }

};

export default UserController;