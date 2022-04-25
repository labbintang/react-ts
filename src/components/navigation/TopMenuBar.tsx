import * as React from 'react';
import { NavigationVertical, NavigationHorizontal } from '.';
import burger from '@assets/images/burger.svg';
import close from '@assets/images/close.svg';
import nav from '@config/topMenu.json';
import styles from '@assets/styles/navigation.module.css';

const TopMenuBar = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  if (isOpen)
    return (
      <NavigationVertical
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
