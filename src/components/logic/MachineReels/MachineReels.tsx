import React from 'react';

import { SlotReel } from '@/components/logic/SlotReel';

import styles from './MachineReels.module.scss';

export const MachineReels: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <SlotReel />
      <SlotReel />
      <SlotReel />
    </div>
  );
};
