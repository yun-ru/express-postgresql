var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'exp-mvc'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/test_db'
  },

  test: {
    root: rootPath,
    app: {
      name: 'exp-mvc'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/test_db'
  },

  production: {
    root: rootPath,
    app: {
      name: 'exp-mvc'
    },
    port: process.env.PORT || 3000,
    db: 'postgres://localhost/test_db'
  }
};

module.exports = config[env];
