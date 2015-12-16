/**
 * @author rik
 */
function ensureUser(req, res) {
  return app.models.user.fetch(1)
    .then((user) => {
      app.models.user.listenTo(user, 'change', (user) => {
        res.sync({
          user: user
        });
      });

      return {
        user
      };
    });
}

export default ensureUser;