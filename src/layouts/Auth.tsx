import * as React from 'react';
import styles from '@assets/styles/default.module.css';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const Auth = (props: DefaultLayoutProps) => {
  return <main className={styles.container}>{props.children}</main>;
};

export { Auth };
