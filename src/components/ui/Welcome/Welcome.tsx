import React, { useCallback } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/store';
import { CONTENT } from '@/config/content';
import { Button } from '@/components/shared/Button';

import welcomeBanner from '/assets/welcome-banner.jpeg';

import styles from './Welcome.module.scss';

export const Welcome: React.FC = observer(() => {
  const { ui } = CONTENT;
  const { game } = useStore();

  const onClickHandler = useCallback(() => {
    game.startGame();
  }, [game]);

  return (
    <div className={styles.welcome}>
      <div className={styles.banner}>
        <img src={welcomeBanner} alt="Lucky Spin Banner" />
      </div>
      <div className={styles.button}>
        <Button action={onClickHandler} type="secondary">
          {String(ui.welcome.buttonText)}
        </Button>
      </div>
    </div>
  );
});
