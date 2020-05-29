const Ajv = require('ajv');
const metaSchema = require('ajv/lib/refs/json-schema-draft-07.json');

// Needed to continue to use draft-04 schemas
// @link https://github.com/epoberezkin/ajv/releases/tag/5.0.0
const Ajv7 = (options = {}, ...args) => {
  const ajv = new Ajv(
    {
      ...options,
      meta: false, // optional, to prevent adding draft-06 meta-schema
      extendRefs: true, // optional, current default is to 'fail', spec behaviour is to 'ignore'
      unknownFormats: 'ignore', // optional, current default is true (fail)
    },
    ...args
  );

  ajv.addMetaSchema(metaSchema);

  return ajv;
};

module.exports = Ajv7;
