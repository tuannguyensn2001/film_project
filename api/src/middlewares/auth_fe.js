const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
    const bearerToken = req?.headers?.authorization;

    if (!Boolean(bearerToken)) {
        return res.status(403).json({
            message: 'forbidden',
        });
    }

    const split = bearerToken.split(' ');

    if (split.length !== 2) {
        return res.status(403).json({
            message: 'forbidden',
        });
    }

    if (split[0] !== 'Bearer') {
        return res.status(403).json({
            message: 'forbidden',
        });
    }

    const token = split[1];

    try {
    } catch (e) {}

    next();
};
