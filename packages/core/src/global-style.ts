import { globalCss } from './stitches.config';

const globalStyles = globalCss({
  '*': {
    padding: 0,
    margin: 0,
    boxSizing: 'border-box',
  },

  '*:after': {
    boxSizing: 'inherit',
  },
  '*:before': {
    boxSizing: 'inherit',
  },

  body: {
    width: '100%',
    minHeight: '100%',
    fontFamily: 'Roboto',
    fontSize: '$2',
    overflowX: 'hidden',
  },

  '#root': {
    display: 'grid',
    gridTemplateColumns: '1fr',
    minHeight: '100vh',
    gridTemplateRows: 'auto 1fr auto',
    gridTemplateAreas: `
      'header'
      'main'
      'footer'
    `,

    '> header': {
      gridArea: 'header',
    },
    '> main': {
      gridArea: 'main',
      marginBottom: '$6',
    },
    '> footer': {
      gridArea: 'footer',
    },
  },

  html: {
    textRendering: 'optimizeLegibility',
    '-webkit-text-size-adjust': ' 100%',
    '-ms-text-size-adjust': '100%',
    '-ms-overflow-style': 'scrollbar',
    '-webkit-tap-highlight-color': 'transparent',
    '-webkit-font-smoothing': 'antialiased',
    height: '100%',
  },
});

export default globalStyles;
