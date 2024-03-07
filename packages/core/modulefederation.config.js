/* eslint-disable @typescript-eslint/no-var-requires */
const deps = require('./package.json').dependencies;

// eslint-disable-next-line no-undef
module.exports = {
  name: 'core',
  remotes: {
    footer: 'footer@http://localhost:4002/remoteEntry.js',
    header: 'header@http://localhost:4003/remoteEntry.js',
    cart: 'cart@http://localhost:4004/remoteEntry.js',
  },
  shared: {
    ...deps,
    react: {
      singleton: true,
      requiredVersion: deps.react,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: deps['react-dom'],
    },
  },
};
