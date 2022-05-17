import React from 'react';

interface NavigationHorizontalStyleProps {
  horizontalBar?: string;
  content?: string;
  burger?: string;
  links?: string;
}

interface NavigationVerticalStyleProps {
  verticalBar?: string;
  horizontalBar?: string;
  burger?: string;
  links?: string;
  isVertical?: string;
}

export interface navProps {
  name: string;
  link: string;
  external?: boolean;
  icon?: string;
  noIcon?: boolean;
  children?: navProps[];
}

export interface menuIconProps {
  icon?: string;
  style?: string | React.CSSProperties;
  noIcon?: boolean;
  name: string;
}

export interface NavigationHorizontalProps {
  setOpen: () => void;
  styles?: NavigationHorizontalStyleProps;
  logoStyle?: string;
  logoContent?: string;
  burgerImage: string;
  items: navProps[];
}

export interface NavigationVerticalProps {
  setOpen: () => void;
  styles?: NavigationVerticalStyleProps;
  logoStyle?: string;
  logoContent?: string;
  closeImage: string;
  burgerImage: string;
  topNavItems: navProps[];
  sideBarItems?: navProps[];
}

export interface LogoProps {
  style?: string;
  logo?: string;
}

export interface LinkProps {
  style?: string;
  verticalStyle?: string;
  isVertical?: boolean;
  items: navProps[];
  isSidebar?: boolean;
}

export interface SideBarExtendButtonProps {
  className?: string;
  content: React.ReactNode | string;
  extendIcon: string;
  collapseIcon: string;
}

export interface SideBarProps {
  topContent: React.ReactNode;
}
