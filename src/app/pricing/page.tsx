import Link from 'next/link';
import { getTranslator } from '@/i18n/server';
import { DownloadLink, PageIntro } from '@/components/SiteChrome';
import { pageMetadata } from '@/lib/pageMetadata';
export function generateMetadata() { return pageMetadata('价格','比较 HomeFitness Pro 月度与年度会员，查看包含功能及订阅说明。','/pricing'); }
export default async function PricingPage() {
  const t = await getTranslator();
  const features = ['每日个性化训练计划','完整动作指导与演示','训练记录、积分与成就','力量、有氧、混合循环与活动度'];
  return <main id="main-content">
    <PageIntro eyebrow={t('HomeFitness Pro 会员')} title={t('简单的计划，清楚的价格。')}><p>{t('月付灵活，年付更省。两种订阅均解锁全部 App 训练功能。')}</p></PageIntro>
    <section className="mx-auto grid max-w-6xl gap-5 px-5 pb-12 md:grid-cols-2 md:px-8" aria-label={t('会员计划')}>
      {[{name:'月度会员',price:'19.99',unit:'/月',detail:'按月订阅，灵活自由',annual:false},{name:'年度会员',price:'199.99',unit:'/年',detail:'约 $16.67/月，年省近 $40',annual:true}].map(plan=><article key={plan.name} className={`rounded-3xl border p-7 md:p-9 ${plan.annual?'border-teal-700 bg-teal-950 text-white':'border-slate-200 bg-white text-slate-950'}`}>
        <div className="flex min-h-7 items-center justify-between gap-3"><h2 className="font-semibold">{t(plan.name)}</h2>{plan.annual&&<span className="rounded-full bg-teal-800 px-3 py-1 text-xs text-teal-50">{t('相比月付省约 17%')}</span>}</div>
        <p className="mt-6"><span className="text-5xl font-semibold tracking-tight">${plan.price}</span><span className={`ml-1 text-sm ${plan.annual?'text-teal-100':'text-slate-500'}`}>{t(plan.unit)}</span></p>
        <p className={`mt-3 text-sm ${plan.annual?'text-teal-100':'text-slate-500'}`}>{t(plan.detail)}</p>
        <ul className="my-8 space-y-4 text-sm">{features.map(feature=><li key={feature} className="flex gap-3"><span aria-hidden="true" className={plan.annual?'text-teal-200':'text-teal-700'}>✓</span>{t(feature)}</li>)}</ul>
        <DownloadLink tone={plan.annual?'light':'dark'} className="w-full">{t('在 App 中选择计划')}</DownloadLink>
      </article>)}
    </section>
    <section className="mx-auto max-w-6xl px-5 pb-14 md:px-8">
      <p className="max-w-3xl text-sm leading-7 text-slate-600">{t('以上为美元参考价格，最终价格、税费和可选方案以 App Store 购买页面为准。订阅自动续订，可在 Apple 账户订阅设置中管理或取消。')}</p>
      <div className="mt-4 flex flex-wrap gap-5 text-sm text-teal-800"><Link href="/terms" className="underline underline-offset-4">{t('使用条款')}</Link><Link href="/privacy" className="underline underline-offset-4">{t('隐私政策')}</Link></div>
      <div className="mt-10 border-t border-slate-200 pt-8"><h2 className="text-xl font-semibold">{t('需要一对一指导？')}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{t('LA Elite 是单独的本地私教服务，可了解健身、游泳及动作评估。')}</p><Link href="/coaching" className="mt-4 inline-block text-sm font-semibold text-teal-800 hover:underline">{t('了解私教服务')} →</Link></div>
    </section>
  </main>;
}
