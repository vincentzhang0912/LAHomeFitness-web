import { getTranslator } from '@/i18n/server';
import { TrainingOverview } from '@/components/TrainingOverview';
import { DownloadBanner } from '@/components/SiteChrome';
import { pageMetadata } from '@/lib/pageMetadata';
export function generateMetadata() { return pageMetadata('训练','了解力量、有氧、混合循环与 HIIT，以及一周计划覆盖的主要肌群。','/training'); }
export default async function TrainingPage() {
  const t = await getTranslator();
  return <main id="main-content"><TrainingOverview t={t} /><DownloadBanner t={t} /></main>;
}
