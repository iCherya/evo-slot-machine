import React from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/store';
import { CONTENT } from '@/config/content';

import styles from './Header.module.scss';

export const Header: React.FC = observer(() => {
  const { app } = useStore();

  const { ui, domain } = CONTENT;
  const userBalance = 0;

  return (
    <header data-testid="header" className={classNames(styles.wrapper, app.isGameStarted && styles.game)}>
      {!app.isGameStarted ? ui.header.title : `${userBalance} ${domain.currency}`}
    </header>
  );
});
