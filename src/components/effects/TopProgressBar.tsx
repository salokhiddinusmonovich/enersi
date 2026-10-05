import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

/**
 * A thin gradient bar across the very top of the viewport that sweeps in on
 * every route change (YouTube/GitHub-style). Purely visual — it doesn't track
 * real chunk-load progress, it just gives navigation a sense of motion instead
 * of an instant, jarring cut.
 */
export function TopProgressBar() {
    const location = useLocation();
    const [progress, setProgress] = useState(0);
    const [visible, setVisible] = useState(false);
    const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

    useEffect(() => {
        timers.current.forEach(clearTimeout);
        timers.current = [];
        setVisible(true);
        setProgress(0);

        const raf = requestAnimationFrame(() => setProgress(30));
        timers.current.push(setTimeout(() => setProgress(65), 120));
        timers.current.push(setTimeout(() => setProgress(90), 320));
        timers.current.push(setTimeout(() => setProgress(100), 480));
        timers.current.push(setTimeout(() => setVisible(false), 700));

        return () => {
            cancelAnimationFrame(raf);
            timers.current.forEach(clearTimeout);
        };
    }, [location.pathname]);

    return (
        <div
            aria-hidden="true"
            style={{
                position: "fixed", top: 0, left: 0, right: 0, height: 2.5, zIndex: 200,
                pointerEvents: "none", opacity: visible ? 1 : 0, transition: "opacity .25s ease",
            }}
        >
            <div
                style={{
                    height: "100%", width: `${progress}%`,
                    background: "linear-gradient(90deg, #e88a05, #ff9e19, #ffc266)",
                    boxShadow: "0 0 10px rgba(255,158,25,0.7), 0 0 3px rgba(255,158,25,0.9)",
                    transition: "width .35s cubic-bezier(.16,1,.3,1)",
                }}
            />
        </div>
    );
}
