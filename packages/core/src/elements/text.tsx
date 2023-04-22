import { ReactNode, ComponentPropsWithoutRef } from 'react';
import { styled } from '../stitches.config';

type TextVariant =
  | 'thin'
  | 'light'
  | 'regular'
  | 'medium'
  | 'semibold'
  | 'bold';

interface TextProps extends ComponentPropsWithoutRef<'p'> {
  /**
   * O Conteudo do component
   */
  children: ReactNode;
  /**
   * Cor do texto
   * @default 'gray500'
   */
  color?: string;
  /**
   * Tamanho do texto
   * @default 14
   */
  size?: number;
  /**
   * Espaçamento entre linhas do texto
   * @default 18
   */
  lineHeight?: number;
  /**
   * Peso da fonte
   * @default 'regular'
   */
  variant?: TextVariant;
  /**
   * Caso `true` deixa o texto em italico
   * @default false
   */
  italic?: boolean;
  /**
   * Caso `true` coloca o texto em caixa alta
   * @default false
   */
  uppercase?: boolean;
  /**
   * Alinha o texto
   * @default 'auto'
   */
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify';
  as?: React.ElementType | keyof JSX.IntrinsicElements;
}

const Paragraph = styled('p', {
  /* fontSize: ${({ size }) => size}px; */
  margin: 0,
  variants: {
    variant: {
      thin: {
        fontWeight: '$thin',
      },
      light: {
        fontWeight: '$light',
      },
      regular: {
        fontWeight: '$regular',
      },
      medium: {
        fontWeight: '$medium',
      },
      semibold: {
        fontWeight: '$semibold',
      },
      bold: {
        fontWeight: '$bold',
      },
    },
    italic: {
      true: {
        fontStyle: 'italic',
      },
    },
    uppercase: {
      true: {
        textTransform: 'uppercase',
      },
    },
    textAlign: {
      auto: {
        textAlign: 'auto',
      },
      left: {
        textAlign: 'left',
      },
      right: {
        textAlign: 'right',
      },
      center: {
        textAlign: 'center',
      },
      justify: {
        textAlign: 'justify',
      },
    },
  },

  /* ${({ lineHeight }) => lineHeight && addLineHeight(lineHeight)}; */
});

export function Text({
  as,
  color = 'dark',
  size = 14,
  lineHeight = 18,
  variant = 'regular',
  italic,
  uppercase,
  textAlign = 'auto',
  children,
  ...rest
}: TextProps) {
  return (
    <Paragraph
      as={as || 'p'}
      size={size}
      css={{
        color: `$${color}`,
        fontSize: size,
        lineHeigh: lineHeight,
      }}
      variant={variant}
      italic={italic}
      uppercase={uppercase}
      textAlign={textAlign}
      {...rest}
    >
      {children}
    </Paragraph>
  );
}
