import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useLang } from "@/contexts/LanguageContext";
import { DOCS, type CompanyDoc } from "@/data/company";
import { FadeIn } from "@/components/effects/FadeIn";
import { Icon } from "./Icon";

/** Thumbnail card for one document; clicking opens the full-screen viewer. */
export function DocCard({ doc, delay = 0 }: { doc: CompanyDoc; delay?: number }) {
    const { t } = useLang();
    const info = t.docs[doc.id];
    const [open, setOpen] = useState(false);

    return (
        <FadeIn delay={delay}>
            <article className="card group flex h-full flex-col overflow-hidden transition hover:-translate-y-1 hover:shadow-lift">
                <button
                    onClick={() => setOpen(true)}
                    className="relative block aspect-[4/3] overflow-hidden bg-navy-50"
                    aria-label={`${t.common.open}: ${info.title}`}
                >
                    <img
                        src={doc.pages[0]}
                        alt={info.title}
                        loading="lazy"
                        className={`absolute inset-0 h-full w-full transition duration-500 group-hover:scale-[1.03] ${doc.landscape ? "object-contain p-4" : "object-cover object-top"}`}
                    />
                    <span className="absolute inset-0 flex items-center justify-center bg-navy-900/0 opacity-0 transition group-hover:bg-navy-900/40 group-hover:opacity-100">
                        <span className="rounded-full bg-white px-4 py-2 text-sm font-bold text-navy-800">{t.common.open}</span>
                    </span>
                    {doc.pages.length > 1 && (
                        <span className="absolute right-3 top-3 rounded-md bg-navy-800 px-2 py-1 text-xs font-bold text-white">
                            {doc.pages.length} {t.docs.page}
                        </span>
                    )}
                </button>
                <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-[15px] font-bold leading-snug text-navy-800">{info.title}</h3>
                    <p className="mt-1.5 text-sm text-ink-muted">{info.issuer}</p>
                    <p className="mt-3 font-mono text-xs text-ink-soft">{info.meta}</p>
                    <a href={doc.pdf} download className="mt-auto inline-flex items-center gap-2 pt-4 text-sm font-bold text-volt-600 hover:text-volt-700">
                        <Icon name="download" className="h-4 w-4" strokeWidth={2.2} />
                        {t.common.downloadPdf}
                    </a>
                </div>
            </article>
            {open && <DocumentViewer startId={doc.id} onClose={() => setOpen(false)} />}
        </FadeIn>
    );
}

/** Full-screen viewer that pages through every page of every document. */
function DocumentViewer({ startId, onClose }: { startId: CompanyDoc["id"]; onClose: () => void }) {
    const { t } = useLang();
    const pages = DOCS.flatMap((d) => d.pages.map((src, i) => ({ doc: d, src, i })));
    const [idx, setIdx] = useState(() => pages.findIndex((p) => p.doc.id === startId));
    const cur = pages[idx];
    const go = (d: number) => setIdx((i) => (i + d + pages.length) % pages.length);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            if (e.key === "ArrowRight") go(1);
            if (e.key === "ArrowLeft") go(-1);
        };
        document.addEventListener("keydown", onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = prev; };
    }, []);

    const info = t.docs[cur.doc.id];
    const navBtn = "absolute top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/25";

    return createPortal(
        <div className="fixed inset-0 z-[2000] flex flex-col bg-navy-950/95" role="dialog" aria-modal="true" onClick={onClose}>
            <header className="flex items-center gap-4 px-4 py-3 text-white md:px-6" onClick={(e) => e.stopPropagation()}>
                <div className="min-w-0 flex-1">
                    <div className="truncate font-display text-sm font-bold md:text-base">{info.title}</div>
                    <div className="truncate text-xs text-white/50">
                        {info.meta}{cur.doc.pages.length > 1 && ` · ${cur.i + 1}/${cur.doc.pages.length} ${t.docs.page}`}
                    </div>
                </div>
                <a href={cur.doc.pdf} download className="btn-primary !px-4 !py-2.5">
                    <Icon name="download" className="h-4 w-4" strokeWidth={2.2} />
                    <span className="hidden sm:inline">{t.common.downloadPdf}</span>
                </a>
                <button onClick={onClose} aria-label={t.common.close} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20">
                    <Icon name="close" className="h-5 w-5" />
                </button>
            </header>
            <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 pb-6 md:px-20">
                <button className={`${navBtn} left-2 md:left-6`} onClick={(e) => { e.stopPropagation(); go(-1); }} aria-label="prev">
                    <Icon name="chevronLeft" />
                </button>
                <img
                    key={cur.src}
                    src={cur.src}
                    alt={info.title}
                    onClick={(e) => e.stopPropagation()}
                    className="yq-page-transition max-h-full max-w-full rounded-lg bg-white object-contain shadow-2xl"
                />
                <button className={`${navBtn} right-2 md:right-6`} onClick={(e) => { e.stopPropagation(); go(1); }} aria-label="next">
                    <Icon name="chevronRight" />
                </button>
            </div>
        </div>,
        document.body
    );
}
