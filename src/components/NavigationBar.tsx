import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import nav from '@config/navigation.json';
import burger from '@assets/images/burger.svg';
import close from '@assets/images/close.svg';
import styles from '@assets/styles/navigation.module.css';

interface NavigationContentProps {
  isOpen: () => void;
}

const Logo = () => {
  return (
    <a href="/">
      <div className={styles.logo}>vili</div>
    </a>
  );
};

const Links = () => {
  return (
    <ul className={styles.links}>
      {nav.map((nav, index) => {
        return (
          <li key={index}>
            <a className={styles.link} href={nav.link}>
              {nav.name}
            </a>
          </li>
        );
      })}
    </ul>
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
        onClick={props.isOpen}
      />
      <Logo />
      <ul className={`${styles.links} ${styles.isVertical}`}>
        {nav.map((nav, index) => {
          return (
            <li key={index}>
              <a className={styles.link} href={nav.link}>
                {nav.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const NavigationHorizontal = (props: NavigationContentProps) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });

  return (
    <nav className={styles.horizontalBar}>
      <div className={styles.content}>
        <Logo />
        {isTabletOrMobile ? (
          <img src={burger} className={styles.burger} onClick={props.isOpen} />
        ) : (
          <Links />
        )}
      </div>
    </nav>
  );
};

const NavigationBar = () => {
  const [isOpen, setOpen] = React.useState<boolean>(false);

  const handleClick = () => {
    setOpen(!isOpen);
  };

  if (isOpen) return <NavigationVertical isOpen={handleClick} />;

  return <NavigationHorizontal isOpen={handleClick} />;
};

export { NavigationBar };
