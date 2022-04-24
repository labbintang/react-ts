import * as React from 'react';
import { LinkProps } from './NavigationProps';

const Links = (props: LinkProps) => {
  const className = props.isVertical
    ? `${props.style} ${props.verticalStyle}`
    : props.style;

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

        return (
          <li key={index}>
            <a className={className} href={nav.link}>
              {nav.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export { Links };
