/**
 * @author rik
 */
function isLoggedIn(req) {
  return req.session.user ? Promise.resolve() : Promise.reject("Not logged in");
}

export default isLoggedIn;