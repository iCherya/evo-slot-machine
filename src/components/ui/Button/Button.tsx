import React from 'react';
import { AwesomeButton, AwesomeButtonSocial } from 'react-awesome-button';
import 'react-awesome-button/src/styles/themes/theme-eric/styles.scss';

import { BUTTON_OPTIONS } from '@/config';

export const Button: React.FC<
  Partial<AwesomeButton> & {
    option?: typeof BUTTON_OPTIONS[keyof typeof BUTTON_OPTIONS];
    children?: React.ReactNode;
    action?: () => void;
    type?: string;
    className?: string;
    href?: string;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
  }
> = ({ option, children, ...props }) => {
  if (option === BUTTON_OPTIONS.SOCIAL) {
    return <AwesomeButtonSocial {...props}>{children}</AwesomeButtonSocial>;
  }

  return <AwesomeButton {...props}>{children}</AwesomeButton>;
};
