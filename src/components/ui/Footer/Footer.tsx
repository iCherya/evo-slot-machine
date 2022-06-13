import React, { useCallback } from 'react';

import { CONTENT, BUTTON_OPTIONS } from '@/config';
import { Button } from '@/components/ui/Button';

import { useStore } from '@/store';
import evolutionLogo from '/assets/evolution-logo.svg';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  const { game } = useStore();
  const { description, social } = CONTENT.ui.footer;

  const onSettingsButtonClick = useCallback(() => {
    game.toggleSettings();
  }, [game]);

  return (
    <footer className={styles.footer}>
      <div data-testid="credentials">
        <img src={evolutionLogo} alt="Evolution logo" />
        <p>{description}</p>
      </div>

      <button data-testid="settings-button" className={styles.controlsButton} onClick={onSettingsButtonClick} />

      <div data-testid="social-buttons">
        {social.map(({ id, type, link }) => (
          <span key={id} className={styles.socialButton}>
            <Button option={BUTTON_OPTIONS.SOCIAL} type={type} href={link} />
          </span>
        ))}
      </div>
    </footer>
  );
};
