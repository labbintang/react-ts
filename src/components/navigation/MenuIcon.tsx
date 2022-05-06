import * as React from 'react';
import { iconFinder } from '@/libs';
import { menuIconProps } from './NavigationProps';
import defaultIcon from '@assets/images/navigation/default/default-icon.svg';

const collapsedIconStyle: React.CSSProperties = {
  width: '1.4rem',
};

const MenuIcon = (props: menuIconProps) => {
  if (props.noIcon) return null;
  else if (props.icon)
    return (
      <img
        alt={`${props.name} icon`}
        src={iconFinder(props.icon)}
        style={collapsedIconStyle}
      />
    );
  else
    return (
      <img
        alt={`${props.name} icon`}
        src={defaultIcon}
        style={collapsedIconStyle}
      />
    );
};

export { MenuIcon };
