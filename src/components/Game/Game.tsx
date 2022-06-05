import React, { useCallback } from 'react';

import { Button } from '@/components/shared/Button/Button';
import { BUTTON_OPTIONS } from '@/config/buttons';

import styles from './Game.module.scss';

export const Game: React.FC = () => {
  const onButtonClickHandler = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return (
    <div className={styles.wrapper}>
      <p>Game component</p>
      <Button size="small" type="primary" option="default" action={onButtonClickHandler}>
        Primary
      </Button>
      <Button size="medium" type="secondary" action={onButtonClickHandler}>
        Secondary
      </Button>
      <Button href="https://google.com" target="_blank">
        Anchor
      </Button>
      <Button size="medium" type="disabled">
        Disabled
      </Button>
      <Button type="github" url="#" size="meidum" option={BUTTON_OPTIONS.SOCIAL}>
        Github
      </Button>
    </div>
  );
};
