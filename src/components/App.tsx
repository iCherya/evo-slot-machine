import React from 'react';

import { Layout } from '@/components/Layout/Layout';
import { Game } from '@/components/Game/Game';

export const App: React.FC = () => {
  return (
    <Layout>
      <Game />
    </Layout>
  );
};
