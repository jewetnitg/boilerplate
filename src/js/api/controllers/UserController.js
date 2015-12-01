/**
 * @author rik
 */

const UserController = {

  someMethod(req) {
    return Promise.resolve(req.param('id'));
  },

  someOtherMethod(req) {
    return Promise.resolve('staticData');
  },

  anotherMethod(req) {
    return Promise.resolve({
      model: {
        age: 33
      }
    });
  },

  yetAnotherMethod(req) {
    return Promise.resolve({
      model: {
        age: 45
      }
    });
  },

  testMethod(req) {
    const id = req.param('id');

    return app.models.user.server.findById({id})
      .then(model => {
        app.models.user.listenToModel(model, (_model) => {
          req.sync({
            model: _model
          });
        });

        return {
          model
        };
      });
  },

  getUserWithId56(req) {
    return app.models.user.server.findById(56)
      .then(model => {
        const interval = setInterval(() => {
          req.sync({
            model: model
          });
        }, 1000);

        // @override
        req.destruct = () => {
          clearInterval(interval);
        };

        app.models.user.listenTo(model, (_model) => {
          req.sync({
            model: _model
          });
        });

        return {
          model
        };
      });
  }
};

export default UserController;