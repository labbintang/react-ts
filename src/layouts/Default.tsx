import * as React from 'react';
import { NavigationBar } from '@components';
import styles from '@assets/styles/default.module.css';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const Default = (props: DefaultLayoutProps) => {
  return (
    <>
      <NavigationBar />
      <main className={styles.container}>{props.children}</main>
    </>
  );
};

export { Default };
