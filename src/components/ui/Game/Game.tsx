import React from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/store';
import { GameControls } from '@/components/logic/GameControls';
import { SlotMachine } from '@/components/logic/SlotMachine';

import styles from './Game.module.scss';

export const Game: React.FC = observer(() => {
  const { game } = useStore();

  return (
    <>
      <SlotMachine />
      <GameControls />
      {game.showWinAnimation && (
        <div className={styles.banner} data-testid="banner">
          +{game.winCount}
        </div>
      )}
    </>
  );
});
