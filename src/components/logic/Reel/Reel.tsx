import React, { useCallback, useEffect } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/store';
import { DOMAIN } from '@/config';

import styles from './Reel.module.scss';

interface Props {
  reelIndex: number;
}

export const Reel: React.FC<Props> = observer(({ reelIndex }) => {
  const { turnoverCount, turnoverDuration, renderSlotsPerReel } = DOMAIN;

  const [animateRotation, setAnimateRotation] = React.useState(false);
  const [turnoversLeft, setTurnoversLeft] = React.useState(turnoverCount + reelIndex);

  const { slotMachine } = useStore();
  const currentReel = slotMachine.reels[reelIndex];

  useEffect(() => {
    if (slotMachine.isSpinning) {
      setAnimateRotation(true);
    }
  }, [slotMachine.isSpinning]);

  const onTransitionEnd = useCallback(() => {
    setAnimateRotation(false);
    currentReel.rotateReel();

    setTurnoversLeft((prev) => prev - 1);

    if (turnoversLeft > 0) {
      setTimeout(() => setAnimateRotation(true), turnoverDuration / turnoverCount);
      return;
    }

    setTurnoversLeft(turnoverCount + reelIndex);
    slotMachine.spinEnd(reelIndex);
  }, [currentReel, turnoverDuration, turnoverCount, turnoversLeft, reelIndex, slotMachine]);

  return (
    <>
      <div className={classNames(styles.reel, animateRotation && styles.rotate)} onTransitionEnd={onTransitionEnd}>
        <div className={styles.slotsWrapper}>
          {currentReel.reelSlots.slice(0, renderSlotsPerReel).map(({ id, image, name, isWin }) => (
            <img key={id} className={classNames(styles.slot, isWin && styles.win)} src={image} alt={`Slot-${name}`} />
          ))}
        </div>
      </div>
    </>
  );
});
