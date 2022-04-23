import * as React from 'react';
import styles from '@assets/styles/default.module.css';
import { SideBar } from '@/components/SideBar';

interface DefaultLayoutProps {
  children: React.ReactNode;
  isSideBar?: boolean;
}

const Default = (props: DefaultLayoutProps) => {
  return (
    <div className={`${styles.container} ${props.isSideBar && styles.isFlex}`}>
      {props.isSideBar && <SideBar />}
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

export { Default };
