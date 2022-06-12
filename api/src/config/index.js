exports.PORT = process.env.PORT;

exports.DATABASE = {
  PORT: process.env.DB_PORT,
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  NAME: process.env.DB_NAME
};