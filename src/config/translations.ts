import { Language } from '@/types';

const TRANSLATION_KEYS = [
  'ui.footer.description',
  'ui.header.title',
  'ui.settings.reelsCount.label',
  'ui.settings.audio.label',
  'ui.settings.language.label',
  'ui.welcome.play.button.text',
  'ui.game.spin.button.text',
  'ui.game.infiniteSpin.button.text',
  'ui.game.deposit.button.text',
  'ui.game.withdraw.button.text',
];

type KeyTuple = typeof TRANSLATION_KEYS;
export type TranslationKey = KeyTuple[number];

type TranslationsMap = Record<Language, Record<TranslationKey, string>>;

export const TRANSLATIONS: TranslationsMap = {
  en: {
    'ui.footer.description': 'TypeScript Bootcamp',
    'ui.header.title': 'JACKPOT',
    'ui.settings.reelsCount.label': 'Reels count',
    'ui.settings.audio.label': 'Audio',
    'ui.settings.language.label': 'Language',
    'ui.welcome.play.button.text': 'PLAY!',
    'ui.game.spin.button.text': 'SPIN ONCE',
    'ui.game.infiniteSpin.button.text': '∞',
    'ui.game.deposit.button.text': 'Deposit',
    'ui.game.withdraw.button.text': 'Withdraw',
  },
  uk: {
    'ui.footer.description': 'TypeScript Bootcamp',
    'ui.header.title': 'ДЖЕКПОТ',
    'ui.settings.reelsCount.label': 'Кількість барабанів',
    'ui.settings.audio.label': 'Звук',
    'ui.settings.language.label': 'Мова',
    'ui.welcome.play.button.text': 'Грати!',
    'ui.game.spin.button.text': 'Крутити',
    'ui.game.infiniteSpin.button.text': '∞',
    'ui.game.deposit.button.text': 'Поповнити',
    'ui.game.withdraw.button.text': 'Повернути',
  },
};
