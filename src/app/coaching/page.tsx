import Link from 'next/link';
import { getTranslator } from '@/i18n/server';
import { PageIntro } from '@/components/SiteChrome';
import { pageMetadata } from '@/lib/pageMetadata';
export function generateMetadata() { return pageMetadata('私教','认识教练 Vincent，了解大洛杉矶地区的健身、游泳与一对一训练指导。','/coaching'); }
export default async function CoachingPage() {
  const t = await getTranslator();
  return <main id="main-content">
    <PageIntro eyebrow={t('认识 Vincent')} title={t('App 之外，也有人陪你练。')}><p>{t('面向大洛杉矶地区，希望获得更深入个人指导的会员。围绕训练、动作和日常习惯，一起找到适合你的节奏。')}</p></PageIntro>
    <section id="philosophy" className="mx-auto max-w-6xl px-5 pb-12 md:px-8">
      <div className="grid gap-8 rounded-3xl bg-teal-950 p-7 text-white md:grid-cols-[1fr_1.3fr] md:p-10"><div><p className="eyebrow text-teal-300">{t('我们的理念')}</p><h2 className="mt-3 text-3xl font-semibold">{t('练得规律，走得长远。')}</h2></div><p className="text-sm leading-8 text-teal-50/90">{t('我们相信，持续进步来自合适的训练、恢复和日常习惯。App 提供清楚的计划，个人指导帮助你理解自己的动作与节奏；两者都服务于一个目标：让运动成为生活的一部分。')}</p></div>
      <div className="mt-10 flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">LA Elite</p><h2 className="mt-3 text-3xl font-semibold">{t('LA Elite 私教会员')}</h2></div><Link href="/contact" className="rounded-full bg-teal-800 px-6 py-3 text-sm font-semibold text-white hover:bg-teal-900">{t('联系 Vincent')} ↗</Link></div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">{[
        ['每周 1 节线下私教课','可选择健身课或游泳课，享受一对一当面指导。'],
        ['动作纠正','围绕关键动作提供清楚的技术反馈。'],
        ['1v1 线上动作评估','远程评估动作质量，及时给出调整建议。'],
        ['饮食与日常习惯指导','围绕目标、训练、恢复与日常饮食，提供可执行的建议。'],
      ].map(([title,copy])=><article key={title} className="rounded-2xl border border-slate-200 bg-white p-6"><h3 className="font-semibold">{t(title)}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{t(copy)}</p></article>)}</div>
      <div className="mt-6 grid gap-4 rounded-2xl bg-slate-100 p-6 sm:grid-cols-2"><div><p className="text-sm text-slate-600">{t('私教会员年费')}</p><p className="mt-2 text-3xl font-semibold">$3,980</p></div><div><p className="text-sm text-slate-600">{t('指定健身房年费')}</p><p className="mt-2 text-3xl font-semibold">$2,980</p></div><p className="text-xs leading-6 text-slate-500 sm:col-span-2">{t('联系确认场馆、预约安排与费用细则。App 订阅与本地私教服务分别提供。')}</p></div>
      <details className="mt-6 rounded-2xl border border-slate-200 bg-white p-5"><summary className="cursor-pointer text-sm font-medium">{t('本地服务与预约说明')}</summary><p className="mt-4 text-sm leading-7 text-slate-600">{t('说明：线下服务地区为大洛杉矶地区。如遇突发紧急事件或特殊情况，教练可能需临时请假，届时将尽早通知会员。由此暂停的课程不另行提供补课。预约规则与服务细则以上线公告为准。')}</p></details>
    </section>
  </main>;
}
