/**
 *
 * Configuration for the {@link Application}
 *
 * @namespace config/app
 *
 * @property defaultLocale {String}
 * @property descriptorUrl {String}
 * @property defaultConnection {String}
 */
const appConfig = {

  defaultLocale: 'en-GB',
  descriptorUrl: 'http://localhost:1337/_describe',
  defaultConnection: 'local-xhr'

};

export default appConfig;