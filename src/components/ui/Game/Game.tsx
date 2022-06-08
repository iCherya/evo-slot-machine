import React, { useCallback } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/store';
import { CONTENT } from '@/config/content';
import { Button } from '@/components/shared/Button';

import styles from './Game.module.scss';

export const Game: React.FC = observer(() => {
  const { user } = useStore();

  const { depositValue, betValue } = CONTENT.domain;

  const onDeposit = useCallback(() => {
    user.deposit(depositValue);
  }, [user, depositValue]);

  const onWithdraw = useCallback(() => {
    user.withdraw();
  }, [user]);

  const onPlaceBet = useCallback(() => {
    user.placeBet(betValue);
  }, [user, betValue]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <Button action={onDeposit}>Deposit</Button>
        <Button action={onPlaceBet} type="secondary" size="large" disabled={!user.canSpin || user.balance < betValue}>
          SPIN
        </Button>
        <Button action={onWithdraw} disabled={!user.balance}>
          Withdraw
        </Button>
      </div>
    </div>
  );
});
