"use client";

import { useEffect, useState } from "react";
import { getSupabaseBrowser } from "@/lib/supabase-browser";
import { applyAuthFromUrl } from "@/lib/applyAuthFromUrl";

export default function ConfirmEmailClient() {
  const [status, setStatus] = useState<"loading" | "ok" | "err">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const supabase = getSupabaseBrowser();
        const res = await applyAuthFromUrl(supabase, "signup");
        if (cancelled) return;
        setStatus(res.ok ? "ok" : "err");
        setMessage(res.message);
      } catch (e) {
        if (cancelled) return;
        setStatus("err");
        setMessage(e instanceof Error ? e.message : "配置错误：请检查环境变量");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-5 py-12 text-[#0F172A]">
      <section className="w-full max-w-[440px] rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
        <div className="mb-6 text-center">
          <p className="text-sm font-bold text-[#0F766E]">LA居家健身</p>
          <h1 className="mt-2 text-2xl font-extrabold">确认邮箱</h1>
        </div>

        {status === "loading" && <p className="text-[15px] leading-7 text-slate-500">正在验证链接...</p>}

        {status === "ok" && (
          <>
            <p className="text-base font-semibold text-emerald-600">{message}</p>
            <p className="mt-3 text-[15px] leading-7 text-slate-500">请返回「LA居家健身」App 使用你的账号登录。</p>
          </>
        )}

        {status === "err" && (
          <>
            <p className="text-[15px] font-semibold text-red-700">{message}</p>
            <p className="mt-3 text-[15px] leading-7 text-slate-500">若链接已过期，请在 App 中重新注册或联系支持。</p>
          </>
        )}
      </section>
    </main>
  );
}
