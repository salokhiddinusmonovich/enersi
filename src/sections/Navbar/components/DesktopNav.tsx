import { NavLink } from "react-router-dom";
import { useLang } from "@/contexts/LanguageContext";
import { getNavItems } from "@/sections/Navbar/navItems";

export const DesktopNav = () => {
    const { t } = useLang();

    return (
        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
            {getNavItems(t).map((item) => (
                <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    className={({ isActive }) =>
                        `relative rounded-lg px-3.5 py-2 text-[14px] font-semibold transition-colors after:absolute after:inset-x-3.5 after:-bottom-[15px] after:h-[3px] after:rounded-full after:transition-transform ${isActive ? "text-navy-800 after:scale-x-100 after:bg-volt-500" : "text-ink-muted after:scale-x-0 hover:text-navy-800"}`
                    }
                >
                    {item.label}
                </NavLink>
            ))}
        </nav>
    );
};
