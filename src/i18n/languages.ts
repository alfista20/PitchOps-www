export const defaultLang = 'en';

export const languages = {
  en: 'English',
  pl: 'Polski',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  pt: 'Português',
} as const;

export type Lang = keyof typeof languages;

export const supportedLangs = Object.keys(languages) as Lang[];
export const prefixedLangs = supportedLangs.filter((lang) => lang !== defaultLang);

export function langPrefix(lang: Lang) {
  return lang === defaultLang ? '' : `/${lang}`;
}

export function localizedPath(lang: Lang, path = '/') {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${langPrefix(lang)}${cleanPath}`.replace(/\/$/, '/') || '/';
}

export function equivalentPath(targetLang: Lang, currentPath: string) {
  const normalizedPath = currentPath.startsWith('/') ? currentPath : `/${currentPath}`;
  const langMatch = normalizedPath.match(/^\/(pl|de|es|fr|pt)(\/.*)?$/);
  const unprefixedPath = langMatch ? langMatch[2] || '/' : normalizedPath;

  return localizedPath(targetLang, unprefixedPath);
}
