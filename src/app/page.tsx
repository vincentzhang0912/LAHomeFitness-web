import Image from "next/image";

export default function Home() {
  const appStoreUrl = "https://apps.apple.com/app/id6759955941";

  return (
    <main className="min-h-screen bg-[#F8FAFC] text-[#0F172A]">
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

          <div className="mt-auto pb-16 pt-16 md:pb-20">
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
        </div>
      </section>

      <section id="philosophy" className="mx-auto max-w-6xl px-6 pb-12 pt-14">
        <div className="rounded-3xl border border-[#D1FAE5] bg-gradient-to-r from-[#ECFEFF] via-white to-[#F0FDFA] p-6 md:p-9 shadow-[0_12px_34px_rgba(13,148,136,0.10)]">
          <p className="inline-flex rounded-full border border-[#99F6E4] bg-white px-3 py-1 text-xs font-semibold text-[#0F766E]">
            Our Philosophy
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight md:text-3xl">
            我们的理念
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-8 text-[#334155] md:text-base">
            我们相信，真正的改变不来自一次“爆发式训练”，而来自可持续的日常系统：
            训练让你变强，恢复让你走得更远，规律让身体和精神一起回到正轨。
            LA居家健身希望用每天 15 分钟，帮助你把健康、体型、体能真正融入生活。
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {[
              ["Train Smart", "科学训练", "个性化计划 + 清晰节奏，练得有效。"],
              ["Recover Better", "重视恢复", "减少过度消耗，让身体可持续进步。"],
              ["Live Consistently", "长期主义", "把健康做成习惯，而不是短期冲刺。"],
            ].map(([en, zh, desc]) => (
              <div
                key={en}
                className="rounded-2xl border border-[#CCFBF1] bg-white/95 p-4 transition hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(13,148,136,0.12)]"
              >
                <p className="text-xs font-semibold tracking-wide text-[#0D9488]">{en}</p>
                <h3 className="mt-1 text-base font-bold text-[#0F172A]">{zh}</h3>
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
        <div className="relative overflow-hidden rounded-3xl border border-[#99F6E4] bg-gradient-to-r from-[#ECFEFF] to-white p-6 md:p-8 shadow-[0_12px_34px_rgba(13,148,136,0.13)]">
          <div className="pointer-events-none absolute -right-14 -top-12 h-36 w-36 rounded-full bg-[#5EEAD4]/35 blur-3xl" />
          <p className="inline-flex rounded-full border border-[#99F6E4] bg-white px-3 py-1 text-xs font-semibold text-[#0F766E]">
            Brand Mission
          </p>
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            关于我们
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-8 text-[#334155] md:text-base">
            LA居家健身是一款以「健康、体型、体能」三位一体为核心的训练 App，
            致力于用更科学、更可坚持的方式，帮助华人用户改善身体素质。
            我们相信真正有效的训练，不是短期冲刺，而是每天 15 分钟的长期积累。
          </p>
          <div className="mt-5 grid gap-3 md:grid-cols-3">
            {[
              ["健康", "降低久坐风险，帮助预防亚健康"],
              ["体型", "提升线条与体态，建立稳定习惯"],
              ["体能", "增强耐力与力量，改善日常状态"],
            ].map(([title, desc]) => (
              <div
                key={title}
                className="rounded-2xl border border-[#CCFBF1] bg-white/95 p-4 transition hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(13,148,136,0.12)]"
              >
                <h3 className="text-base font-bold text-[#0F766E]">{title}</h3>
                <p className="mt-1 text-sm text-[#475569]">{desc}</p>
              </div>
            ))}
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
              <p className="text-3xl font-black text-[#1E3A8A]">¥1188</p>
              <p className="text-xs text-[#64748B]">约 ¥99 / 月</p>
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

          <p className="mt-5 text-xs leading-6 text-[#64748B]">
            说明：线下服务地区为大洛杉矶地区，预约规则与服务细则以上线公告为准。
          </p>
        </div>
      </section>

      <section id="pro" className="mx-auto max-w-6xl px-6 pb-14">
        <div className="rounded-3xl bg-[#0F172A] p-7 text-white md:p-10">
          <p className="text-sm font-semibold text-teal-300">HomeFitness Pro</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight">标准会员：解锁完整训练系统</h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
            自动续订月度订阅，价格为 $19.99/月（或当地等价货币）。
            首次订阅可享 7 天免费试用（如适用），可在 iOS 设置中随时管理与取消。
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-xl bg-[#0D9488] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0F766E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5EEAD4]"
              href={appStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              下载并开始体验
            </a>
            <a
              className="rounded-xl border border-slate-500 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5EEAD4]"
              href="/terms"
            >
              查看使用条款
            </a>
          </div>
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
          </p>
        </div>
      </footer>
    </main>
  );
}
