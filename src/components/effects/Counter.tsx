import { useEffect, useRef, useState } from "react";

/** Counts up to the numeric part of `target` (e.g. "1,000+", "25+") once it scrolls into view. */
export function Counter({ target }: { target: string }) {
    const [val, setVal] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const obs = new IntersectionObserver(
            ([e]) => {
                if (!e.isIntersecting) return;
                obs.disconnect();
                const num = parseInt(target.replace(/\D/g, ""), 10) || 0;
                let cur = 0;
                const step = Math.ceil(num / 50);
                const t = setInterval(() => {
                    cur = Math.min(cur + step, num);
                    setVal(cur);
                    if (cur >= num) clearInterval(t);
                }, 22);
            },
            { threshold: 0.4 }
        );
        if (ref.current) obs.observe(ref.current);
        return () => obs.disconnect();
    }, [target]);

    const num = parseInt(target.replace(/\D/g, ""), 10) || 0;
    const suffix = target.replace(/[\d,\s]/g, "");
    return <span ref={ref}>{val >= num ? target : val.toLocaleString() + suffix}</span>;
}
