import { getTranslator } from "@/i18n/server";
import ResetPasswordClient from './ResetPasswordClient';

export async function generateMetadata() {
  const t = await getTranslator();
  return {
  title: t('重置密码 | LA居家健身'),
  robots: { index: false, follow: false },
  };
}

export default function ResetPasswordPage() {
  return <ResetPasswordClient />;
}
