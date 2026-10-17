import 'server-only';
import { cookies } from 'next/headers';
import { LANGUAGE_COOKIE, translate } from './translate';
import type { Language } from './translate';

export async function getLanguage(): Promise<Language> {
  return (await cookies()).get(LANGUAGE_COOKIE)?.value === 'zh' ? 'zh' : 'en';
}
export async function getTranslator() {
  const language = await getLanguage();
  return (value: string) => translate(value, language);
}
