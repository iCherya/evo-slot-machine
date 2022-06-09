import React from 'react';

import { Header } from '@/components/ui/Header';
import { Footer } from '@/components/ui/Footer';

import { IProviderProps } from '@/types';

import styles from './Layout.module.scss';

export const Layout: React.FC<IProviderProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.children}>{children}</main>
      <Footer />
    </div>
  );
};
