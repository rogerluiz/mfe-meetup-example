// eslint-disable-next-line @typescript-eslint/no-var-requires
const deps = require('./package.json').dependencies;

module.exports = {
  name: 'header',
  exposes: {
    './Header': './src/components/header',
  },
  remotes: {
    cart: 'cart@http://localhost:4003/remoteEntry.js',
  },
  filename: 'remoteEntry.js',
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
    'styled-components': {
      singleton: true,
      requiredVersion: deps['styled-components'],
    },
  },
};
