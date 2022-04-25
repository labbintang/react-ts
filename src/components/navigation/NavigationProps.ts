import React from 'react';

interface NavigationHorizontalStyleProps {
  horizontalBar?: string;
  content?: string;
  burger?: string;
  links?: string;
}

interface NavigationVerticalStyleProps {
  verticalBar?: string;
  burger?: string;
  links?: string;
  isVertical?: string;
}

interface navProps {
  name: string;
  link: string;
  external?: boolean;
  icon?: string;
  children?: navProps[];
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
  items: navProps[];
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
