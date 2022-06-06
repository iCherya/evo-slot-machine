import React, { useCallback } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/store';

import styles from './Main.module.scss';

export const Main: React.FC = observer(() => {
  const { app } = useStore();

  const onClickHandler = useCallback(() => {
    app.startGame();
  }, [app]);

  return (
    <div className={styles.wrapper}>
      <h1>App title and image</h1>
      <button onClick={onClickHandler}>Start the game!</button>
    </div>
  );
});
