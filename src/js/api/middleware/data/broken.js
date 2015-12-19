/**
 * @author rik
 */
function brokenMiddleware(req, res) {
  return Promise.resolve();
}

export default brokenMiddleware;