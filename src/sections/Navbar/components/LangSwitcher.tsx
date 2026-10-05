import { useLang, Lang } from "@/contexts/LanguageContext";

const LANGS: { code: Lang; label: string }[] = [
  { code: "uz", label: "UZ" },
  { code: "ru", label: "RU" },
  { code: "en", label: "EN" },
];

export const LangSwitcher = () => {
  const { lang, setLang } = useLang();

  return (
    <div className="flex items-center gap-0.5 rounded-lg border border-line bg-navy-50 p-[3px]">
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-md px-2.5 py-1.5 text-[11px] font-extrabold tracking-wider transition-colors ${lang === code ? "bg-navy-800 text-white" : "text-ink-muted hover:text-navy-800"}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};
