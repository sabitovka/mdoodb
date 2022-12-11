require('dotenv').config();

const env = process.env.NODE_ENV || 'dev';

const dev = {
  app: {
    port: parseInt(process.env.DEV_APP_PORT) || 8080,
  },
  db: {
    host: process.env.DEV_DB_HOST || 'localhost',
    port: parseInt(process.env.DEV_DB_PORT) || 27017,
    name: process.env.DEV_DB_NAME || 'db',
    user: process.env.MONGODB_ADMINUSERNAME || 'admin',
    password: process.env.MONGODB_ADMINPASSWORD || 'admin',
    url: process.env.MONGODB_URL || `mongodb://${this.user}:${this.password}@${this.host}:${this.port}/${this.name}`,
  },
};

const config = { dev };

module.exports = config[env];
