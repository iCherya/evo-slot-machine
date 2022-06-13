import React, { useCallback } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/store';
import { DOMAIN } from '@/config';
import { Button } from '@/components/shared/Button';

import styles from './GameControls.module.scss';

export const GameControls: React.FC = observer(() => {
  const { user, slotMachine } = useStore();
  const { depositValue, betValue } = DOMAIN;

  const isSpinButtonDisabled = !user.canSpin || user.balance < betValue || slotMachine.isSpinning;

  const onDeposit = useCallback(() => {
    user.deposit(depositValue);
  }, [user, depositValue]);

  const onWithdraw = useCallback(() => {
    user.withdraw();
  }, [user]);

  const onSpin = useCallback(() => {
    user.placeBet(betValue);
    slotMachine.spin();
  }, [user, betValue, slotMachine]);

  return (
    <div className={styles.gameControls}>
      <Button className={styles.deposit} action={onDeposit}>
        Deposit
      </Button>
      <Button className={styles.spin} action={onSpin} type="secondary" size="large" disabled={isSpinButtonDisabled}>
        SPIN
      </Button>
      <Button className={styles.withdraw} action={onWithdraw} disabled={!user.balance}>
        Withdraw
      </Button>
    </div>
  );
});
