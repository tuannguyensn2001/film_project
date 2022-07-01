const bcrypt = require('bcrypt');

exports.makePassword = function (text) {
    const rounds = 10;
    return bcrypt.hash(text, rounds);
};

exports.comparePassword = (text, hashText) => {
    return bcrypt.compare(text, hashText);
};
