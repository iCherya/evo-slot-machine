import React from 'react';

import { GameControls } from '@/components/logic/GameControls';

import styles from './Game.module.scss';

export const Game: React.FC = () => {
  return (
    <>
      <div className={styles.wrapper}>Slot Machine Reels</div>
      <GameControls />
    </>
  );
};
