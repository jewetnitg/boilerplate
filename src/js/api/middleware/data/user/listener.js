function listenToUser(req, res) {
  if (res.user) {
    function eventHandler(user) {
      res.sync({
        user
      });
    }

    res.destruct = function () {
      res.user.off('change', eventHandler);
    };

    res.user.on('change', eventHandler);
  }
}

export default listenToUser;