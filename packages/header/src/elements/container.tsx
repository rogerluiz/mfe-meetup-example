import { ComponentPropsWithoutRef } from 'react';

import { styled } from '../stitches.config';

const StyledContainer = styled('div', {
  // Reset
  appearance: 'none',
  border: 'none',
  boxSizing: 'border-box',
  font: 'inherit',
  outline: 'none',
  padding: 0,
  flexShrink: 0,

  // Custom
  width: '100%',
  marginX: 'auto',
  paddingX: '$3',

  variants: {
    fluid: {
      false: {
        '@sm': {
          maxWidth: '540px',
        },
        '@md': {
          maxWidth: '768px',
        },
        '@lg': {
          maxWidth: '1024px',
        },
        '@xl': {
          maxWidth: '1280px',
        },
      },
    },
    marginTop: {
      1: {
        marginTop: '$1',
      },
      2: {
        marginTop: '$2',
      },
      3: {
        marginTop: '$3',
      },
      4: {
        marginTop: '$4',
      },
      5: {
        marginTop: '$5',
      },
      6: {
        marginTop: '$6',
      },
      7: {
        marginTop: '$7',
      },
      8: {
        marginTop: '$8',
      },
      9: {
        marginTop: '$9',
      },
    },
    marginBottom: {
      1: {
        marginBottom: '$1',
      },
      2: {
        marginBottom: '$2',
      },
      3: {
        marginBottom: '$3',
      },
      4: {
        marginBottom: '$4',
      },
      5: {
        marginBottom: '$5',
      },
      6: {
        marginBottom: '$6',
      },
      7: {
        marginBottom: '$7',
      },
      8: {
        marginBottom: '$8',
      },
      9: {
        marginBottom: '$9',
      },
    },
  },
  defaultVariants: {
    fluid: false,
  },
});

type ContainerVariants = ComponentPropsWithoutRef<typeof StyledContainer>;

export interface ContainerProps extends ContainerVariants {
  /**
   * O Conteudo do botão
   */
  children: React.ReactNode;
  fluid?: boolean;
  marginTop?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  marginBottom?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
}

export function Container({
  children,
  marginTop,
  marginBottom,
  fluid,
  ...rest
}: ContainerProps) {
  return (
    <StyledContainer
      fluid={fluid}
      marginTop={marginTop}
      marginBottom={marginBottom}
      {...rest}
    >
      {children}
    </StyledContainer>
  );
}
