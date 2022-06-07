import React from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/store';
import { Layout } from '@/components/Layout';
import { Game } from '@/components/Game';
import { Welcome } from '@/components/Welcome';

export const App: React.FC = observer(() => {
  const { app } = useStore();

  return <Layout>{app.isGameStarted ? <Game /> : <Welcome />}</Layout>;
});
