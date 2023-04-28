// eslint-disable-next-line @typescript-eslint/no-var-requires
const deps = require('./package.json').dependencies;

module.exports = {
  name: 'cart',
  exposes: {
    './Card': './src/components/card',
    './CardList': './src/components/card-list',
    './CardGrid': './src/components/card-grid',
    './useStore': './src/store',
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
