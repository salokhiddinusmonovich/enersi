import { useState, FormEvent } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { COMPANY, SERVICE_IDS } from "@/data/company";
import { usePageTitle } from "@/hooks/usePageTitle";
import { FadeIn } from "@/components/effects/FadeIn";
import { PageHero } from "@/components/ui/PageHero";
import { Icon, TelegramLogo, type IconName } from "@/components/ui/Icon";

export const ContactPage = () => {
    const { t } = useLang();
    usePageTitle(t.pages.contactTitle);
    const c = t.contact;
    const { contacts } = COMPANY;

    const cards: { icon: IconName | "telegram"; label: string; value: string; href: string; external?: boolean }[] = [
        { icon: "telegram", label: c.telegram, value: `@${contacts.telegramUser}`, href: contacts.telegramUrl, external: true },
        ...(contacts.phone ? [{ icon: "phone" as const, label: c.phoneLabel, value: contacts.phone, href: `tel:${contacts.phone.replace(/\s/g, "")}` }] : []),
        ...(contacts.email ? [{ icon: "mail" as const, label: c.email, value: contacts.email, href: `mailto:${contacts.email}` }] : []),
        { icon: "pin", label: c.address, value: t.topbar.addressFull, href: COMPANY.mapUrl, external: true },
    ];

    return (
        <main>
            <PageHero title={t.pages.contactTitle} sub={t.pages.contactSub} />
            <section className="container grid gap-10 py-20 md:py-24 lg:grid-cols-[1fr_1.25fr]">
                <div className="flex flex-col gap-4">
                    {cards.map((card, i) => (
                        <FadeIn key={card.label} delay={i * 80}>
                            <a
                                href={card.href}
                                target={card.external ? "_blank" : undefined}
                                rel={card.external ? "noreferrer" : undefined}
                                className="card group flex items-start gap-5 p-6 transition hover:-translate-y-0.5 hover:border-volt-500/50 hover:shadow-lift"
                            >
                                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-navy-800 text-volt-500 transition-colors group-hover:bg-volt-500 group-hover:text-navy-900">
                                    {card.icon === "telegram" ? <TelegramLogo className="h-5 w-5" /> : <Icon name={card.icon} className="h-5 w-5" />}
                                </span>
                                <span className="min-w-0">
                                    <span className="block text-sm font-semibold text-ink-soft">{card.label}</span>
                                    <span className="mt-1 block break-words font-display text-lg font-bold leading-snug text-navy-800">{card.value}</span>
                                    {card.icon === "pin" && (
                                        <span className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-volt-600">
                                            {c.openMap}<Icon name="arrow" className="h-3.5 w-3.5" strokeWidth={2.4} />
                                        </span>
                                    )}
                                </span>
                            </a>
                        </FadeIn>
                    ))}
                    <FadeIn delay={320}>
                        <div className="rounded-2xl bg-navy-50 p-6 text-sm text-ink-muted">
                            <div className="font-bold text-navy-800">{COMPANY.legalName}</div>
                            <div className="mt-1">{t.common.inn}: {COMPANY.inn}</div>
                        </div>
                    </FadeIn>
                </div>
                <FadeIn delay={120}>
                    <RequestForm />
                </FadeIn>
            </section>
        </main>
    );
};

/**
 * There is no backend yet, so the request goes through Telegram: the filled-in
 * form is turned into a message, copied to the clipboard, and the company chat
 * opens in a new tab. Swap `submit` for a POST once an endpoint exists.
 */
function RequestForm() {
    const { t } = useLang();
    const c = t.contact;
    const [form, setForm] = useState({ name: "", phone: "", service: "", message: "" });
    const [done, setDone] = useState(false);
    const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm({ ...form, [k]: e.target.value });

    const submit = async (e: FormEvent) => {
        e.preventDefault();
        const service = form.service === "other" ? c.other : form.service ? t.services[form.service as keyof typeof t.services].title : "";
        const text = [
            `📩 ${c.newRequest}`,
            `${c.name}: ${form.name}`,
            `${c.phone}: ${form.phone}`,
            service && `${c.service}: ${service}`,
            form.message && `\n${form.message}`,
        ].filter(Boolean).join("\n");
        try { await navigator.clipboard.writeText(text); } catch { /* clipboard blocked — chat still opens */ }
        window.open(COMPANY.contacts.telegramUrl, "_blank", "noopener");
        setDone(true);
    };

    return (
        <form onSubmit={submit} className="card relative overflow-hidden p-6 md:p-10">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-volt-500 via-volt-400 to-navy-800" />
            <h2 className="font-display text-2xl font-extrabold text-navy-800">{c.formTitle}</h2>
            <p className="mt-2 text-sm text-ink-muted">{c.hint}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <label className="block">
                    <span className="mb-2 block text-sm font-bold text-navy-800">{c.name} *</span>
                    <input className="field" value={form.name} onChange={set("name")} required autoComplete="name" />
                </label>
                <label className="block">
                    <span className="mb-2 block text-sm font-bold text-navy-800">{c.phone} *</span>
                    <input className="field" type="tel" value={form.phone} onChange={set("phone")} required autoComplete="tel" placeholder="+998" />
                </label>
                <label className="block sm:col-span-2">
                    <span className="mb-2 block text-sm font-bold text-navy-800">{c.service}</span>
                    <select className="field" value={form.service} onChange={set("service")}>
                        <option value="">{c.servicePlaceholder}</option>
                        {SERVICE_IDS.map((id) => <option key={id} value={id}>{t.services[id].title}</option>)}
                        <option value="other">{c.other}</option>
                    </select>
                </label>
                <label className="block sm:col-span-2">
                    <span className="mb-2 block text-sm font-bold text-navy-800">{c.message}</span>
                    <textarea className="field min-h-[130px] resize-y" value={form.message} onChange={set("message")} />
                </label>
            </div>
            <button type="submit" className="btn-primary mt-6 w-full !py-4 text-[15px]">
                <TelegramLogo className="h-5 w-5" />
                {c.submit}
            </button>
            {done && (
                <p className="mt-4 flex items-center gap-2 rounded-xl bg-green-50 px-4 py-3 text-sm font-semibold text-green-700" role="status">
                    <Icon name="check" className="h-4 w-4" strokeWidth={2.6} />{c.done}
                </p>
            )}
        </form>
    );
}
