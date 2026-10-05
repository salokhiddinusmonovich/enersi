// Stroke icons drawn on a 24px grid — one family so every card looks consistent.
const PATHS = {
    bolt: <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />,
    board: <><rect x="4" y="3" width="16" height="18" rx="1.5" /><path d="M8 7h8M8 11h2m2 0h2m2 0h0M8 15h8M12 19v0" /></>,
    cable: <><path d="M4 20c0-6 4-6 8-10s4-6 8-6" /><circle cx="4" cy="20" r="1.5" /><circle cx="20" cy="4" r="1.5" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></>,
    gauge: <><path d="M4 18a8 8 0 1 1 16 0" /><path d="m12 18 4-6" /><path d="M4 18h16" /></>,
    wave: <><path d="M2 12c2.5-6 5-6 7.5 0s5 6 7.5 0 3.5-4 5-2" /><path d="M2 20h20" /></>,
    wrench: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.3L3 17.9V21h3.1l6.3-6.3a4 4 0 0 0 5.3-5.4l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6z" />,
    shield: <><path d="M12 3 4 6v6c0 4.5 3.4 8.3 8 9 4.6-.7 8-4.5 8-9V6l-8-3z" /><path d="m9 12 2 2 4-4" /></>,
    doc: <><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8l-5-5z" /><path d="M14 3v5h5M9 13h6M9 17h4" /></>,
    users: <><circle cx="9" cy="8" r="3.5" /><path d="M2.5 20a6.5 6.5 0 0 1 13 0" /><path d="M16 4.5a3.5 3.5 0 0 1 0 7M18 14a6.5 6.5 0 0 1 3.5 6" /></>,
    check: <path d="m5 12 5 5L20 7" />,
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    download: <><path d="M12 3v12m-5-5 5 5 5-5" /><path d="M4 20h16" /></>,
    pin: <><path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z" /><circle cx="12" cy="9" r="2.5" /></>,
    phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    copy: <><rect x="8" y="8" width="13" height="13" rx="2" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" /></>,
    close: <path d="M6 6l12 12M18 6 6 18" />,
    chevronLeft: <path d="m15 18-6-6 6-6" />,
    chevronRight: <path d="m9 18 6-6-6-6" />,
    telegram: <path d="M21 4 3 11l6 2 2 6 3-4 5 4 2-15zM9 13l9-7" />,
    building: <><path d="M4 21V5l8-3v19M12 8h8v13M2 21h20" /><path d="M7 8h2m-2 4h2m-2 4h2m7-4h1m-1 4h1" /></>,
} as const;

export type IconName = keyof typeof PATHS;

export function Icon({ name, className = "h-6 w-6", strokeWidth = 1.8 }: { name: IconName; className?: string; strokeWidth?: number }) {
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
            {PATHS[name]}
        </svg>
    );
}

/** Telegram's own paper-plane mark (filled), for contact buttons. */
export function TelegramLogo({ className = "h-5 w-5" }: { className?: string }) {
    return (
        <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
            <path fill="currentColor" d="M21.05 3.64 2.98 10.6c-1.23.49-1.22 1.17-.22 1.48l4.63 1.45 1.79 5.44c.22.6.11.85.75.85.5 0 .72-.23 1-.5l2.4-2.33 4.68 3.46c.86.48 1.48.23 1.7-.8l3.07-14.5c.32-1.27-.48-1.84-1.73-1.31z" />
        </svg>
    );
}
