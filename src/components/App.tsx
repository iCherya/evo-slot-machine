import React from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/store';
import { Layout } from '@/components/Layout/Layout';
import { Game } from '@/components/Game/Game';
import { Main } from '@/components/Main/Main';

export const App: React.FC = observer(() => {
  const { app } = useStore();

  return <Layout>{app.isGameStarted ? <Game /> : <Main />}</Layout>;
});
