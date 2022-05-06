import * as React from 'react';
import { NavigationTabletorMobile, NavigationHorizontal } from '.';
import burger from '@assets/images/navigation/default/burger.svg';
import close from '@assets/images/navigation/default/close.svg';
import topMenu from '@config/topMenu.json';
import sideBarNav from '@config/sideBarMenu.json';
import styles from '@assets/styles/navigations/style.module.css';

const TopMenuBar = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  if (isOpen)
    return (
      <NavigationTabletorMobile
        topNavItems={topMenu}
        sideBarItems={sideBarNav}
        logoStyle={styles.logo}
        styles={styles}
        closeImage={close}
        burgerImage={burger}
        setOpen={handleClick}
      />
    );

  return (
    <NavigationHorizontal
      burgerImage={burger}
      items={topMenu}
      logoStyle={styles.logo}
      styles={styles}
      setOpen={handleClick}
    />
  );
};

export { TopMenuBar };
