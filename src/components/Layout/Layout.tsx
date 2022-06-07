import React from 'react';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import { IProviderProps } from '@/types';

import styles from './Layout.module.scss';

export const Layout: React.FC<IProviderProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.childrenWrapper}>{children}</main>
      <Footer />
    </div>
  );
};
