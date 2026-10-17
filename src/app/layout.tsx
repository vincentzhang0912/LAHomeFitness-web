import { getLanguage, getTranslator } from "@/i18n/server";
import { LanguageProvider, LanguageSwitcher } from "@/i18n/LanguageProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslator();
  const language = await getLanguage();
  return {
  title: t("LA居家健身 | 每天15分钟，口袋里的私教"),
  description:
    t("LA居家健身是面向洛杉矶华人的居家健身 App。每天15分钟，科学编排热身、正式训练与拉伸，配合专业动作视频、智能训练计划与数据追踪，帮助改善亚健康、提升体能。支持 iPhone，App Store 下载。"),
  keywords: [
    t("LA居家健身"),
    t("居家健身"),
    t("洛杉矶华人健身"),
    t("每天15分钟健身"),
    t("居家训练App"),
    t("华人健身App"),
    "HomeFitness",
    "LAHomeFitness",
    t("家庭健身计划"),
    t("亚健康改善"),
  ],
  authors: [{ name: t("LA居家健身"), url: "https://www.lahomefitness.com" }],
  creator: t("LA居家健身"),
  publisher: t("LA居家健身"),
  metadataBase: new URL("https://www.lahomefitness.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: language === 'en' ? 'en_US' : 'zh_CN',
    alternateLocale: [language === 'en' ? 'zh_CN' : 'en_US'],
    url: "https://www.lahomefitness.com",
    siteName: t("LA居家健身"),
    title: t("LA居家健身 | 每天15分钟，口袋里的私教"),
    description:
      t("面向洛杉矶华人的居家健身 App。科学训练计划、专业动作视频、数据追踪，每天15分钟改善亚健康。"),
    images: [
      {
        url: "/brand-app-icon.png",
        width: 512,
        height: 512,
        alt: t("LA居家健身 App 图标"),
      },
    ],
  },
  twitter: {
    card: "summary",
    title: t("LA居家健身 | 每天15分钟，口袋里的私教"),
    description:
      t("面向洛杉矶华人的居家健身 App。科学训练 + 专业视频 + 数据追踪。"),
    images: ["/brand-app-icon.png"],
  },
  icons: {
    icon: "/favicon.ico?v=5",
    shortcut: "/favicon.ico?v=5",
    apple: "/apple-touch-icon.png?v=5",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const language = await getLanguage();
  return (
    <html
      lang={language === 'en' ? 'en' : 'zh-CN'}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider language={language}>{children}<LanguageSwitcher /></LanguageProvider>
      </body>
    </html>
  );
}
