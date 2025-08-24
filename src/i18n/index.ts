import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { setDocumentDirectionAndLang } from '../lib/utils';

import en from './locales/en.json';
import fa from './locales/fa.json';

// Map for direction
const languageDirMap: Record<string, 'rtl' | 'ltr'> = {
  fa: 'rtl',
  en: 'ltr',
};

// Custom language detector to get language from URL path
const pathLanguageDetector = {
  name: 'pathLanguageDetector',
  lookup() {
    const match = window.location.pathname.match(/^\/(fa|en)(\/|$)/);
    return match ? match[1] : undefined;
  },
  cacheUserLanguage() {
    // No caching needed
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      fa: { translation: fa }
    },
    fallbackLng: 'fa',
    supportedLngs: ['en', 'fa'],
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['pathLanguageDetector', 'localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupFromPathIndex: 0
    },
    react: {
      useSuspense: false,
    },
  });

// Register the custom detector
// (LanguageDetector as any).addDetector(pathLanguageDetector);

// Set initial dir/lang
setDocumentDirectionAndLang(languageDirMap[i18n.language] || 'rtl', i18n.language);

i18n.on('languageChanged', (lng) => {
  setDocumentDirectionAndLang(languageDirMap[lng] || 'rtl', lng);
});

export default i18n; 