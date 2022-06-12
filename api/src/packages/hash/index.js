const bcrypt = require('bcrypt');

exports.makePassword = function (text) {
  const rounds = 10;
  return bcrypt.hash(text, rounds);
};
