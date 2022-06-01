import React from 'react';

import { CONTENT } from '@/config/content';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{CONTENT.header.title}</h1>
      Language switcher
    </div>
  );
};
