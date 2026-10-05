import { useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Wraps the routed page content and remounts (via the pathname key) on every
 * in-app navigation, replaying a scale+blur+rise entrance instead of an
 * instant cut. Skipped on the very first render — a hard page load already
 * has its own loading state (blank screen while JS parses) plus each page's
 * own FadeIn sections; stacking this on top of that just delays first paint
 * behind an extra blur with nothing gained, since there's no "previous page"
 * being transitioned from. The CSS driving it (.yq-page-transition /
 * @keyframes yq-page-in) lives in src/tailwind.css.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
    const location = useLocation();
    const isFirstRender = useRef(true);
    const skipAnimation = isFirstRender.current;
    isFirstRender.current = false;

    return (
        <div key={location.pathname} className={skipAnimation ? undefined : "yq-page-transition"}>
            {children}
        </div>
    );
}
