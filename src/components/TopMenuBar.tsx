import * as React from 'react';
import { useMediaQuery } from '@chakra-ui/media-query';
import { Links } from './navigation/Links';
import burger from '@assets/images/burger.svg';
import close from '@assets/images/close.svg';
import nav from '@config/topMenu.json';
import styles from '@assets/styles/navigation.module.css';

interface NavigationContentProps {
  setOpen: () => void;
}

const Logo = () => {
  return (
    <a href="/">
      <div className={styles.logo}>vili</div>
    </a>
  );
};

const NavigationVertical = (props: NavigationContentProps) => {
  const closeStyle: React.CSSProperties = {
    position: 'absolute',
    right: 4,
    top: 4,
    width: '32px',
  };

  return (
    <nav className={styles.verticalBar}>
      <img
        src={close}
        style={closeStyle}
        className={styles.burger}
        onClick={props.setOpen}
      />
      <Logo />
      <Links
        items={nav}
        isVertical
        verticalStyle={styles.isVertical}
        style={styles.links}
      />
    </nav>
  );
};

const NavigationHorizontal = (props: NavigationContentProps) => {
  const [isTabletOrMobile] = useMediaQuery('(max-width: 1224px)');

  return (
    <nav className={styles.horizontalBar}>
      <div className={styles.content}>
        <Logo />
        {isTabletOrMobile ? (
          <img src={burger} className={styles.burger} onClick={props.setOpen} />
        ) : (
          <Links items={nav} style={styles.links} />
        )}
      </div>
    </nav>
  );
};

const TopMenuBar = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  if (isOpen) return <NavigationVertical setOpen={handleClick} />;

  return <NavigationHorizontal setOpen={handleClick} />;
};

export { TopMenuBar };
