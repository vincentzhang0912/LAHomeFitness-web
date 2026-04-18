export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-14 text-slate-800">
      <article className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-bold">使用条款 / Terms of Use</h1>
        <p className="mt-2 text-sm text-slate-500">最后更新：2026 年 4 月</p>

        <section className="mt-7 space-y-3">
          <h2 className="text-xl font-semibold">1. 服务说明</h2>
          <p className="leading-7 text-slate-600">
            LA居家健身提供个性化居家训练计划与动作指导内容。使用本服务即表示你同意本条款。
          </p>
        </section>

        <section className="mt-7 space-y-3">
          <h2 className="text-xl font-semibold">2. 订阅信息</h2>
          <ul className="list-disc space-y-2 pl-5 text-slate-600">
            <li>订阅名称：HomeFitness Pro（自动续订月度订阅）</li>
            <li>订阅价格：$19.99/月（或当地等价货币）</li>
            <li>首次订阅可享 7 天免费试用（如适用）</li>
            <li>付款将通过 Apple ID 账户扣款</li>
            <li>可在 iOS 设置 &gt; Apple ID &gt; 订阅 中管理或取消</li>
          </ul>
        </section>

        <section className="mt-7 space-y-3">
          <h2 className="text-xl font-semibold">3. EULA</h2>
          <p className="leading-7 text-slate-600">
            本应用同时适用 Apple 标准 EULA：
            <a
              className="ml-1 text-teal-700 underline"
              href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/"
              target="_blank"
              rel="noopener noreferrer"
            >
              查看条款
            </a>
          </p>
        </section>

        <section className="mt-7 space-y-3">
          <h2 className="text-xl font-semibold">4. 联系我们</h2>
          <p className="leading-7 text-slate-600">
            邮箱：vincentzys0912@gmail.com
          </p>
        </section>
      </article>
    </main>
  );
}
