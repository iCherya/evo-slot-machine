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
    slotMachine.spin();
  }, [slotMachine]);

  const onInfiniteSpin = useCallback(() => {
    slotMachine.infiniteSpin();
  }, [slotMachine]);

  const increaseSpinCountHandler = useCallback(() => {
    slotMachine.updateSpinCount(1);
  }, [slotMachine]);

  const decreaseSpinCountHandler = useCallback(() => {
    if (slotMachine.infiniteSpinCount > 0) {
      slotMachine.updateSpinCount(-1);
    }
  }, [slotMachine]);

  return (
    <div className={styles.gameControls}>
      <Button action={onDeposit}>Deposit</Button>
      <Button action={onSpin} type="secondary" size="large" disabled={isSpinButtonDisabled}>
        SPIN ONCE
      </Button>

      <div className={styles.number}>
        <button onClick={decreaseSpinCountHandler}>-</button>
        <input type="text" value={slotMachine.infiniteSpinCount} readOnly={true} />
        <button onClick={increaseSpinCountHandler}>+</button>
      </div>

      <Button
        action={onInfiniteSpin}
        type="secondary"
        size="small"
        disabled={isSpinButtonDisabled || slotMachine.infiniteSpinCount === 0}
        className={styles.infinity}
      >
        ∞
      </Button>
      <Button action={onWithdraw} disabled={!user.balance}>
        Withdraw
      </Button>
    </div>
  );
});
