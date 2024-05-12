import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';
import { Resource } from 'i18next';
import en from './en.json';

const resources: Resource = {
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources,
  lng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
