'use client';
import { createContext, useContext, useTransition, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { LANGUAGE_COOKIE, translate, type Language } from './translate';

function saveLanguagePreference(next: Language) {
  document.cookie = `${LANGUAGE_COOKIE}=${next};path=/;max-age=31536000;SameSite=Lax${location.protocol === 'https:' ? ';Secure' : ''}`;
}

const Context = createContext<Language>('en');
export function LanguageProvider({ language, children }: { language: Language; children: ReactNode }) {
  return <Context.Provider value={language}>{children}</Context.Provider>;
}
export function useLanguage() {
  const language = useContext(Context);
  return { language, t: (value: string) => translate(value, language) };
}
export function LanguageSwitcher() {
  const { language } = useLanguage();
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  function select(next: Language) {
    if (language === next) return;
    saveLanguagePreference(next);
    // Refresh server content without remounting forms or consuming auth links twice.
    startTransition(() => router.refresh());
  }
  return <nav aria-label="Language / 语言" className="fixed bottom-5 right-5 z-50 flex rounded-full border border-slate-300 bg-white p-1 shadow-lg">
    {(['en', 'zh'] as const).map(option => <button key={option} type="button" lang={option === 'en' ? 'en' : 'zh-CN'}
      disabled={pending} aria-pressed={language === option} onClick={() => select(option)}
      className={`min-h-11 rounded-full px-4 py-2 text-sm font-semibold ${language === option ? 'bg-teal-700 text-white' : 'text-slate-700 hover:bg-slate-100'}`}>
      {option === 'en' ? 'English' : '中文'}
    </button>)}
  </nav>;
}
