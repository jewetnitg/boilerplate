/**
 * @author rik
 */
function listenToUser(req, res) {
  if (res.user) {
    app.models.user.listenTo(res.user, 'change', (user) => {
      res.sync({
        user: user
      });
    });
  }
}

export default listenToUser;