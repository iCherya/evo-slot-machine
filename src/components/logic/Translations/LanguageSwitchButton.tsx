import React, { useContext } from 'react';

import { Language } from '@/types';
import { LanguageContext } from '@/context/Language';

import styles from './LanguageSwitchButton.module.scss';

const langToFlagMap: Record<Language, string> = {
  en: '🇬🇧',
  uk: '🇺🇦',
};

export const LanguageSwitchButton: React.FC = () => {
  const { currentLanguage, toggleLanguage } = useContext(LanguageContext);

  return (
    <div className={styles.button} onClick={toggleLanguage}>
      {langToFlagMap[currentLanguage]}
    </div>
  );
};
