import { createStitches } from '@stitches/react';
import type { ScaleValue, PropertyValue } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#0C0909',
      dark: '#343a40',
      light: '#F7F7F7',
      warning: '#C10101',
      helper: '#FF5700',
      sucess: '#00C864',
      cancel: '#e65181',
      danger: '#E32525',
      grayLight: '#F4F5F7',
      grayMedium: '#E4E8ED',
      grayDark: '#ADBDD0',
      primary: '#0057b7',
      primaryLight: '#8dc8e8',
      primaryMedium: '#009cde',
      primaryDark: '#003865',
      secondary: '#78d64b',
      secondaryLight: '#bce194',
      secondaryMedium: '#74aa50',
      secondaryDark: '#00573f',
    },
    fonts: {
      default: '"Roboto", sans-serif',
    },
    fontWeights: {
      thin: 100,
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '18px',
      5: '20px',
      6: '22px',
      7: '26px',
      8: '35px',
      9: '59px',
    },
    space: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
    },
    sizes: {
      1: '5px',
      2: '10px',
      3: '15px',
      4: '20px',
      5: '25px',
      6: '35px',
      7: '45px',
      8: '65px',
      9: '80px',
      full: '100%',
      vw: '100vw',
      vh: '100vh',
    },
    radii: {
      1: '4px',
      2: '6px',
      3: '8px',
      4: '12px',
      5: '16px',
      round: '50%',
      pill: '9999px',
    },
    borderWidths: {
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      6: '6px',
      7: '7px',
      8: '8px',
      9: '9px',
      10: '10px',
    },
    borderStyles: {
      solid: 'solid',
      dashed: 'dashed',
      dotted: 'dotted',
      double: 'double',
      groove: 'groove',
      hidden: 'hidden',
      inset: 'inset',
      none: 'none',
      outset: 'outset',
      ridge: 'ridge',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      5: '500',
      6: '600',
      7: '700',
      8: '800',
      9: '900',
      max: '999',
    },
  },
  media: {
    xs: 'screen and (min-width: 0)',
    sm: 'screen and (min-width: 580px)',
    md: 'screen and (min-width: 768px)',
    lg: 'screen and (min-width: 1024px)',
    xl: 'screen and (min-width: 1280px)',
    xxl: 'screen and (min-width: 1536px)',
    // range medias:
    rsm: `screen and (640px <= width < 768px)`,
    rmd: `screen and (768px <= width < 1024px)`,
    rlg: `screen and (1024px <= width < 1280px)`,
    rxl: `screen and (1280px <= width < 1536px)`,
    rxxl: `screen and (1536px <= width < 1930px)`,
    rxxxl: `screen and (1930px <= width)`,

    motion: '(prefers-reduced-motion)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
  utils: {
    paddingX: (value: PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    marginX: (value: PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    size: (value: PropertyValue<'width'>) => ({
      width: value,
      height: value,
    }),
    gridSize: (value: ScaleValue<'sizes'>) => ({
      flexBasis: value,
      maxWidth: value,
    }),
  },
});
