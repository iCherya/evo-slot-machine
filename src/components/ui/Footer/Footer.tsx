import React, { useCallback } from 'react';

import { COMMON } from '@/config';
import { useStore } from '@/store';
import { Button } from '@/components/ui/Button';
import { TranslateText } from '@/components/logic/Translations';

import evolutionLogo from '/assets/evolution-logo.svg';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  const { game } = useStore();

  const onSettingsButtonClick = useCallback(() => {
    game.toggleSettings();
  }, [game]);

  const onLogoClick = useCallback(() => {
    game.stopGame();
  }, [game]);

  return (
    <footer className={styles.footer}>
      <div data-testid="credentials">
        <img
          data-testid="logo"
          src={evolutionLogo}
          alt="Evolution logo"
          onClick={onLogoClick}
          className={styles.logo}
        />
        <TranslateText translationKey="ui.footer.description" />
      </div>

      <button data-testid="settings-button" className={styles.controlsButton} onClick={onSettingsButtonClick} />

      <div data-testid="social-buttons">
        {COMMON.social.map(({ id, type, link }) => (
          <span key={id} className={styles.socialButton}>
            <Button option={COMMON.buttonOptions.SOCIAL} type={type} href={link} />
          </span>
        ))}
      </div>
    </footer>
  );
};
