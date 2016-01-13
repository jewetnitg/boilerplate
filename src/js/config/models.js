/**
 * Config for {@link Model}
 * @property idAttribute {String|Function} The default attribute a models id is specified on
 * @property connection {String|Function} The default connection models use
 * @property createdOnAttribute {String|Function} The default attribute a models creation date is specified on
 * @property updatedOnAttribute {String|Function} The default attribute a models last modification date is specified on
 * @todo allow properties to be defined as functions, for now they can only be implemented as strings
 */
const modelsConfig = {
  idAttribute: 'id',
  createdOnAttribute: 'createdAt',
  updatedOnAttribute: 'updatedAt',
  connection: 'local-sails'
};

export default modelsConfig;