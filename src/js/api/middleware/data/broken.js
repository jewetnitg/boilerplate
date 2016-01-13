function brokenMiddleware(req, res) {
  read.from.some.object.that.doesnt.exist.and.a.ReferenceError.is.thrown;
}

export default brokenMiddleware;