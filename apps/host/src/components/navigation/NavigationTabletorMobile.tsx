import * as React from 'react';
import { Logo } from './Logo';
import { Links } from './Links';
import { NavigationVerticalProps } from './NavigationProps';

const NavigationTabletorMobile = (props: NavigationVerticalProps) => {
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
        items={props.topNavItems}
        isVertical={!(props.sideBarItems && props.sideBarItems.length > 0)}
        verticalStyle={props.styles?.horizontalBar}
        style={props.styles?.links}
      />
      {props.sideBarItems && (
        <Links
          items={props.sideBarItems}
          isVertical
          verticalStyle={props.styles?.isVertical}
          style={props.styles?.links}
        />
      )}
    </nav>
  );
};

export { NavigationTabletorMobile };
