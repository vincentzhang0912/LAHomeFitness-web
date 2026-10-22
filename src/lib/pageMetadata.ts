import type { Metadata } from 'next';
import { getLanguage, getTranslator } from '@/i18n/server';
export async function pageMetadata(title: string, description: string, path: string): Promise<Metadata> {
  const t = await getTranslator();
  const language = await getLanguage();
  const name = `${t(title)} | LA Home Fitness`;
  return { title: name, description: t(description), alternates: { canonical: path },
    openGraph: { title: name, description: t(description), url: path, locale: language === 'en' ? 'en_US' : 'zh_CN' },
    twitter: { card:'summary', title:name, description:t(description) } };
}
