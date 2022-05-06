import * as React from 'react';
import { useAtomValue } from 'jotai';
import { sideBarExtendedAtom } from '@/stores/states';
import { MenuIcon } from './menuIcon';
import { LinkProps } from './NavigationProps';

const Links = (props: LinkProps) => {
  const isExtended = useAtomValue(sideBarExtendedAtom);
  const className = props.isVertical
    ? `${props.style} ${props.verticalStyle}`
    : props.style;

  const collapsedIconStyle: React.CSSProperties = {
    maxWidth: '1.4rem',
  };

  return (
    <ul className={props.style}>
      {props.items.map((nav, index) => {
        if (nav.children)
          return (
            <li key={index}>
              <a className={className} href={nav.link}>
                {nav.name}
              </a>
            </li>
          );
        else
          return (
            <li key={index}>
              <a className={className} href={nav.link}>
                <MenuIcon
                  name={nav.name}
                  icon={nav.icon}
                  noIcon={nav.noIcon}
                  style={collapsedIconStyle}
                />
                {props.isSidebar ? (
                  isExtended && <span>{nav.name}</span>
                ) : (
                  <span>{nav.name}</span>
                )}
              </a>
            </li>
          );
      })}
    </ul>
  );
};

export { Links };
