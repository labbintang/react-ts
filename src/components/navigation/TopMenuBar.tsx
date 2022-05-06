import * as React from 'react';
import { NavigationTabletorMobile, NavigationHorizontal } from '.';
import burger from '@assets/images/navigation/default/burger.svg';
import close from '@assets/images/navigation/default/close.svg';
import nav from '@config/topMenu.json';
import styles from '@assets/styles/navigations/style.module.css';

const TopMenuBar = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  if (isOpen)
    return (
      <NavigationTabletorMobile
        items={nav}
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
      items={nav}
      logoStyle={styles.logo}
      styles={styles}
      setOpen={handleClick}
    />
  );
};

export { TopMenuBar };
