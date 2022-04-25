import * as React from 'react';
import styles from '@assets/styles/default.module.css';
import { SideBar, SideBarExtendButton } from '@components/navigation';
import extendIcon from '@assets/images/navigation/expand-right.svg';
import collapseIcon from '@assets/images/navigation/collapse-left.svg';
import buttonStyle from '@assets/styles/sideBarExtendButton.module.css';

interface DefaultLayoutProps {
  children: React.ReactNode;
  isSideBar?: boolean;
}

const Default = (props: DefaultLayoutProps) => {
  return (
    <div className={`${styles.container} ${props.isSideBar && styles.isFlex}`}>
      {props.isSideBar && (
        <SideBar
          topContent={
            <SideBarExtendButton
              className={buttonStyle.button}
              extendIcon={extendIcon}
              collapseIcon={collapseIcon}
              content="Collapse"
            />
          }
        />
      )}
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};

export { Default };
