import React from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/store';
import { Reel } from '@/components/logic/Reel';

import styles from './SlotMachine.module.scss';

export const SlotMachine: React.FC = observer(() => {
  const { slotMachine } = useStore();

  return (
    <div className={styles.reels}>
      {slotMachine.reels.map((reel) => (
        <Reel key={reel.reelIndex} reelIndex={reel.reelIndex} />
      ))}
    </div>
  );
});
