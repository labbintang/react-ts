import { NavigationBar } from '@components';
import * as React from 'react';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const Default = (props: DefaultLayoutProps) => {
  return (
    <main>
      <NavigationBar />
      {props.children}
    </main>
  );
};

export { Default };
