import React from 'react';
import { AwesomeButton, AwesomeButtonSocial } from 'react-awesome-button';
import 'react-awesome-button/src/styles/themes/theme-eric/styles.scss';

import { COMMON } from '@/config';

export const Button: React.FC<
  Partial<AwesomeButton> & {
    option?: typeof COMMON.buttonOptions[keyof typeof COMMON.buttonOptions];
    children?: React.ReactNode;
    action?: () => void;
    type?: string;
    className?: string;
    href?: string;
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
  }
> = ({ option, children, ...props }) => {
  if (option === COMMON.buttonOptions.SOCIAL) {
    return <AwesomeButtonSocial {...props}>{children}</AwesomeButtonSocial>;
  }

  return <AwesomeButton {...props}>{children}</AwesomeButton>;
};
