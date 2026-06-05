import type { SupabaseClient } from '@supabase/supabase-js';

export type ApplyAuthResult =
  | { ok: true; message: string }
  | { ok: false; message: string };

export async function applyAuthFromUrl(
  supabase: SupabaseClient,
  mode: 'signup' | 'recovery',
): Promise<ApplyAuthResult> {
  if (typeof window === 'undefined') {
    return { ok: false, message: '仅能在浏览器中完成' };
  }

  const url = new URL(window.location.href);
  const code = url.searchParams.get('code');
  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) return { ok: false, message: error.message };
    return {
      ok: true,
      message: mode === 'signup' ? '邮箱已验证' : '会话已建立，请设置新密码',
    };
  }

  const tokenHash = url.searchParams.get('token_hash');
  const qpType = url.searchParams.get('type');
  if (tokenHash && qpType) {
    if (mode === 'signup' && qpType !== 'signup' && qpType !== 'email') {
      return {
        ok: false,
        message: '这不是「确认邮箱」链接，请打开注册邮件中的确认链接。',
      };
    }
    if (mode === 'recovery' && qpType !== 'recovery') {
      return {
        ok: false,
        message: '这不是「重置密码」链接，请打开重置密码邮件中的链接。',
      };
    }
    const { error } = await supabase.auth.verifyOtp({
      token_hash: tokenHash,
      type: qpType as 'signup' | 'recovery' | 'email',
    });
    if (error) return { ok: false, message: error.message };
    return {
      ok: true,
      message: mode === 'signup' ? '邮箱已验证' : '请设置新密码',
    };
  }

  const hash = url.hash.startsWith('#') ? url.hash.slice(1) : url.hash;
  const params = new URLSearchParams(hash);
  const access_token = params.get('access_token');
  const refresh_token = params.get('refresh_token');
  const hashType = params.get('type');

  if (access_token && refresh_token) {
    if (mode === 'signup' && hashType && hashType === 'recovery') {
      return {
        ok: false,
        message: '这是重置密码链接，请使用「确认邮箱」邮件中的链接打开「确认邮箱」页面。',
      };
    }
    if (mode === 'recovery' && hashType && hashType === 'signup') {
      return {
        ok: false,
        message: '这是确认邮箱链接，请使用「重置密码」邮件中的链接打开「重置密码」页面。',
      };
    }
    const { error } = await supabase.auth.setSession({
      access_token,
      refresh_token,
    });
    if (error) return { ok: false, message: error.message };
    return {
      ok: true,
      message: mode === 'signup' ? '邮箱已验证' : '会话已建立，请设置新密码',
    };
  }

  return {
    ok: false,
    message: '链接无效或已过期，请重新发送邮件或从最新邮件打开。',
  };
}
