import * as React from 'react';
import { useAtomValue } from 'jotai';
import { useMediaQuery } from '@chakra-ui/media-query';
import { sideBarExtendedAtom } from '@stores/states';
import { Links } from '.';
import { SideBarProps } from './NavigationProps';

import nav from '@config/sideBarMenu.json';
import styles from '@assets/styles/navigations/style.module.css';

const SideBar = (props: SideBarProps) => {
  const isExtended = useAtomValue(sideBarExtendedAtom);
  const [isTabletOrMobile] = useMediaQuery('(max-width: 1224px)');

  if (isTabletOrMobile) return null;
  else
    return (
      <nav
        id="sidebar"
        className={`${styles.sideBar} ${
          isExtended ? styles.sideBarExtended : styles.sideBarMinimized
        }`}
      >
        {props.topContent}
        <Links
          items={nav}
          isVertical
          isSidebar
          style={styles.sideBarMenu}
          verticalStyle={styles.isVertical}
        />
      </nav>
    );
};

export { SideBar };
