import React, { useCallback } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/store';
import { CONTENT } from '@/config/content';
import { Button } from '@/components/shared/Button';

import welcomeBanner from '../../../public/assets/welcome-banner.jpeg';

import styles from './Welcome.module.scss';

export const Welcome: React.FC = observer(() => {
  const { ui } = CONTENT;
  const { app } = useStore();

  const onClickHandler = useCallback(() => {
    app.startGame();
  }, [app]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.logoWrapper}>
        <img src={welcomeBanner} alt="Lucky Spin Banner" />
      </div>
      <div className={styles.buttonWrapper}>
        <Button action={onClickHandler} type="secondary">
          {String(ui.welcome.buttonText)}
        </Button>
      </div>
    </div>
  );
});
