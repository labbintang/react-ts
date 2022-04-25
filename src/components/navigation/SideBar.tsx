import * as React from 'react';
import { useAtomValue } from 'jotai';
import { sideBarExtendedAtom } from '@stores/states';
import { Links } from '.';
import { SideBarProps } from './NavigationProps';

import nav from '@config/sideBarMenu.json';
import styles from '@assets/styles/navigation.module.css';

const SideBar = (props: SideBarProps) => {
  const isExtended = useAtomValue(sideBarExtendedAtom);

  return (
    <nav
      id="sidebar"
      className={`${styles.sideBar} ${
        isExtended ? styles.sideBarExtended : styles.sideBarMinimized
      }`}
    >
      {props.topContent}
      <Links items={nav} isVertical style={styles.sideBarMenu} />
    </nav>
  );
};

export { SideBar };
