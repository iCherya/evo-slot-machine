import React, { useCallback } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/store';
import { CONTENT } from '@/config/content';
import { AnimatedNumber } from '@/components/logic/AnimatedNumber';

import styles from './Header.module.scss';

export const Header: React.FC = observer(() => {
  const { game, user } = useStore();

  const {
    ui: { header },
    domain: { currency },
  } = CONTENT;

  const format = useCallback((number: number) => `${Math.floor(number)} ${currency}`, [currency]);

  return (
    <header data-testid="header" className={classNames(styles.header, game.isStarted && styles.inGame)}>
      {!game.isStarted ? header.title : <AnimatedNumber number={user.balance} format={format} />}
    </header>
  );
});
