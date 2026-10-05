import { useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { COMPANY, DOCS } from "@/data/company";
import { usePageTitle } from "@/hooks/usePageTitle";
import { FadeIn } from "@/components/effects/FadeIn";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DocCard } from "@/components/ui/DocumentViewer";
import { Icon } from "@/components/ui/Icon";
import { CtaBanner } from "@/sections/CtaBanner";

export const AboutPage = () => {
    const { t } = useLang();
    usePageTitle(t.pages.aboutTitle);
    const a = t.about;
    const staffDocs = DOCS.filter((d) => d.landscape);

    const requisites = [
        { label: a.req.legalName, value: COMPANY.legalName },
        { label: a.req.inn, value: COMPANY.inn },
        { label: a.req.registered, value: COMPANY.registeredAt },
        { label: a.req.address, value: t.topbar.addressFull },
        { label: a.req.account, value: COMPANY.bank.account },
        { label: a.req.mfo, value: COMPANY.bank.mfo },
        { label: a.req.bank, value: COMPANY.bank.name },
        { label: a.req.director, value: COMPANY.director },
    ];

    return (
        <main>
            <PageHero title={t.pages.aboutTitle} sub={t.pages.aboutSub} />

            <section className="container grid gap-14 py-20 md:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-center">
                <FadeIn>
                    <span className="eyebrow">{a.storyEyebrow}</span>
                    <h2 className="h-section mt-4">{a.storyTitle}</h2>
                    <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink-muted">
                        {a.story.map((p, i) => <p key={i}>{p}</p>)}
                    </div>
                </FadeIn>
                <FadeIn delay={120} direction="left">
                    <div className="relative overflow-hidden rounded-3xl bg-navy-800 p-10 md:p-14">
                        <div className="bg-grid absolute inset-0" />
                        <img src="/brand/logo-white.png" alt="ENERSI" className="relative w-full" loading="lazy" />
                        <div className="relative mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8 text-white">
                            <div>
                                <div className="font-display text-4xl font-black italic text-volt-500">{COMPANY.since}</div>
                                <div className="mt-1 text-sm text-white/60">{t.common.since}</div>
                            </div>
                            <div>
                                <div className="font-display text-4xl font-black italic text-volt-500">2019</div>
                                <div className="mt-1 text-sm text-white/60">{COMPANY.shortLegalName}</div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </section>

            <section className="bg-navy-50 py-20 md:py-24">
                <div className="container">
                    <SectionHeading eyebrow={a.teamEyebrow} title={a.teamTitle} />
                    <div className="grid gap-6 lg:grid-cols-2">
                        {a.team.map((m, i) => (
                            <FadeIn key={m.name} delay={i * 100}>
                                <div className="card flex h-full flex-col gap-6 p-6 sm:flex-row sm:items-center">
                                    <div className="flex items-center gap-4 sm:w-1/2">
                                        <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-navy-800 font-display text-xl font-black text-volt-500">
                                            {m.name.split(" ").slice(0, 2).map((w) => w[0]).join("")}
                                        </span>
                                        <div>
                                            <div className="font-display text-lg font-bold leading-tight text-navy-800">{m.name}</div>
                                            <div className="mt-1 text-sm font-semibold text-volt-600">{m.role}</div>
                                            <div className="mt-2 flex items-center gap-1.5 text-xs text-ink-muted">
                                                <Icon name="shield" className="h-3.5 w-3.5" />{a.teamCert}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:w-1/2">
                                        <DocCard doc={staffDocs[i]} />
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <section className="container py-20 md:py-24">
                <SectionHeading eyebrow={a.reqEyebrow} title={a.reqTitle} />
                <FadeIn>
                    <dl className="card divide-y divide-line">
                        {requisites.map((r) => <RequisiteRow key={r.label} {...r} />)}
                    </dl>
                </FadeIn>
            </section>
            <CtaBanner />
        </main>
    );
};

function RequisiteRow({ label, value }: { label: string; value: string }) {
    const { t } = useLang();
    const [copied, setCopied] = useState(false);
    const copy = async () => {
        try {
            await navigator.clipboard.writeText(value.replace(/(\d) (?=\d)/g, "$1"));
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch { /* clipboard blocked — nothing to do */ }
    };

    return (
        <div className="group grid gap-1 px-6 py-4 md:grid-cols-[220px_1fr_auto] md:items-center md:gap-6">
            <dt className="text-sm font-semibold text-ink-soft">{label}</dt>
            <dd className="break-words font-semibold text-navy-800">{value}</dd>
            <button
                onClick={copy}
                className={`hidden items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition md:flex ${copied ? "bg-green-100 text-green-700" : "text-ink-soft opacity-0 hover:bg-navy-50 hover:text-navy-800 group-hover:opacity-100"}`}
            >
                <Icon name={copied ? "check" : "copy"} className="h-3.5 w-3.5" strokeWidth={2.2} />
                {copied ? t.about.copied : t.about.copy}
            </button>
        </div>
    );
}
