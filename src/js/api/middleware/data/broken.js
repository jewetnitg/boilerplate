/**
 * @author rik
 */
function brokenMiddleware(req, res) {
  diz.function.does.not.exist.and.will.throw.a.TypeError();
}

export default brokenMiddleware;