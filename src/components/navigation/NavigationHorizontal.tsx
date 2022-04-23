import * as React from 'react';
import { NavigationContentProps } from './NavigationContentProps';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Links } from './Links';

const NavigationHorizontal = (props: NavigationContentProps) => {
  const [isTabletOrMobile] = useMediaQuery('(max-width: 1224px)');

  return (
    <nav className={props.styles.horizontalBar}>
      <div className={props.styles.content}>
        <Logo />
        {isTabletOrMobile ? (
          <img
            src={props.burger}
            className={props.styles.burger}
            onClick={props.setOpen}
          />
        ) : (
          <Links items={props.nav} style={props.styles.links} />
        )}
      </div>
    </nav>
  );
};

export { NavigationHorizontal };
