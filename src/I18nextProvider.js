import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './en.json';
import translationCS from './cs.json';

const resources = {
  en: { translation: translationEN },
  cs: { translation: translationCS },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'cs', // Default language
    fallbackLng: 'cs', // Fallback language if translation is missing
    keySeparator: false, // Allow using nested keys like 'parent.child'
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
