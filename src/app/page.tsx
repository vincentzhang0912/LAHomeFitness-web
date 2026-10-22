import Image from 'next/image';
import Link from 'next/link';
import { getTranslator } from '@/i18n/server';
import { pageMetadata } from '@/lib/pageMetadata';
import { APP_STORE_URL, DownloadLink, DownloadBanner } from '@/components/SiteChrome';
export function generateMetadata() { return pageMetadata('居家训练，融入日常。','力量、有氧、混合循环与活动度，一套适合日常的居家训练计划。','/'); }
export default async function Home() {
  const t = await getTranslator();
  const jsonLd = { '@context':'https://schema.org', '@type':'MobileApplication', name:'LA Home Fitness', operatingSystem:'iOS', applicationCategory:'HealthApplication', downloadUrl:APP_STORE_URL, inLanguage:['en','zh-Hans'], description:t('力量、有氧、混合循环与活动度，一套适合日常的居家训练计划。') };
  return <main id="main-content">
    <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}} />
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16 md:px-8 md:py-20">
      <div>
        <p className="eyebrow">{t('你的空间，你的节奏。')}</p>
        <h1 className="mt-5 max-w-xl text-5xl font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl">{t('居家训练，融入日常。')}</h1>
        <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">{t('把力量、有氧和活动度放进一周计划。从适合自己的等级开始，跟着指导练，看到自己的坚持。')}</p>
        <div id="download" className="mt-8 flex flex-wrap items-center gap-5"><DownloadLink>{t('在 App Store 下载')}</DownloadLink><Link href="/training" className="text-sm font-semibold text-teal-800 underline-offset-4 hover:underline">{t('看看如何训练')} <span aria-hidden="true">→</span></Link></div>
        <p className="mt-4 text-xs leading-6 text-slate-500">{t('支持 iPhone 与 iPad · 英文 / 中文')}</p>
        <div className="mt-9 grid max-w-lg grid-cols-3 border-t border-slate-200 pt-6">
          {[[t('约 15 分钟'),t('常规训练')],[t('3 个等级'),t('从入门到进阶')],[t('全身训练'),t('覆盖主要肌群')]].map(([value,label])=><div key={label}><p className="text-base font-semibold text-slate-900">{value}</p><p className="mt-1 text-xs text-slate-500">{label}</p></div>)}
        </div>
      </div>
      <figure className="relative mx-auto w-full max-w-[330px] rounded-[2.7rem] border border-teal-200 bg-teal-50 px-7 pb-6 pt-7 md:max-w-[360px]">
        <div className="overflow-hidden rounded-[1.7rem] border-[5px] border-slate-900 bg-white shadow-xl shadow-teal-950/10"><Image src="/app-preview-en.jpg" alt={t('App 英文训练计划实际界面')} width={1242} height={2688} sizes="(max-width: 768px) 270px, 300px" priority /></div>
        <figcaption className="mt-4 text-center text-xs leading-5 text-teal-950/65">{t('实际 App 界面 · 可在 App 内切换中文')}</figcaption>
      </figure>
    </section>
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-3 md:px-8">
        {[
          ['01','不用每天重新想计划','每日安排热身、主要训练与拉伸，按体能等级选择动作。'],
          ['02','知道练什么，也知道怎么练','文字动作说明、演示和肌群示意，让训练更清楚。'],
          ['03','让坚持有迹可循','完成记录、连续天数和徽章，记录每一次行动。'],
        ].map(([number,title,copy])=><article key={number}><p className="text-xs font-semibold text-teal-700">{number}</p><h2 className="mt-3 text-xl font-semibold tracking-tight">{t(title)}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{t(copy)}</p></article>)}
      </div>
    </section>
    <section id="training" className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-20">
      <div className="flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">{t('更均衡的一周')}</p><h2 className="mt-3 max-w-xl text-3xl font-semibold tracking-tight md:text-4xl">{t('力量、心肺、活动度。都有安排。')}</h2></div><Link href="/training" className="text-sm font-semibold text-teal-800 hover:underline">{t('了解全部训练')} →</Link></div>
      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[['力量','徒手与哑铃，训练全身主要肌群。'],['有氧','跑步、跳绳、游泳与低冲击选项。'],['混合循环','组合力量动作和提高心率的活动。'],['活动度','热身、拉伸和专门的活动度安排。']].map(([title,copy])=><article key={title} className="rounded-2xl border border-slate-200 bg-white p-5"><h3 className="font-semibold">{t(title)}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{t(copy)}</p></article>)}</div>
      <p className="mt-5 text-xs leading-6 text-slate-500">{t('常规训练约 15 分钟；部分有氧选项为 30 分钟。动作随等级和计划调整。')}</p>
    </section>
    <section id="overview" className="mx-auto grid max-w-6xl gap-5 px-5 pb-4 md:grid-cols-2 md:px-8">
      {[
        ['/pricing','按自己的方式开始','了解 App 会员','查看月度、年度会员及包含的功能。'],
        ['/coaching','想要更多个人指导？','认识 Vincent','了解大洛杉矶地区的一对一健身与游泳指导。'],
      ].map(([href,eyebrow,title,copy])=><Link key={href} id={href === '/coaching' ? 'philosophy' : undefined} href={href} className="group rounded-3xl bg-slate-100 p-7 transition hover:bg-teal-50"><p className="text-xs font-medium text-slate-500">{t(eyebrow)}</p><h2 className="mt-3 text-2xl font-semibold">{t(title)} <span aria-hidden="true" className="inline-block text-teal-800 transition group-hover:translate-x-1">↗</span></h2><p className="mt-3 text-sm leading-7 text-slate-600">{t(copy)}</p></Link>)}
    </section>
    <DownloadBanner t={t} />
  </main>;
}
