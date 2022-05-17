import * as React from 'react';
import { useAtom } from 'jotai';
import { SideBarExtendButtonProps } from './NavigationProps';
import { sideBarExtendedAtom } from '@stores/states';

const SideBarExtendButton = (props: SideBarExtendButtonProps) => {
  const [isExtended, setExtended] = useAtom(sideBarExtendedAtom);

  const collapsedIconStyle: React.CSSProperties = {
    width: '1.4rem',
  };

  const extendedIconStyle: React.CSSProperties = {
    ...collapsedIconStyle,
    marginRight: '0.5rem',
  };

  return (
    <button
      type="button"
      className={props.className}
      onClick={() => {
        setExtended(!isExtended);
      }}
    >
      <img
        src={isExtended ? props.collapseIcon : props.extendIcon}
        style={isExtended ? extendedIconStyle : collapsedIconStyle}
        alt="Sidebar Size Button"
      />
      {isExtended && props.content}
    </button>
  );
};

export { SideBarExtendButton };
