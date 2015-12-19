/**
 * @author rik
 */
function ensureUser(req, res) {
  return app.models.user.fetch()
    .then((users) => {
      res.user = users[0];
    });
}

export default ensureUser;