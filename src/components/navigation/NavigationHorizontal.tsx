import * as React from 'react';
import { useAtom } from 'jotai';
import { useMediaQuery } from '@chakra-ui/media-query';
import { isLightAtom } from '@/stores/states';

import { NavigationHorizontalProps } from './NavigationProps';
import light from '@assets/images/navigation/default/light.svg';
import dark from '@assets/images/navigation/default/dark.svg';
import { Logo, Links } from '.';

const NavigationHorizontal = (props: NavigationHorizontalProps) => {
  const [isTabletOrMobile] = useMediaQuery('(max-width: 1224px)');
  const [isLightMode, setLightMode] = useAtom(isLightAtom);

  const navigationItems: React.CSSProperties = {
    display: 'flex',
    gap: '2rem',
  };

  return (
    <nav className={props.styles?.horizontalBar}>
      <div className={props.styles?.content}>
        <Logo style={props.logoStyle} />
        {isTabletOrMobile ? (
          <img
            src={props.burgerImage}
            className={props.styles?.burger}
            onClick={props.setOpen}
          />
        ) : (
          <div style={navigationItems}>
            <Links items={props.items} style={props.styles?.links} />
            <img
              src={isLightMode.state ? dark : light}
              alt="Theme Switch"
              onClick={() => setLightMode({ state: !isLightMode.state })}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export { NavigationHorizontal };
