import english from './en.json';
export type Language = 'en' | 'zh';
export const LANGUAGE_COOKIE = 'homefitness_language';
const dictionary: Record<string, string> = english;
export function translate(value: string, language: Language): string {
  if (language === 'zh') return value;
  const key = value.trim();
  return Object.prototype.hasOwnProperty.call(dictionary, key) ? value.replace(key, dictionary[key]) : value;
}
