/**
 * Config for communicator {@link Connection}s
 * @namespace config/connections
 */
const connections = {
  'local-xhr': {
    url: 'http://192.168.0.7:1337',
    adapter: 'XHR'
  },
  'local-sails': {
    url: 'http://192.168.0.7:1337',
    adapter: 'SAILS_IO',
    cache: 2000
  }
};

export default connections;