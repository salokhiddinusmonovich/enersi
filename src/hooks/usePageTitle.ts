import { useEffect } from "react";

/** Sets the browser tab title as "<page> — ENERSI" (or just the brand on home). */
export function usePageTitle(title?: string) {
    useEffect(() => {
        document.title = title ? `${title} — ENERSI` : "ENERSI — Energiya bo'yicha ekspert";
    }, [title]);
}
