import * as React from 'react';
import useCollapse from 'react-collapsed';
import { useAtomValue } from 'jotai';
import { sideBarExtendedAtom } from '@/stores/states';
import { MenuIcon } from './MenuIcon';
import { LinkProps } from './NavigationProps';

const Links = (props: LinkProps) => {
  const isExtended = useAtomValue(sideBarExtendedAtom);
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();
  const className = props.isVertical
    ? `${props.style} ${props.verticalStyle}`
    : props.style;

  const collapsedIconStyle: React.CSSProperties = {
    maxWidth: '1.4rem',
  };

  return (
    <ul className={props.style}>
      {props.items.map((nav, index) => {
        if (nav.children) {
          if (props.isSidebar)
            return (
              <li key={index}>
                <div className={className} {...getToggleProps()}>
                  <MenuIcon
                    name={nav.name}
                    icon={nav.icon}
                    noIcon={nav.noIcon}
                    style={collapsedIconStyle}
                  />
                  {isExtended && <span>{nav.name}</span>}
                  <span>{isExpanded ? '>' : 'a'}</span>
                </div>
                <section {...getCollapseProps()}>
                  {nav.children.map((nav, index) => (
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
                  ))}
                </section>
              </li>
            );
        } else
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
