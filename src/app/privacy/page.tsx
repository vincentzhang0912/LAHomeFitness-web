export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-14 text-slate-800">
      <article className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">隐私政策 / Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">最后更新：2026 年 4 月</p>

        <section className="mt-7 space-y-3">
          <h2 className="text-xl font-semibold">1. 我们收集的信息</h2>
          <p className="leading-7 text-slate-600">
            为提供训练计划服务，我们会收集你提供的邮箱、训练目标、体能相关信息及训练记录。
          </p>
        </section>

        <section className="mt-7 space-y-3">
          <h2 className="text-xl font-semibold">2. 信息用途</h2>
          <p className="leading-7 text-slate-600">
            用于账号登录与验证、个性化训练计划生成、训练进度追踪及产品服务优化。
          </p>
        </section>

        <section className="mt-7 space-y-3">
          <h2 className="text-xl font-semibold">3. 订阅与支付</h2>
          <p className="leading-7 text-slate-600">
            订阅支付由 Apple App Store 处理。我们不会保存你的银行卡等支付信息。
          </p>
        </section>

        <section className="mt-7 space-y-3">
          <h2 className="text-xl font-semibold">4. 联系方式</h2>
          <p className="leading-7 text-slate-600">
            如需数据删除或隐私相关帮助，请联系：vincentzys0912@gmail.com
          </p>
        </section>
      </article>
    </main>
  );
}
