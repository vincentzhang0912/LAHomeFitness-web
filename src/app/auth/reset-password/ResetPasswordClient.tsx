"use client";

import { FormEvent, useEffect, useState } from "react";
import { getSupabaseBrowser } from "@/lib/supabase-browser";
import { applyAuthFromUrl } from "@/lib/applyAuthFromUrl";

export default function ResetPasswordClient() {
  const [phase, setPhase] = useState<"loading" | "needlink" | "form" | "done" | "err">("loading");
  const [errMsg, setErrMsg] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwd2, setPwd2] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const supabase = getSupabaseBrowser();
        const res = await applyAuthFromUrl(supabase, "recovery");
        if (cancelled) return;
        if (res.ok) {
          setPhase("form");
        } else if (res.message.includes("无效") || res.message.includes("链接")) {
          setPhase("needlink");
          setErrMsg(res.message);
        } else {
          setPhase("err");
          setErrMsg(res.message);
        }
      } catch (e) {
        if (cancelled) return;
        setPhase("err");
        setErrMsg(e instanceof Error ? e.message : "配置错误：请检查环境变量");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (pwd.length < 6) {
      setErrMsg("密码至少 6 位");
      return;
    }
    if (pwd !== pwd2) {
      setErrMsg("两次密码不一致");
      return;
    }
    setSubmitting(true);
    setErrMsg("");
    try {
      const supabase = getSupabaseBrowser();
      const { error } = await supabase.auth.updateUser({ password: pwd });
      if (error) {
        setErrMsg(error.message);
        setSubmitting(false);
        return;
      }
      setPhase("done");
    } catch (e) {
      setErrMsg(e instanceof Error ? e.message : "更新失败");
    }
    setSubmitting(false);
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-5 py-12 text-[#0F172A]">
      <section className="w-full max-w-[440px] rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgba(15,23,42,0.08)]">
        <div className="mb-6 text-center">
          <p className="text-sm font-bold text-[#0F766E]">LA居家健身</p>
          <h1 className="mt-2 text-2xl font-extrabold">重置密码</h1>
        </div>

        {phase === "loading" && <p className="text-[15px] leading-7 text-slate-500">正在验证链接...</p>}

        {phase === "needlink" && (
          <>
            <p className="text-[15px] font-semibold text-red-700">{errMsg}</p>
            <p className="mt-3 text-[15px] leading-7 text-slate-500">请从「忘记密码」邮件中的链接打开本页；不要使用注册确认邮件的链接。</p>
          </>
        )}

        {phase === "err" && (
          <>
            <p className="text-[15px] font-semibold text-red-700">{errMsg}</p>
            <p className="mt-3 text-[15px] leading-7 text-slate-500">请在 App 中重新申请重置密码邮件。</p>
          </>
        )}

        {phase === "form" && (
          <form onSubmit={onSubmit}>
            <label className="mb-1.5 block text-sm font-semibold text-slate-700">新密码</label>
            <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-base outline-none focus:border-[#0D9488]" type="password" value={pwd} onChange={(e) => setPwd(e.target.value)} autoComplete="new-password" minLength={6} required />
            <label className="mb-1.5 mt-4 block text-sm font-semibold text-slate-700">确认新密码</label>
            <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-3 text-base outline-none focus:border-[#0D9488]" type="password" value={pwd2} onChange={(e) => setPwd2(e.target.value)} autoComplete="new-password" minLength={6} required />
            {errMsg ? <p className="mt-3 text-sm font-semibold text-red-700">{errMsg}</p> : null}
            <button className="mt-5 w-full rounded-xl bg-[#0D9488] px-4 py-3.5 text-base font-bold text-white disabled:opacity-60" type="submit" disabled={submitting}>{submitting ? "保存中..." : "保存新密码"}</button>
          </form>
        )}

        {phase === "done" && (
          <>
            <p className="text-base font-semibold text-emerald-600">密码已更新</p>
            <p className="mt-3 text-[15px] leading-7 text-slate-500">请返回「LA居家健身」App，使用新密码登录。</p>
          </>
        )}
      </section>
    </main>
  );
}
