type Props = { t: (value: string) => string };

export function TrainingOverview({ t }: Props) {
  const modes = [
    { number: '01', title: '力量与抗阻训练', tag: '建立力量', examples: '徒手与哑铃：深蹲、俯卧撑、划船、臀桥与推举。', benefit: '通过逐步增加阻力与训练量，帮助增强肌肉力量、维持或增加肌肉量，让提物、上楼等日常动作更轻松。' },
    { number: '02', title: '有氧与耐力训练', tag: '提升心肺', examples: '跑步、跳绳、游泳，以及适合入门的低冲击有氧动作。', benefit: '持续、有节奏的活动帮助提升心肺适能与耐力。规律运动也有助于睡眠和情绪，让日常活动更有余力。' },
    { number: '03', title: '混合循环与 HIIT', tag: '兼顾力量与体能', examples: '把深蹲、弓步、登山跑等动作与训练、休息间歇组合，按等级调整难度。', benefit: '混合循环将力量动作与提高心率的活动放在同一训练中；达到相应强度的 HIIT 交替安排高强度活动与恢复，可提升有氧和无氧适能。' },
    { number: '04', title: '热身、活动度与拉伸', tag: '完善训练流程', examples: '动态热身、猫牛式、肩胸打开、髋部和腿部拉伸。', benefit: '训练前逐步进入运动状态，训练后放慢节奏，并为活动度安排专门时间，让一周的训练更完整。' },
  ];
  const muscles = [
    { title: '上肢与背部', description: '胸肌、肩部、背部、肱二头肌与肱三头肌', exercises: '俯卧撑 · 划船 · 弯举 · 推举' },
    { title: '核心与躯干稳定', description: '腹部、腹斜肌及参与躯干稳定的肌群', exercises: '平板支撑 · 死虫式 · 鸟狗式 · 侧平板' },
    { title: '臀腿与小腿', description: '臀肌、股四头肌、腘绳肌与小腿肌群', exercises: '深蹲 · 弓步 · 臀桥 · 提踵' },
  ];
  const week = ['周一：胸臂', '周二：背部', '周三：臀腿', '周四：核心与肩', '周五：混合循环', '周六：有氧耐力', '周日：拉伸活动'];
  return (
    <section id="training" aria-labelledby="training-heading" className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <div className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-700">{t('多种训练，一套日常计划')}</p>
        <h2 id="training-heading" className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">{t('练力量，也练心肺。全身主要肌群，都有安排。')}</h2>
        <p className="mt-5 text-base leading-8 text-slate-600">{t('LA Home Fitness 将力量、有氧、混合循环与拉伸活动组合到一周计划中，兼顾上肢、核心与下肢。无需在不同 App 之间拼凑日常训练。')}</p>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {modes.map(mode => (
          <article key={mode.number} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between gap-3">
              <span aria-hidden="true" className="text-sm font-bold text-teal-700">{mode.number}</span>
              <span className="rounded-full bg-teal-50 px-3 py-1 text-xs font-semibold text-teal-800">{t(mode.tag)}</span>
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-900">{t(mode.title)}</h3>
            <p className="mt-3 text-sm font-medium leading-7 text-slate-700">{t(mode.examples)}</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">{t(mode.benefit)}</p>
          </article>
        ))}
      </div>
      <div className="mt-6 rounded-2xl border border-teal-200 bg-teal-50/70 p-5 md:p-6">
        <h3 className="font-bold text-teal-950">{t('力量、有氧和 HIIT，有什么区别？')}</h3>
        <p className="mt-2 text-sm leading-7 text-slate-700">{t('力量训练常被称为“无氧训练”，但各种运动都会不同程度地使用有氧与无氧供能。HIIT 指高强度活动与恢复交替的训练方式，不是“有氧加力量”的同义词；普通混合循环也不一定达到 HIIT 强度。')}</p>
        <p className="mt-2 text-sm leading-7 text-slate-700">{t('按体能等级选择适合的难度：入门可以从低冲击、较温和的循环开始，不必追求高强度。常规训练约 15 分钟；部分有氧选项为 30 分钟。')}</p>
      </div>
      <div className="mt-10 rounded-3xl bg-slate-950 p-6 text-white md:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal-300">{t('全身主要肌群覆盖')}</p>
        <h3 className="mt-3 text-2xl font-bold">{t('从胸背肩臂，到核心臀腿')}</h3>
        <div className="mt-6 grid gap-5 md:grid-cols-3">
          {muscles.map(group => (
            <div key={group.title} className="rounded-2xl border border-white/15 bg-white/5 p-5">
              <h4 className="text-lg font-bold text-teal-200">{t(group.title)}</h4>
              <p className="mt-3 text-sm leading-7 text-slate-200">{t(group.description)}</p>
              <p className="mt-4 text-xs leading-6 text-slate-400">{t(group.exercises)}</p>
            </div>
          ))}
        </div>
        <h4 className="mt-8 text-sm font-semibold text-white">{t('一周训练主题示例')}</h4>
        <div className="mt-3 flex flex-wrap gap-2">
          {week.map(day => <span key={day} className="rounded-full border border-white/20 px-3 py-2 text-xs text-slate-200">{t(day)}</span>)}
        </div>
        <p className="mt-4 text-xs leading-6 text-slate-400">{t('具体动作随体能等级与计划调整。这里指一周计划覆盖主要肌群，不代表每次训练都练遍每一块肌肉，也不替代所有专项训练。')}</p>
      </div>
      <p className="mt-5 text-xs leading-6 text-slate-500">
        {t('运动益处参考：')}{' '}
        <a className="underline underline-offset-2" href="https://www.cdc.gov/physical-activity-basics/benefits/" target="_blank" rel="noopener noreferrer">CDC</a>{' · '}
        <a className="underline underline-offset-2" href="https://www.acsm.org/docs/default-source/files-for-resource-library/high-intensity-interval-training.pdf" target="_blank" rel="noopener noreferrer">ACSM — HIIT</a>
      </p>
    </section>
  );
}
