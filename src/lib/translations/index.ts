import i18n from 'sveltekit-i18n';
import lang from './lang.json';

/** @type {import('sveltekit-i18n').Config} */
const config = {
  translations: {
    en: { lang },
    pl: { lang },
    de: { lang }
  },
  loaders: [
    {
      locale: 'en',
      key: 'index',
      routes: ['/'],
      loader: async () => (await import('./en/index.json')).default,
    },
    {
      locale: 'pl',
      key: 'index',
      routes: ['/'],
      loader: async () => (await import('./pl/index.json')).default,
    },
    {
      locale: 'de',
      key: 'index',
      routes: ['/'],
      loader: async () => (await import('./de/index.json')).default,
    },
    {
      locale: 'en',
      key: 'host',
      routes: ['/host', '/player'],
      loader: async () => (await import('./en/host.json')).default,
    },
    {
      locale: 'pl',
      key: 'host',
      routes: ['/host', '/player'],
      loader: async () => (await import('./pl/host.json')).default,
    },
    {
      locale: 'de',
      key: 'host',
      routes: ['/host', '/player'],
      loader: async () => (await import('./de/host.json')).default,
    },
    {
      locale: 'en',
      key: 'join',
      routes: ['/join'],
      loader: async () => (await import('./en/join.json')).default,
    },
    {
      locale: 'pl',
      key: 'join',
      routes: ['/join'],
      loader: async () => (await import('./pl/join.json')).default,
    },
    {
      locale: 'de',
      key: 'join',
      routes: ['/join'],
      loader: async () => (await import('./de/join.json')).default,
    },
  ]
};

export const { t, loading, locales, locale, loadTranslations } = new i18n(config);