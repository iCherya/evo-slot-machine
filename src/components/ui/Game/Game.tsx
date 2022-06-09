import React from 'react';

import { GameControls } from '@/components/logic/GameControls';
import { MachineReels } from '@/components/logic/MachineReels';

export const Game: React.FC = () => {
  return (
    <>
      <MachineReels />
      <GameControls />
    </>
  );
};
