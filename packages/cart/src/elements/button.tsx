import React from 'react';

import { styled } from '../stitches.config';

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  disabled?: boolean;
  block?: boolean;
  size?: 'sm' | 'md' | 'lg';
  type?: 'button' | 'reset' | 'submit';
  color?: 'primary' | 'warning' | 'secondary' | 'success' | 'helper';
  variant?: 'default' | 'outline' | 'text';
  children?: React.ReactNode;
}

export const DefaultButton = styled('button', {
  borderRadius: '$1',
  transition: 'background 300ms ease-in-out, color 300ms ease-in-out',
  outline: 'none',
  cursor: 'pointer',
  boxSizing: 'border-box',
  userSelect: 'none',
  textTransform: 'none',
  fontWeight: '$regular',

  '&:disabled': {
    color: '$grayMedium',
    background: '$grayLight',
    pointerEvents: 'none',
  },

  variants: {
    size: {
      sm: {
        height: 30,
        paddingX: '$2',
        fontSize: '$2',
      },
      md: {
        height: 40,
        paddingX: '$3',
        fontSize: '$3',
      },
      lg: {
        height: 50,
        paddingX: '$4',
        fontSize: '$4',
      },
    },
    block: {
      true: {
        display: 'block',
        width: '100%',
      },
    },
    color: {
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      helper: {},
    },
    variant: {
      default: {},
      outline: {},
      text: {},
    },
  },

  compoundVariants: [
    // DEFAULT
    {
      variant: 'default',
      color: 'primary',
      css: {
        border: 'none',
        backgroundColor: '$primary',
        color: '$white',

        '&:focus, &:hover': {
          backgroundColor: '$primaryDark',
          color: '$white',
        },
      },
    },
    {
      variant: 'default',
      color: 'secondary',
      css: {
        border: 'none',
        backgroundColor: '$secondary',
        color: '$secondaryDark',

        '&:focus, &:hover': {
          backgroundColor: '$secondaryMedium',
          color: '$white',
        },
      },
    },
    {
      variant: 'default',
      color: 'helper',
      css: {
        border: 'none',
        backgroundColor: '$helper',
        color: '$white',

        '&:focus, &:hover': {
          backgroundColor: '$white',
          color: '$helper',
        },
      },
    },
    {
      variant: 'default',
      color: 'warning',
      css: {
        border: 'none',
        backgroundColor: '$warning',
        color: '$white',

        '&:focus, &:hover': {
          backgroundColor: '$white',
          color: '$warning',
        },
      },
    },
    {
      variant: 'default',
      color: 'success',
      css: {
        border: 'none',
        backgroundColor: '$success',
        color: '$dark',

        '&:focus, &:hover': {
          backgroundColor: '$dark',
          color: '$success',
        },
      },
    },

    // OUTLINE
    {
      variant: 'outline',
      color: 'primary',
      css: {
        backgroundColor: 'transparent',
        color: '$primary',
        borderWidth: 1,
        borderColor: '$primary',
        borderStyle: '$solid',

        '&:focus, &:hover': {
          backgroundColor: '$primary',
          color: '$white',
        },
      },
    },
    {
      variant: 'outline',
      color: 'secondary',
      css: {
        backgroundColor: 'transparent',
        color: '$secondary',
        borderWidth: 1,
        borderColor: '$secondary',
        borderStyle: '$solid',

        '&:focus, &:hover': {
          backgroundColor: '$secondary',
          color: '$white',
        },
      },
    },
    {
      variant: 'outline',
      color: 'success',
      css: {
        backgroundColor: 'transparent',
        color: '$success',
        borderWidth: 1,
        borderColor: '$success',
        borderStyle: '$solid',

        '&:focus, &:hover': {
          backgroundColor: '$success',
          color: '$white',
        },
      },
    },
    {
      variant: 'outline',
      color: 'helper',
      css: {
        backgroundColor: 'transparent',
        color: '$helper',
        borderWidth: 1,
        borderColor: '$helper',
        borderStyle: '$solid',

        '&:focus, &:hover': {
          backgroundColor: '$helper',
          color: '$white',
        },
      },
    },
    {
      variant: 'outline',
      color: 'warning',
      css: {
        backgroundColor: 'transparent',
        color: '$warning',
        borderWidth: 1,
        borderColor: '$warning',
        borderStyle: '$solid',

        '&:focus, &:hover': {
          backgroundColor: '$warning',
          color: '$white',
        },
      },
    },
  ],

  defaultVariants: {
    size: 'md',
    variant: 'default',
    color: 'primary',
  },
});

export const Button = React.forwardRef<React.ElementRef<'button'>, ButtonProps>(
  function (
    {
      size = 'md',
      type = 'button',
      disabled = false,
      variant = 'default',
      color = 'primary',
      block = false,
      children,
      ...rest
    },
    ref,
  ) {
    return (
      <DefaultButton
        ref={ref}
        size={size}
        type={type}
        disabled={disabled}
        color={color}
        block={block}
        variant={variant}
        {...rest}
      >
        {children}
      </DefaultButton>
    );
  },
);
