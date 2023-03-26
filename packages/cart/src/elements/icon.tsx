import React from 'react';
import { styled } from '../stitches.config';

export type IconPrefix = 'fas' | 'far' | 'fal' | 'fat' | 'fad' | 'fab' | 'fak';
type IconType = {
  prefix: IconPrefix;
  iconName: string;
};
type Size =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | '1x'
  | '2x'
  | '3x'
  | '4x'
  | '5x'
  | '6x'
  | '7x'
  | '8x'
  | '9x'
  | '10x';

type Colors =
  | 'inherit'
  | 'white'
  | 'black'
  | 'dark'
  | 'light'
  | 'warning'
  | 'helper'
  | 'sucess'
  | 'cancel'
  | 'danger'
  | 'grayLight'
  | 'grayMedium'
  | 'grayDark'
  | 'primary'
  | 'primaryLight'
  | 'primaryMedium'
  | 'primaryDark'
  | 'secondary'
  | 'secondaryLight'
  | 'secondaryMedium'
  | 'secondaryDark';

interface IconProps extends React.ComponentPropsWithoutRef<'i'> {
  size?: Size;
  color?: Colors;
  fixedWidth?: boolean;
  inverse?: boolean;
  spin?: boolean;
  border?: boolean;
  pulse?: boolean;
  pull?: 'right' | 'left';
  rotation?: 0 | 90 | 180 | 270;
  flip?: 'horizontal' | 'vertical' | 'both';
  icon?: string | string[] | object;
  className?: string;
}

const normalizeIcon = (icon: any) => {
  let classes: IconType = { prefix: 'fas', iconName: '' };

  if (typeof icon === 'object' && icon.prefix && icon.iconName) {
    classes = icon;
  }

  if (Array.isArray(icon) && icon.length === 2) {
    classes = { prefix: icon[0], iconName: icon[1] };
  }

  if (typeof icon === 'string') {
    classes = { prefix: 'fal', iconName: icon };
  }

  return `${classes.prefix} fa-${classes.iconName}`;
};

const normalizeClassName = (className: string) =>
  className ? className.split(' ') : [];

const classList = (properties: any) => {
  const classes = {
    'fa-spin': properties.spin,
    'fa-inverse': properties.inverse,
    'fa-fw': properties.fixedWidth,
    'fa-border': properties.border,
    'fa-pulse': properties.pulse,
    [`fa-flip-${properties.flip}`]: properties.flip,
    [`fa-rotate-${properties.rotation}`]: properties.rotation,
    [`fa-pull-${properties.pull}`]: properties.pull,
    [`fa-${properties.size}`]: properties.size,
  };

  return Object.keys(classes)
    .map((key) => (classes[key] ? key : null))
    .filter((key) => key);
};

const IconTag = styled('i', {
  verticalAlign: 'baseline',
});

export function Icon({
  size = 'md',
  color = 'inherit',
  fixedWidth = false,
  inverse = false,
  spin = false,
  border = false,
  pulse = false,
  pull,
  rotation,
  flip,
  icon,
  className = '',
  ...rest
}: IconProps) {
  const mergeProps = {
    ...rest,
    size,
    fixedWidth,
    inverse,
    spin,
    border,
    pulse,
    pull,
    rotation,
    flip,
  };

  return (
    <IconTag
      className={[
        normalizeIcon(icon),
        ...classList(mergeProps),
        ...normalizeClassName(className),
      ].join(' ')}
      css={{
        color: `$${color}`,
      }}
      aria-hidden="true"
    />
  );
}
