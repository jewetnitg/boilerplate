/**
 * @author rik
 */
function ensureUser(req, res) {
  req.session.user = res.user = res.user || req.session.user || {
      firstName: 'En',
      lastName: 'Sured'
    };
}

export default ensureUser;