import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { uz, type Translations } from "@/i18n/uz";
import { ru } from "@/i18n/ru";
import { en } from "@/i18n/en";

export type Lang = "uz" | "ru" | "en";
export type { Translations };

export const translations: Record<Lang, Translations> = { uz, ru, en };

interface LangCtx { lang: Lang; setLang: (l: Lang) => void; t: Translations; }
const LanguageContext = createContext<LangCtx>({ lang: "uz", setLang: () => { }, t: uz });
const LANG_KEY = "enersi_lang";
// default is Uzbek; the choice is remembered (localStorage may throw in private mode)
const savedLang = (): Lang => { try { const v = localStorage.getItem(LANG_KEY); if (v === "uz" || v === "ru" || v === "en") return v; } catch { /* */ } return "uz"; };

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(savedLang);
  const setLang = (l: Lang) => { setLangState(l); try { localStorage.setItem(LANG_KEY, l); } catch { /* */ } };
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  return <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>{children}</LanguageContext.Provider>;
};
export const useLang = () => useContext(LanguageContext);
