import Image from "next/image";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "LA居家健身",
      alternateName: "LAHomeFitness",
      url: "https://www.lahomefitness.com",
      logo: "https://www.lahomefitness.com/brand-app-icon.png",
      description:
        "面向洛杉矶华人的居家健身 App，每天15分钟科学训练，改善亚健康、提升体能。",
      sameAs: ["https://apps.apple.com/app/id6759955941"],
      contactPoint: {
        "@type": "ContactPoint",
        email: "vincentzys0912@gmail.com",
        contactType: "customer support",
        availableLanguage: ["Chinese", "English"],
      },
    },
    {
      "@type": "MobileApplication",
      name: "LA居家健身",
      operatingSystem: "iOS",
      applicationCategory: "HealthApplication",
      offers: {
        "@type": "Offer",
        price: "19.99",
        priceCurrency: "USD",
        description: "HomeFitness Pro 月度订阅",
      },
      downloadUrl: "https://apps.apple.com/app/id6759955941",
      description:
        "每天15分钟居家健身，科学编排热身/正式训练/拉伸，专业动作视频，智能训练计划与数据追踪。",
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "LA居家健身每天需要练多久？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "每天只需15分钟，App 会科学编排热身、正式训练和拉伸放松，适合忙碌的上班族和居家人群。",
          },
        },
        {
          "@type": "Question",
          name: "LA居家健身适合什么人群？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "适合所有想居家锻炼的华人，特别是洛杉矶地区的华人。无论你是新手还是有基础，App 都会根据你的体能水平定制计划。",
          },
        },
        {
          "@type": "Question",
          name: "15分钟运动真的有效果吗？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "2026年UCL研究证实，15分钟中等强度运动即可显著释放BDNF（大脑的养料），提升专注力与情绪。规律的短时间训练比偶尔的长时间训练更有效。",
          },
        },
      ],
    },
  ],
};

export default function Home() {
  const appStoreUrl = "https://apps.apple.com/app/id6759955941";

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section
        className="relative min-h-[92vh] overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(106deg, rgba(2,6,23,0.82) 0%, rgba(2,6,23,0.54) 38%, rgba(13,148,136,0.38) 100%), url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=2400&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center 24%",
        }}
      >
        <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-[#2DD4BF]/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-8 h-96 w-96 rounded-full bg-[#0D9488]/20 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.45) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <div className="mx-auto flex min-h-[92vh] max-w-6xl flex-col px-6 py-8">
          <header>
            <nav
              aria-label="主导航"
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="relative h-14 w-14">
                  <Image
                    src="/brand-app-icon.png"
                    alt="LA居家健身图标"
                    fill
                    className="object-contain object-center"
                    priority
                  />
                </div>
                <div>
                  <span className="block text-sm font-semibold text-white">LA居家健身</span>
                  <span className="block text-[11px] text-teal-100/90">LAHomeFitness</span>
                </div>
              </div>
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#0D9488] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#0F766E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5EEAD4]"
              >
                获取 App
              </a>
            </nav>
          </header>

          <div className="mt-auto grid items-end gap-8 pb-16 pt-16 md:grid-cols-[1fr_auto] md:pb-20">
            <div>
            <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
              每天15分钟，
              <br />
              口袋里的私教
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-100 md:text-lg">
              智能生成训练计划，配合专业动作演示与进度追踪，
              让你在家也能稳定进步，持续变强。每天 15 分钟，帮助预防亚健康。
            </p>
            <div id="download" className="mt-8 flex flex-wrap gap-3">
              <a
                className="rounded-xl bg-[#0D9488] px-6 py-3 text-sm font-bold text-white shadow-[0_8px_28px_rgba(13,148,136,0.4)] transition hover:bg-[#0F766E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5EEAD4]"
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                在 App Store 下载
              </a>
              <a
                className="rounded-xl border border-white/35 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5EEAD4]"
                href="#philosophy"
              >
                了解我们的理念
              </a>
            </div>
            <p className="mt-4 text-sm font-medium text-teal-100/95">
              更多洛杉矶华人，正在加入 LA居家健身。
            </p>
            <div className="mt-8 grid max-w-3xl grid-cols-3 gap-3 text-white/95">
              {[
                ["15 分钟", "日均训练时长"],
                ["4 周", "可感知体能变化"],
                ["100%", "居家可完成"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur"
                >
                  <p className="text-lg font-bold md:text-xl">{k}</p>
                  <p className="mt-0.5 text-xs text-slate-200">{v}</p>
                </div>
              ))}
            </div>
            </div>

            <div className="hidden md:block">
              <div className="relative mx-auto w-[220px]">
                <div className="rounded-[2.5rem] border-[3px] border-white/20 bg-[#0B1020] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                  <div className="overflow-hidden rounded-[2rem] bg-gradient-to-b from-[#0F766E] to-[#0B1020]">
                    <div className="px-4 pb-3 pt-10 text-center">
                      <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                        <Image
                          src="/brand-app-icon.png"
                          alt="App Icon"
                          width={40}
                          height={40}
                          className="rounded-xl"
                        />
                      </div>
                      <p className="text-[11px] font-bold text-white">LA居家健身</p>
                      <p className="mt-0.5 text-[9px] text-white/60">今日训练计划</p>
                    </div>
                    <div className="space-y-2 px-3 pb-4">
                      <div className="rounded-xl bg-white/10 p-3 backdrop-blur">
                        <p className="text-[9px] font-semibold text-[#5EEAD4]">热身 · 5 min</p>
                        <p className="mt-0.5 text-[8px] text-white/50">全身动态拉伸</p>
                      </div>
                      <div className="rounded-xl bg-white/10 p-3 backdrop-blur">
                        <p className="text-[9px] font-semibold text-[#5EEAD4]">正式训练 · 8 min</p>
                        <p className="mt-0.5 text-[8px] text-white/50">上肢 + 核心力量</p>
                      </div>
                      <div className="rounded-xl bg-white/10 p-3 backdrop-blur">
                        <p className="text-[9px] font-semibold text-[#5EEAD4]">拉伸放松 · 2 min</p>
                        <p className="mt-0.5 text-[8px] text-white/50">肌肉放松与呼吸</p>
                      </div>
                    </div>
                    <div className="border-t border-white/10 px-3 py-3 text-center">
                      <p className="text-[10px] font-bold text-white">✅ 已坚持 28 天</p>
                    </div>
                  </div>
                </div>
                <div className="pointer-events-none absolute -bottom-4 -right-4 h-24 w-24 rounded-full bg-[#2DD4BF]/25 blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="philosophy" className="mx-auto max-w-6xl px-6 pb-12 pt-14">
        <div className="relative overflow-hidden rounded-3xl border border-[#D1FAE5] bg-gradient-to-r from-[#ECFEFF] via-white to-[#F0FDFA] p-6 md:p-9 shadow-[0_12px_34px_rgba(13,148,136,0.10)]">
          <div className="pointer-events-none absolute -right-14 -top-12 h-36 w-36 rounded-full bg-[#5EEAD4]/35 blur-3xl" />
          <p className="inline-flex rounded-full border border-[#99F6E4] bg-white px-3 py-1 text-xs font-semibold text-[#0F766E]">
            About & Philosophy
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            关于 LA居家健身
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-8 text-[#334155] md:text-base">
            LA居家健身是一款以「健康、体型、体能」三位一体为核心的训练 App。
            我们相信，真正的改变不来自一次“爆发式训练”，而来自可持续的日常系统——
            训练让你变强，恢复让你走得更远，规律让身体和精神一起回到正轨。
            每天 15 分钟，帮助你把健康真正融入生活。
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              ["Train Smart", "科学训练", "个性化计划 + 清晰节奏，练得有效。"],
              ["Recover Better", "重视恢复", "减少过度消耗，让身体可持续进步。"],
              ["Live Consistently", "长期主义", "把健康做成习惯，而不是短期冲刺。"],
              ["健康", "", "降低久坐风险，帮助预防亚健康。"],
              ["体型", "", "提升线条与体态，建立稳定习惯。"],
              ["体能", "", "增强耐力与力量，改善日常状态。"],
            ].map(([en, zh, desc]) => (
              <div
                key={en}
                className="rounded-2xl border border-[#CCFBF1] bg-white/95 p-4 transition hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(13,148,136,0.12)]"
              >
                {zh ? (
                  <>
                    <p className="text-xs font-semibold tracking-wide text-[#0D9488]">{en}</p>
                    <h3 className="mt-1 text-base font-bold text-[#0F172A]">{zh}</h3>
                  </>
                ) : (
                  <h3 className="text-base font-bold text-[#0F766E]">{en}</h3>
                )}
                <p className="mt-1 text-sm leading-6 text-[#475569]">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="overview" className="mx-auto max-w-6xl px-6 pb-12 pt-14">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">产品亮点</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-[0_12px_34px_rgba(15,23,42,0.07)]">
            <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 rounded-full bg-[#CCFBF1] blur-2xl" />
            <p className="inline-flex rounded-full border border-[#99F6E4] bg-[#F0FDFA] px-3 py-1 text-xs font-semibold text-[#0F766E]">
              Core Module
            </p>
            <h3 className="mt-3 text-xl font-bold">核心功能</h3>
            <p className="mt-1 text-sm text-[#64748B]">四大能力，组成完整训练闭环</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                ["智能训练计划", "根据目标与体能，每日动态生成训练方案。"],
                ["专业动作视频", "正面 + 侧面双角度演示，降低动作错误风险。"],
                ["数据追踪", "打卡记录、连续天数、成就徽章，强化长期习惯。"],
                ["完整动作库", "热身、主训练、拉伸全链路覆盖。"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-[#E2E8F0] bg-gradient-to-b from-white to-[#F8FAFC] p-4 transition hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(15,23,42,0.08)]"
                >
                  <h4 className="text-sm font-bold">{title}</h4>
                  <p className="mt-1 text-xs leading-6 text-[#475569]">{desc}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="relative overflow-hidden rounded-3xl border border-[#99F6E4] bg-gradient-to-b from-[#F0FDFA] to-white p-6 shadow-[0_12px_34px_rgba(13,148,136,0.12)]">
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#5EEAD4]/40 blur-2xl" />
            <p className="inline-flex rounded-full border border-[#99F6E4] bg-white px-3 py-1 text-xs font-semibold text-[#0F766E]">
              Guided Flow
            </p>
            <h3 className="mt-3 text-xl font-bold">使用流程</h3>
            <p className="mt-1 text-sm text-[#0F766E]">从开始到坚持，只要 3 步</p>
            <div className="mt-5 space-y-3">
              {[
                ["01", "3分钟完成评估", "输入体能与目标，系统自动生成你的专属训练路径。"],
                ["02", "每天15分钟高效训练", "跟着计划完成热身、主训练、拉伸，简单但有效。"],
                ["03", "4周看见真实变化", "用打卡和数据追踪体能提升，让坚持更有反馈。"],
              ].map(([idx, title, desc]) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-[#CCFBF1] bg-white/95 p-4 transition hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(13,148,136,0.12)]"
                >
                  <p className="text-xs font-bold tracking-wider text-[#0D9488]">{idx}</p>
                  <h4 className="mt-1 text-base font-bold">{title}</h4>
                  <p className="mt-1 text-sm leading-6 text-[#475569]">{desc}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="rounded-3xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-[0_12px_34px_rgba(15,23,42,0.07)]">
          <div className="mb-6">
            <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
              为什么选择 LA居家健身
            </h2>
            <p className="mt-1 text-sm text-[#64748B]">
              一眼看懂：传统线下 vs 居家智能训练 · 更多洛杉矶华人正在加入
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#E2E8F0]">
            <div className="grid grid-cols-3 bg-[#F8FAFC] text-sm font-semibold text-[#334155]">
              <div className="border-r border-[#E2E8F0] px-4 py-3">对比维度</div>
              <div className="border-r border-[#E2E8F0] px-4 py-3">传统线下健身</div>
              <div className="px-4 py-3 text-[#0F766E]">LA居家健身</div>
            </div>

            {[
              ["时间成本", "来回通勤常常 30 分钟+", "打开 App 即可开始，训练更聚焦"],
              ["金钱成本", "私教月花费通常几百美元", "订阅成本更轻，长期更可持续"],
              ["训练灵活性", "受场馆时间和地点限制", "起床/午休/下班/睡前都能练"],
              ["动作科学性", "动作单一，缺乏系统规划", "科学编排热身/正式/拉伸，动作库丰富"],
              ["大脑与情绪", "长时间训练易疲惫，难以持续", "15 分钟激活多巴胺与 BDNF（大脑的养料），提升专注力"],
              ["坚持难度", "门槛高，容易中断", "每天 15 分钟，小目标更容易坚持"],
              ["健康收益", "训练频率不稳定", "规律训练，持续改善亚健康与体能"],
            ].map(([k, offline, app]) => (
              <div
                key={k}
                className="grid grid-cols-3 border-t border-[#E2E8F0] text-sm"
              >
                <div className="border-r border-[#E2E8F0] bg-[#FCFDFE] px-4 py-4 font-semibold text-[#0F172A]">
                  {k}
                </div>
                <div className="border-r border-[#E2E8F0] px-4 py-4 text-[#64748B]">
                  {offline}
                </div>
                <div className="bg-[#F0FDFA] px-4 py-4 font-medium text-[#0F766E]">
                  {app}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs leading-relaxed text-[#94A3B8]">
            * 参考来源：《运动改造大脑》John Ratey — 规律运动提升多巴胺、血清素与 BDNF，强化专注力与情绪调节；2026 UCL 研究证实 15 分钟中等强度运动即可显著释放 BDNF。
          </p>
        </div>
      </section>


      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="rounded-3xl border border-[#0D9488]/20 bg-[#0B1020] p-6 md:p-10 shadow-[0_16px_48px_rgba(0,0,0,0.25)]">
          <p className="inline-flex rounded-full border border-[#2DD4BF]/30 bg-[#2DD4BF]/10 px-3 py-1 text-xs font-semibold text-[#5EEAD4]">
            Best Investment
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-white md:text-3xl">
            每月 $19.99，可能是你最值的一笔消费
          </h2>
          <p className="mt-2 text-sm text-[#94A3B8]">
            一杯咖啡的钱，换一整月的改变
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["🧠", "大脑升级", "激活多巴胺与 BDNF，更专注、更快乐、更高效"],
              ["📋", "科学训练计划", "每日自动生成，省去私教 $200+/月"],
              ["🎬", "100+ 专业动作视频", "中文讲解 + 肌肉示意，零基础也能做对"],
              ["😴", "睡眠与健康改善", "规律运动预防亚健康，少生病 = 少花钱"],
              ["👔", "体型改善", "穿衣更好看，自信是最好的投资"],
              ["⏱️", "省下 15 小时/月", "不用通勤，起床到练完只要 15 分钟"],
              ["📊", "数据追踪 + 成就系统", "看得见的坚持，戒不掉的习惯"],
              ["🔄", "灵活随时练", "起床/午休/下班/睡前，任何时间都是你的健身房"],
            ].map(([emoji, title, desc]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition hover:border-[#2DD4BF]/30 hover:bg-white/[0.07]"
              >
                <span className="text-2xl">{emoji}</span>
                <h3 className="mt-2 text-sm font-bold text-white">{title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-[#94A3B8]">{desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-[#2DD4BF]/20 bg-[#2DD4BF]/[0.06] px-6 py-6 text-center">
            <p className="text-xs font-semibold text-[#5EEAD4]">HomeFitness Pro</p>
            <p className="mt-2 text-2xl font-black text-white">
              $19.99<span className="text-sm font-normal text-[#94A3B8]"> /月</span>
            </p>
            <p className="mt-1 text-sm text-[#5EEAD4]">
              别人花 $19.99 买了一顿饭，你买了一个更好的自己
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://apps.apple.com/app/id6759955941"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#0F766E] px-8 py-3 text-sm font-bold text-white shadow-lg shadow-[#0F766E]/30 transition hover:brightness-110"
              >
                下载并开始体验
              </a>
              <a
                className="inline-flex items-center rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white/80 transition hover:border-white/40"
                href="/terms"
              >
                查看使用条款
              </a>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-[#64748B]">
              自动续订月度订阅 · 首次订阅可享 7 天免费试用（如适用） · 可在 iOS 设置中随时管理与取消
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-12">
        <div className="rounded-3xl border border-[#BFDBFE] bg-gradient-to-br from-[#EFF6FF] via-white to-[#F8FAFC] p-6 md:p-8 shadow-[0_12px_34px_rgba(30,64,175,0.10)]">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="inline-flex rounded-full border border-[#BFDBFE] bg-white px-3 py-1 text-xs font-semibold text-[#1D4ED8]">
                Premium Plus
              </p>
              <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
                LA Elite 私教会员
              </h2>
              <p className="mt-2 text-sm text-[#475569]">
                面向希望获得更深度指导的会员
              </p>
            </div>
            <div className="rounded-2xl border border-[#BFDBFE] bg-white px-5 py-4 text-right">
              <p className="text-xs text-[#64748B]">年费</p>
              <p className="text-3xl font-black text-[#1E3A8A]">$1188</p>
              <p className="text-xs text-[#64748B]">约 $99 / 月</p>
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {[
              ["每月 1 节线下私教服务", "线下当面指导，动作质量更稳定。"],
              ["动作纠正", "针对关键动作进行纠错，降低受伤风险。"],
              ["1v1 线上动作评估", "远程评估动作质量，及时给出调整建议。"],
              ["饮食指导", "结合目标给出可执行的日常饮食建议。"],
              ["健康顾问支持", "围绕训练、恢复、作息提供综合建议。"],
            ].map(([title, desc]) => (
              <article
                key={title}
                className="rounded-2xl border border-[#DBEAFE] bg-white p-4 transition hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(30,64,175,0.10)]"
              >
                <h3 className="text-base font-bold text-[#0F172A]">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-[#475569]">{desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-6 flex flex-col items-center gap-4 rounded-2xl border border-[#BFDBFE] bg-white p-6 sm:flex-row sm:items-start sm:gap-6">
            <div className="shrink-0">
              <Image
                src="/wechat-qr.png"
                alt="微信二维码 - 添加 Vincent"
                width={140}
                height={140}
                className="rounded-xl"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="text-base font-bold text-[#0F172A]">添加微信，了解 Elite 私教详情</p>
              <p className="mt-1 text-sm text-[#475569]">
                扫码添加教练 Vincent 微信，获取一对一咨询、体验线下服务或了解更多会员权益。
              </p>
              <p className="mt-2 text-xs text-[#94A3B8]">
                微信号：zyslovesky · 坐标洛杉矶
              </p>
            </div>
          </div>

          <p className="mt-5 text-xs leading-6 text-[#64748B]">
            说明：线下服务地区为大洛杉矶地区，预约规则与服务细则以上线公告为准。
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-14">
        <div className="mb-6">
          <p className="inline-flex rounded-full border border-[#E2E8F0] bg-white px-3 py-1 text-xs font-semibold text-[#0F766E]">
            Member Voices
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            会员评价
          </h2>
          <p className="mt-1 text-sm text-[#64748B]">
            来自真实用户的训练反馈
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              name: "Lily · Arcadia",
              role: "上班族 · 使用 6 周",
              avatar:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
              quote:
                "以前总觉得没时间去健身房，现在每天 15 分钟在家跟练，4 周后体能和精神状态都明显好了。",
            },
            {
              name: "Jason · Irvine",
              role: "程序员 · 使用 8 周",
              avatar:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
              quote:
                "动作视频非常清晰，计划也很适合上班族。我最喜欢的是打卡和进度记录，真的能让人坚持。",
            },
            {
              name: "Mina · Pasadena",
              role: "宝妈 · 使用 5 周",
              avatar:
                "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=300&q=80",
              quote:
                "线下私教太贵，这个 App 的性价比高很多。训练不复杂但很有效，体态改善很明显。",
            },
          ].map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-[#E2E8F0] bg-gradient-to-b from-white to-[#F8FAFC] p-5 shadow-[0_8px_20px_rgba(15,23,42,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(15,23,42,0.1)]"
            >
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-[#CCFBF1]"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-[#0F172A]">{item.name}</p>
                  <p className="text-xs text-[#64748B]">{item.role}</p>
                </div>
              </div>
              <div className="mb-3 flex items-center justify-between">
                <div className="text-sm tracking-wide text-amber-400">★★★★★</div>
                <span className="rounded-full bg-[#ECFEFF] px-2 py-0.5 text-[11px] font-semibold text-[#0F766E]">
                  真实反馈
                </span>
              </div>
              <p className="text-sm leading-7 text-[#334155]">“{item.quote}”</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#E2E8F0] bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-[#64748B]">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} LA居家健身</p>
            <div className="flex items-center gap-3">
              <a className="text-[#0F766E] hover:underline" href="/privacy">
                隐私政策
              </a>
              <span aria-hidden="true">·</span>
              <a className="text-[#0F766E] hover:underline" href="/terms">
                使用条款
              </a>
            </div>
          </div>
          <p className="mt-2">
            商务与支持：
            <a className="text-[#0F766E] hover:underline" href="mailto:vincentzys0912@gmail.com">
              {" "}
              vincentzys0912@gmail.com
            </a>
            <span className="mx-2" aria-hidden="true">·</span>
            微信：zyslovesky（扫码添加见 Elite 私教板块）
          </p>
        </div>
      </footer>
    </main>
  );
}
