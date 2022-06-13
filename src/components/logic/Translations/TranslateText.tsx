import React, { useContext } from 'react';

import { TranslationKey } from '@/config/translations';
import { LanguageContext } from '@/context/Language';

interface TranslateTextProps {
  translationKey: TranslationKey;
}

export const TranslateText: React.FC<TranslateTextProps> = ({ translationKey }) => {
  const { getTranslatedValue } = useContext(LanguageContext);
  const translated = getTranslatedValue(translationKey);

  return <span>{translated}</span>;
};
