import React, { useCallback, useEffect } from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/store';
import { CONTENT } from '@/config/content';

import styles from './Reel.module.scss';

interface Props {
  reelIndex: number;
}

export const Reel: React.FC<Props> = observer(({ reelIndex }) => {
  const { turnoverCount, turnoverDuration } = CONTENT.domain;

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
    slotMachine.finishRotation(reelIndex);
  }, [currentReel, turnoverDuration, turnoverCount, turnoversLeft, reelIndex, slotMachine]);

  return (
    <>
      <div className={classNames(styles.reel, animateRotation && styles.rotate)} onTransitionEnd={onTransitionEnd}>
        <div className={styles.slotsWrapper}>
          {currentReel.reelsSlots.slice(0, 5).map(({ id, image, name }) => (
            <img key={id} className={styles.slot} src={image} alt={`Slot-${name}`} />
          ))}
        </div>
      </div>
    </>
  );
});
