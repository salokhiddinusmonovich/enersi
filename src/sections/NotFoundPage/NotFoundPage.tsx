import { HomeButton } from "@/sections/NotFoundPage/components/HomeButton";
import { FadeIn } from "@/components/effects/FadeIn";
import { useLang } from "@/contexts/LanguageContext";
import { usePageTitle } from "@/hooks/usePageTitle";

export const NotFoundPage = () => {
  const { t } = useLang();
  usePageTitle(t.notFound.title);

  return (
    <main className="flex min-h-[80vh] items-center justify-center px-6 pb-20 pt-40 text-center">
      <FadeIn>
        <div className="font-display text-[120px] font-black italic leading-none text-navy-800 md:text-[180px]">
          4<span className="text-volt-500">0</span>4
        </div>
        <h1 className="mt-4 font-display text-2xl font-extrabold text-navy-800 md:text-3xl">{t.notFound.title}</h1>
        <p className="mx-auto mb-10 mt-3 max-w-md text-ink-muted">{t.notFound.text}</p>
        <HomeButton />
      </FadeIn>
    </main>
  );
};
