import { useLang } from "@/contexts/LanguageContext";

export const MobileActions = ({ open, onToggle }: { open: boolean; onToggle: () => void }) => {
    const { t } = useLang();
    return (
        <button
            aria-label={t.common.menu}
            aria-expanded={open}
            onClick={onToggle}
            className="ml-auto flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-navy-50 transition active:scale-95 lg:hidden"
        >
            <div className="relative h-[13px] w-[18px]">
                <span className="absolute left-0 top-0 block h-0.5 w-full rounded bg-navy-800 transition-transform duration-200" style={{ transform: open ? "translateY(5.5px) rotate(45deg)" : "none" }} />
                <span className="absolute left-0 top-[5.5px] block h-0.5 w-full rounded bg-navy-800 transition-opacity duration-150" style={{ opacity: open ? 0 : 1 }} />
                <span className="absolute left-0 top-[11px] block h-0.5 w-full rounded bg-navy-800 transition-transform duration-200" style={{ transform: open ? "translateY(-5.5px) rotate(-45deg)" : "none" }} />
            </div>
        </button>
    );
};
