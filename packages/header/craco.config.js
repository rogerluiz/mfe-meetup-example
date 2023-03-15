// eslint-disable-next-line @typescript-eslint/no-var-requires
const cracoModuleFederation = require('craco-module-federation');

module.exports = {
  plugins: [
    {
      plugin: cracoModuleFederation,
    },
  ],
};
