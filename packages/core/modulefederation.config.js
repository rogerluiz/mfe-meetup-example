/* eslint-disable @typescript-eslint/no-var-requires */
const deps = require('./package.json').dependencies;

// eslint-disable-next-line no-undef
module.exports = {
  name: 'core',
   remotes: {
     footer: 'footer@http://localhost:3002/portal/app/ec-footer/remoteEntry.js',
     header: 'header@http://localhost:3004/portal/app/ec-header/remoteEntry.js',
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
    'styled-components': {
      singleton: true,
      requiredVersion: deps['styled-components'],
    },
  },
};
