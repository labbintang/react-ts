import * as React from 'react';
import { Logo } from './Logo';
import { Links } from './Links';
import { NavigationVerticalProps } from './NavigationProps';

const NavigationVertical = (props: NavigationVerticalProps) => {
  const closeStyle: React.CSSProperties = {
    position: 'absolute',
    right: 4,
    top: 4,
    width: '32px',
  };

  return (
    <nav className={props.styles?.verticalBar}>
      <img
        src={props.closeImage}
        style={closeStyle}
        className={props.styles?.burger}
        onClick={props.setOpen}
      />
      <Logo style={props.logoStyle} />
      <Links
        items={props.items}
        isVertical
        verticalStyle={props.styles?.isVertical}
        style={props.styles?.links}
      />
    </nav>
  );
};

export { NavigationVertical };
