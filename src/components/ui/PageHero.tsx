import { Link } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import { FadeIn } from "@/components/effects/FadeIn";

/** Dark banner at the top of every inner page: breadcrumb + title + lead. */
export function PageHero({ title, sub }: { title: string; sub: string }) {
    const { t } = useLang();
    return (
        <section className="relative overflow-hidden bg-navy-800 pb-16 pt-36 text-white md:pb-20 md:pt-44">
            <div className="bg-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
            <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-volt-500/20 blur-[120px]" />
            <div className="container relative">
                <FadeIn>
                    <nav className="mb-6 flex items-center gap-2 text-sm text-white/50">
                        <Link to="/" className="hover:text-volt-400">{t.nav.home}</Link>
                        <span>/</span>
                        <span className="text-white/80">{title}</span>
                    </nav>
                    <h1 className="font-display text-4xl font-extrabold tracking-tight md:text-6xl">{title}</h1>
                    <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">{sub}</p>
                </FadeIn>
            </div>
        </section>
    );
}
