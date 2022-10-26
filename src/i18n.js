import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationAr from '../public/languages/ar.json';
import translationEn from '../public/languages/en.json';

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: translationEn },
    ar: { translation: translationAr },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;
