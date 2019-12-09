function handler(req, res) {
  res.status(200).json({
    language: req.headers["accept-language"],
    software: req.headers["user-agent"],
    ipaddress: req.connection.remoteAddress
  });
}

module.exports = handler;
