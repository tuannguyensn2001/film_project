const interceptor = (handler) => {
  return async (req, res, next) => {
    try {
      const result = await handler(req, res, next);
      return res.json(result);
    } catch (e) {
      const status = e?.statusCode ?? 500;
      return res.status(status).json({
        message: e.message,
      });
    }
  };
};

module.exports = interceptor;
