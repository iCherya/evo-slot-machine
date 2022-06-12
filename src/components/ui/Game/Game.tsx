import React from 'react';

import { GameControls } from '@/components/logic/GameControls';
import { SlotMachine } from '@/components/logic/SlotMachine';

export const Game: React.FC = () => {
  return (
    <>
      <SlotMachine />
      <GameControls />
    </>
  );
};
