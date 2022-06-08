import React from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/store';
import { Layout } from '@/components/ui/Layout';
import { Game } from '@/components/ui/Game';
import { Welcome } from '@/components/ui/Welcome';

export const App: React.FC = observer(() => {
  const { game } = useStore();

  return <Layout>{game.isStarted ? <Game /> : <Welcome />}</Layout>;
});
