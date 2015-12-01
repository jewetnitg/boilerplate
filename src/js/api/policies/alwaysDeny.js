/**
 * @author rik
 */
function alwaysDeny(req) {
  return Promise.reject();
}

export default alwaysDeny;