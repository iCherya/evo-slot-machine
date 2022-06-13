import React, { useCallback, useMemo } from 'react';

import { TRANSLATIONS } from '@/config/translations';
import { IProviderProps, Language } from '@/types';

interface LanguageState {
  currentLanguage: Language;
  toggleLanguage: () => void;
  getTranslatedValue: (key: string) => string;
}

export const LanguageContext = React.createContext<LanguageState>({} as LanguageState);

export const LanguageProvider: React.FC<IProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = React.useState<Language>('en');

  const toggleLanguage = useCallback(() => {
    const newLanguage = currentLanguage === 'en' ? 'uk' : 'en';
    setCurrentLanguage(newLanguage);
  }, [currentLanguage]);

  const getTranslatedValue = useCallback((key: string) => TRANSLATIONS[currentLanguage][key] || key, [currentLanguage]);

  const value: LanguageState = useMemo(
    () => ({
      currentLanguage,
      toggleLanguage,
      getTranslatedValue,
    }),
    [currentLanguage, toggleLanguage, getTranslatedValue],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
