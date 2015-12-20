/**
 * @author rik
 */
function overrideUser(req, res) {
  res.user = {
    firstName: 'overridden'
  };
}

export default overrideUser;