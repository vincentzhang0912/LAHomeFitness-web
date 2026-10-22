import Image from 'next/image';
import Link from 'next/link';
import { LanguageSwitcher } from '@/i18n/LanguageProvider';
import { SiteNav } from './SiteNav';
import type { ReactNode } from 'react';
export type Translator = (value: string) => string;
export const APP_STORE_URL = 'https://apps.apple.com/app/id6759955941';
export function DownloadLink({ children, className = '', tone = 'dark' }: { children: ReactNode; className?: string; tone?: 'dark' | 'light' }) {
  return <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer"
    className={`inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${tone === 'light' ? 'bg-white text-teal-950 hover:bg-teal-50' : 'bg-teal-800 text-white hover:bg-teal-900'} ${className}`}>{children}<span aria-hidden="true" className="ml-3">↗</span></a>;
}
export function SiteHeader({ t }: { t: Translator }) {
  const items = [{ href:'/training', label:t('训练') },{ href:'/pricing', label:t('价格') },{ href:'/coaching', label:t('私教') },{ href:'/contact', label:t('联系') }];
  return <header className="border-b border-slate-200/80 bg-white">
    <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-3">{t('跳到正文')}</a>
    <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-4 md:px-8">
      <Link href="/" aria-label={t('返回首页')} className="flex shrink-0 items-center gap-2.5">
        <Image src="/brand-app-icon.png" alt="" width={34} height={34} className="rounded-xl" />
        <span className="text-sm font-bold tracking-tight text-slate-900 sm:text-base">LA Home Fitness</span>
      </Link>
      <SiteNav items={items} className="hidden lg:flex" />
      <div className="flex items-center gap-3"><LanguageSwitcher /><div className="hidden lg:block"><DownloadLink className="px-4 py-2">{t('获取 App')}</DownloadLink></div></div>
    </div>
    <div className="mx-auto max-w-6xl px-5 pb-2 lg:hidden"><SiteNav items={items} className="justify-between gap-3" /></div>
  </header>;
}
export function SiteFooter({ t }: { t: Translator }) {
  return <footer id="contact" className="mt-auto border-t border-slate-200 bg-white">
    <div className="mx-auto grid max-w-6xl gap-7 px-5 py-10 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
      <div><p className="font-semibold text-slate-900">LA Home Fitness</p><p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">{t('让日常运动，更容易坚持。')}</p><p className="mt-5 text-xs text-slate-400">© {new Date().getFullYear()} LA Home Fitness</p></div>
      <nav aria-label={t('网站导航')} className="grid grid-cols-2 gap-3 text-sm text-slate-600">
        {[['/training','训练'],['/pricing','价格'],['/coaching','私教'],['/contact','联系'],['/privacy','隐私政策'],['/terms','使用条款']].map(([href,label])=><Link key={href} href={href} className="hover:text-teal-800 hover:underline">{t(label)}</Link>)}
      </nav>
      <div className="text-sm text-slate-600"><p className="font-medium text-slate-900">{t('欢迎联系')}</p><a className="mt-3 block hover:text-teal-800" href="tel:+16266063363">+1 (626) 606-3363</a><a className="mt-2 block break-all hover:text-teal-800" href="mailto:Vincentzys0912@gmail.com">Vincentzys0912@gmail.com</a></div>
    </div>
  </footer>;
}
export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <div className="mx-auto max-w-6xl px-5 pb-8 pt-14 md:px-8 md:pt-20"><p className="eyebrow">{eyebrow}</p><h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-5xl">{title}</h1><div className="mt-5 max-w-2xl text-base leading-8 text-slate-600">{children}</div></div>;
}
export function DownloadBanner({ t }: { t: Translator }) {
  return <section className="mx-auto max-w-6xl px-5 py-14 md:px-8"><div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-teal-950 p-7 text-white sm:flex-row sm:items-center md:p-10"><div><h2 className="text-2xl font-semibold tracking-tight">{t('从今天的一次训练开始。')}</h2><p className="mt-3 text-sm leading-7 text-teal-100/80">{t('iPhone 与 iPad 均可使用，支持英文和中文。')}</p></div><DownloadLink tone="light" className="shrink-0">{t('在 App Store 下载')}</DownloadLink></div></section>;
}
