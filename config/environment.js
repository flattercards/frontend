/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'frontend',
    podModulePrefix: 'frontend/pods',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {}
    },
    APP: {},
    API: {},
    i18n: {
      defaultLocale: 'nl'
    }
  };

  if (environment === 'development') {
    ENV.API.host = 'http://localhost:4000';
  }

  if (environment === 'test') {
    ENV.API.host = 'http://localhost:4000';

    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.API.host = 'https://api.flatter.cards';
  }

  return ENV;
};
