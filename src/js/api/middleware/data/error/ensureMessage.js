/**
 * @author rik
 */
function ensureErrorMessage(req, res) {
  res.error = res.error || req.param('error') || '';
}

export default ensureErrorMessage;