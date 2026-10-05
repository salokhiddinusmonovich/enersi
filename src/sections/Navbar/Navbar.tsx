import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { TopBar } from "@/sections/Navbar/components/TopBar";
import { NavbarBrand } from "@/sections/Navbar/components/NavbarBrand";
import { DesktopNav } from "@/sections/Navbar/components/DesktopNav";
import { DesktopActions } from "@/sections/Navbar/components/DesktopActions";
import { MobileActions } from "@/sections/Navbar/components/MobileActions";
import { MobileMenu } from "@/sections/Navbar/components/MobileMenu";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setMobileOpen(false), [pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed left-0 top-0 z-[1000] w-full"
      style={{ paddingLeft: "env(safe-area-inset-left)", paddingRight: "env(safe-area-inset-right)" }}
    >
      <TopBar hidden={scrolled} />
      <div className={`border-b bg-white/95 backdrop-blur-xl transition-shadow ${scrolled ? "border-line shadow-card" : "border-transparent"}`}>
        <div className="container flex h-16 items-center gap-6 md:h-[72px]">
          <NavbarBrand />
          <DesktopNav />
          <DesktopActions />
          <MobileActions open={mobileOpen} onToggle={() => setMobileOpen(!mobileOpen)} />
        </div>
      </div>
      {mobileOpen && <MobileMenu />}
    </header>
  );
};
