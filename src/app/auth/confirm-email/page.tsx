import { getTranslator } from "@/i18n/server";
import ConfirmEmailClient from './ConfirmEmailClient';

export async function generateMetadata() {
  const t = await getTranslator();
  return {
  title: t('确认邮箱 | LA居家健身'),
  robots: { index: false, follow: false },
  };
}

export default function ConfirmEmailPage() {
  return <ConfirmEmailClient />;
}
