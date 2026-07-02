import { DEFAULT_LOCALE, LOCALES, type Locale } from './ui';

/** The locale for a given URL pathname ('/fr/...' → 'fr', else default). */
export function localeFromPath(pathname: string): Locale {
  const seg = pathname.split('/').filter(Boolean)[0];
  return (LOCALES as readonly string[]).includes(seg) ? (seg as Locale) : DEFAULT_LOCALE;
}

/** Strip any locale prefix, returning a locale-agnostic path that starts with '/'. */
export function stripLocale(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean);
  if ((LOCALES as readonly string[]).includes(parts[0])) parts.shift();
  const p = '/' + parts.join('/');
  return p;
}

/** Turn a locale-agnostic path (e.g. '/projects', '/#how', '/') into a localized one. */
export function localize(path: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return path;
  if (path === '/') return `/${locale}/`;
  return `/${locale}${path}`;
}
