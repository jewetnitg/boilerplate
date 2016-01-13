import instance from '../../../../state';

function ensureUser(req, res) {
  return instance.server.user.findAll()
    .then((users) => {
      res.user = users[0];
    });
}

export default ensureUser;