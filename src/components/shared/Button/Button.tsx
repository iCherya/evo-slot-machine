import React from 'react';
// @ts-ignore wrong library types
import { AwesomeButton, AwesomeButtonSocial } from 'react-awesome-button';
import 'react-awesome-button/src/styles/themes/theme-eric/styles.scss';

import { BUTTON_OPTIONS } from '@/config/buttons';

export const Button: React.FC<AwesomeButton> = ({ option, children, ...props }) => {
  if (option === BUTTON_OPTIONS.SOCIAL) {
    return <AwesomeButtonSocial {...props}>{children}</AwesomeButtonSocial>;
  }

  return <AwesomeButton {...props}>{children}</AwesomeButton>;
};
