import Image from 'next/image';
import { getTranslator } from '@/i18n/server';
import { PageIntro } from '@/components/SiteChrome';
import { pageMetadata } from '@/lib/pageMetadata';
export function generateMetadata() { return pageMetadata('联系','联系 Vincent，咨询 App、会员或大洛杉矶地区的私教服务。','/contact'); }
export default async function ContactPage() {
  const t = await getTranslator();
  return <main id="main-content">
    <PageIntro eyebrow={t('欢迎联系')} title={t('有问题，聊一聊。')}><p>{t('无论是 App 使用、会员问题，还是希望了解本地私教服务，都可以通过以下方式联系 Vincent。')}</p></PageIntro>
    <section className="mx-auto grid max-w-6xl gap-6 px-5 pb-16 md:grid-cols-[1.1fr_0.9fr] md:px-8">
      <div className="grid gap-4 content-start">{[
        ['电话','+1 (626) 606-3363','tel:+16266063363'],
        ['邮箱','Vincentzys0912@gmail.com','mailto:Vincentzys0912@gmail.com'],
      ].map(([label,value,href])=><a key={label} href={href} className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-teal-500"><p className="text-xs font-semibold text-slate-500">{t(label)}</p><p className="mt-3 break-all text-lg font-medium text-teal-900 sm:text-xl">{value} <span aria-hidden="true">↗</span></p></a>)}
        <div className="rounded-2xl bg-slate-100 p-6"><h2 className="font-semibold">{t('本地服务范围')}</h2><p className="mt-2 text-sm leading-7 text-slate-600">{t('大洛杉矶地区。具体场馆与可预约时间，请提前联系确认。')}</p></div>
      </div>
      <div className="flex flex-col items-center rounded-3xl border border-slate-200 bg-white p-8 text-center"><h2 className="text-xl font-semibold">{t('微信联系 Vincent')}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{t('扫码添加，咨询训练与会员。')}</p><Image src="/wechat-qr.png" alt={t('微信二维码 - 添加 Vincent')} width={220} height={220} className="mt-5 rounded-xl" /><p className="mt-5 text-sm font-medium text-teal-900">WeChat: zyslovesky</p></div>
    </section>
  </main>;
}
