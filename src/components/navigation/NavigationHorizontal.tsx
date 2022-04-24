import * as React from 'react';
import { useAtom } from 'jotai';
import { LightDarkToggle } from 'react-light-dark-toggle';
import { useMediaQuery } from '@chakra-ui/media-query';
import { isLightAtom } from '@/stores/states';

import { NavigationHorizontalProps } from './NavigationProps';
import { Logo } from './Logo';
import { Links } from './Links';

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
            <LightDarkToggle
              onToggle={() => setLightMode({ state: !isLightMode.state })}
              isLight={isLightMode.state}
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export { NavigationHorizontal };
