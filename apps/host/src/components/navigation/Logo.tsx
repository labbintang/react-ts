import * as React from 'react';
import { LogoProps } from './NavigationProps';

const Logo = (props: LogoProps) => {
  return (
    <a href="/">
      <div className={props.style}>{props.logo ?? 'vili'}</div>
    </a>
  );
};

export { Logo };
