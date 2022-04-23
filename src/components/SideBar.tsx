import * as React from 'react';
import { Links } from './navigation/Links';
import styles from '@assets/styles/navigation.module.css';
import nav from '@config/sideBarMenu.json';

const SideBar = () => {
  const [isExtended, extend] = React.useState<boolean>(true);
  return (
    <nav
      id="sidebar"
      className={`${styles.sideBar} ${
        isExtended ? styles.sideBarExtended : styles.sideBarMinimized
      }`}
    >
      <Links items={nav} isVertical style={styles.sideBarMenu} />
    </nav>
  );
};

export { SideBar };
