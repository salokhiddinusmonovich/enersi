// src/config/api.ts
//
// Single source of truth for the backend address.
// Production: set VITE_API_BASE (Vercel → Project Settings → Environment Variables).
// Dev (`npm run dev`): defaults to /api, which vite.config.ts proxies to
// VITE_API_PROXY_TARGET so the backend's CORS policy never gets in the way.
export const API_BASE =
    import.meta.env.VITE_API_BASE?.replace(/\/$/, "") ||
    (import.meta.env.DEV ? "/api" : "");

export const ENDPOINTS = {
    register: `${API_BASE}/register/`,
    loginPassword: `${API_BASE}/login/password/`,
    logout: `${API_BASE}/logout/`,
    tokenRefresh: `${API_BASE}/token/refresh/`,
    me: `${API_BASE}/me/`,
} as const;

/** Headers needed on almost every request (Accept-Language → localized backend text). */
export function baseHeaders(lang: string, extra?: Record<string, string>) {
    return {
        "Accept-Language": lang,
        ...extra,
    };
}

/**
 * fetch() with a hard deadline. Plain fetch() never times out on its own —
 * if the backend hangs, a page is stuck on its loading state forever. This
 * aborts after `timeoutMs` (default 12s) so callers can show an error + retry.
 * A caller-supplied `signal` is still respected — whichever fires first wins.
 */
export function fetchWithTimeout(input: string, init: RequestInit = {}, timeoutMs = 12000): Promise<Response> {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    if (init.signal) {
        if (init.signal.aborted) controller.abort();
        else init.signal.addEventListener("abort", () => controller.abort(), { once: true });
    }

    return fetch(input, { ...init, signal: controller.signal }).finally(() => clearTimeout(timer));
}

/** Absolute URL for media files in case the backend returns a relative path. */
export function absMediaUrl(path: string | null): string | null {
    if (!path) return null;
    if (path.startsWith("http")) return path;
    return `${API_BASE}${path.startsWith("/") ? "" : "/"}${path}`;
}

/** absMediaUrl + forces https (http images on an https page are silently blocked as mixed content). */
export function fixMediaUrl(path: string | null): string | null {
    const url = absMediaUrl(path);
    return url ? url.replace(/^http:\/\//, "https://") : url;
}
