/**
 * @author rik
 */
function alwaysDeny() {
  return Promise.reject();
}

export default alwaysDeny;