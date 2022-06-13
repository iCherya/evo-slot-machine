import React, { useCallback } from 'react';
import { observer } from 'mobx-react-lite';

import { useStore } from '@/store';
import { LanguageSwitchButton, TranslateText } from '@/components/logic/Translations';

import styles from './Settings.module.scss';

export const Settings: React.FC = observer(() => {
  const { game, slotMachine, audio } = useStore();

  const reelsCountChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = parseInt(e.target.value, 10);
      slotMachine.updateReelsCount(value);
    },
    [slotMachine],
  );

  const soundToggleHandler = useCallback(() => {
    audio.toggleMute();
  }, [audio]);

  const settingsCloseHandler = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (e.target === e.currentTarget) {
        game.toggleSettings();
      }
    },
    [game],
  );

  return game.isSettingsOpened ? (
    <div className={styles.wrapper} onClick={settingsCloseHandler}>
      <div className={styles.settings}>
        <div className={styles.settingsItem}>
          <h2>
            <TranslateText translationKey="ui.settings.reelsCount.label" />
          </h2>
          <div className={styles.reelsCountText}>{slotMachine.reelsCount}</div>
          <input
            className={styles.reelsCountRange}
            type="range"
            min="3"
            max="7"
            value={slotMachine.reelsCount}
            onChange={reelsCountChangeHandler}
          />
        </div>

        <div className={styles.settingsItem}>
          <h2>
            <TranslateText translationKey="ui.settings.audio.label" />
          </h2>
          <label className={styles.switch}>
            <input type="checkbox" checked={!audio.isMuted} onChange={soundToggleHandler} />
            <span className={styles.slider} />
          </label>
        </div>

        <div className={styles.settingsItem}>
          <h2>
            <TranslateText translationKey="ui.settings.language.label" />
          </h2>
          <LanguageSwitchButton />
        </div>

        <div className={styles.close} onClick={settingsCloseHandler} />
      </div>
    </div>
  ) : null;
});
