import type { ProductId } from "@/data/company";

// Front view of an open switchboard cabinet, drawn in SVG so each product card
// shows what the device actually looks like inside — no stock photos needed.
// viewBox is 200×300; everything below is in those units.

const C = {
    body: "#e4eaf0",
    bodyEdge: "#b9c6d3",
    inner: "#f8fafc",
    rail: "#c3ced9",
    module: "#ffffff",
    moduleEdge: "#9fb0c0",
    navy: "#0a263e",
    volt: "#ff9e19",
    copper: "#d98a3a",
    ok: "#22c55e",
    alarm: "#ef4444",
};

function Breakers({ y, count = 9, x0 = 34, toggle = C.navy }: { y: number; count?: number; x0?: number; toggle?: string }) {
    const w = 132 / count;
    return (
        <g>
            <rect x={30} y={y + 9} width={140} height={4} rx={1} fill={C.rail} />
            {Array.from({ length: count }, (_, i) => (
                <g key={i}>
                    <rect x={x0 + i * w} y={y} width={w - 2} height={22} rx={1.5} fill={C.module} stroke={C.moduleEdge} strokeWidth={0.8} />
                    <rect x={x0 + i * w + (w - 2) / 2 - 2} y={y + 5} width={4} height={7} rx={1} fill={i === 0 ? C.volt : toggle} />
                </g>
            ))}
        </g>
    );
}

function Inside({ id }: { id: ProductId }) {
    switch (id) {
        case "vru":
            return (
                <g>
                    {/* meter */}
                    <rect x={66} y={30} width={68} height={40} rx={3} fill="#fff" stroke={C.moduleEdge} />
                    <rect x={74} y={38} width={52} height={12} rx={1.5} fill={C.navy} />
                    <text x={100} y={47.5} textAnchor="middle" fontSize={8} fontFamily="monospace" fill={C.volt}>0042.7</text>
                    <circle cx={80} cy={60} r={2.5} fill={C.alarm} className="en-blink" />
                    {/* main switch */}
                    <rect x={78} y={84} width={44} height={56} rx={3} fill="#fff" stroke={C.moduleEdge} />
                    <rect x={93} y={96} width={14} height={30} rx={2} fill={C.navy} />
                    <rect x={95} y={98} width={10} height={12} rx={1.5} fill={C.volt} />
                    {/* busbars */}
                    {[152, 160, 168].map((y) => <rect key={y} x={32} y={y} width={136} height={4} rx={1} fill={C.copper} />)}
                    <Breakers y={186} count={7} />
                    <Breakers y={222} count={7} />
                </g>
            );
        case "sho":
            return (
                <g>
                    {[34, 74, 114, 154, 194].map((y) => <Breakers key={y} y={y} />)}
                    <rect x={34} y={232} width={132} height={22} rx={2} fill="#fff" stroke={C.moduleEdge} strokeDasharray="3 3" />
                </g>
            );
        case "shao":
            return (
                <g>
                    {/* status lamps */}
                    <rect x={34} y={30} width={132} height={30} rx={3} fill="#fff" stroke={C.moduleEdge} />
                    <circle cx={60} cy={45} r={6} fill={C.ok} className="en-blink" />
                    <circle cx={84} cy={45} r={6} fill={C.volt} />
                    <circle cx={108} cy={45} r={6} fill="#cbd5e1" />
                    {/* emergency exit sign */}
                    <rect x={122} y={36} width={38} height={18} rx={2} fill={C.ok} />
                    <path d="M130 45h16m-5-5 5 5-5 5" stroke="#fff" strokeWidth={2} fill="none" strokeLinecap="round" />
                    <Breakers y={80} count={8} toggle={C.ok} />
                    <Breakers y={120} count={8} toggle={C.ok} />
                    <Breakers y={160} count={8} />
                    {/* transfer switch */}
                    <rect x={70} y={200} width={60} height={48} rx={3} fill="#fff" stroke={C.moduleEdge} />
                    <text x={100} y={218} textAnchor="middle" fontSize={8} fontWeight={700} fill={C.navy}>I · 0 · II</text>
                    <rect x={92} y={226} width={16} height={14} rx={2} fill={C.volt} />
                </g>
            );
        case "ukrm":
            return (
                <g>
                    {/* controller */}
                    <rect x={60} y={30} width={80} height={34} rx={3} fill="#fff" stroke={C.moduleEdge} />
                    <rect x={68} y={37} width={64} height={12} rx={1.5} fill={C.navy} />
                    <text x={100} y={46} textAnchor="middle" fontSize={7.5} fontFamily="monospace" fill={C.ok}>cos φ 0.98</text>
                    <circle cx={74} cy={56} r={2.2} fill={C.ok} className="en-blink" />
                    <Breakers y={76} count={6} x0={40} />
                    {/* capacitor cans */}
                    {[0, 1].map((row) =>
                        [0, 1, 2, 3, 4].map((i) => (
                            <g key={`${row}-${i}`}>
                                <rect x={38 + i * 26} y={116 + row * 70} width={20} height={58} rx={4} fill="#d6dee6" stroke={C.moduleEdge} />
                                <rect x={38 + i * 26} y={116 + row * 70} width={20} height={8} rx={3} fill={C.navy} />
                                <rect x={42 + i * 26} y={150 + row * 70} width={12} height={4} rx={1} fill={C.volt} />
                            </g>
                        ))
                    )}
                </g>
            );
    }
}

export function CabinetIllustration({ id, className }: { id: ProductId; className?: string }) {
    return (
        <svg viewBox="0 0 200 300" className={className} role="img" aria-label={id}>
            <defs>
                <linearGradient id={`cab-shade-${id}`} x1="0" x2="1">
                    <stop offset="0" stopColor="#000" stopOpacity="0.06" />
                    <stop offset="0.5" stopColor="#000" stopOpacity="0" />
                    <stop offset="1" stopColor="#000" stopOpacity="0.08" />
                </linearGradient>
            </defs>
            {/* plinth */}
            <rect x={24} y={280} width={152} height={14} rx={2} fill={C.navy} />
            {/* body */}
            <rect x={16} y={8} width={168} height={274} rx={7} fill={C.body} stroke={C.bodyEdge} strokeWidth={1.5} />
            <rect x={24} y={18} width={152} height={256} rx={3} fill={C.inner} stroke={C.bodyEdge} />
            <Inside id={id} />
            <rect x={16} y={8} width={168} height={274} rx={7} fill={`url(#cab-shade-${id})`} pointerEvents="none" />
            {/* hinges + lock */}
            <rect x={11} y={50} width={6} height={20} rx={2} fill={C.bodyEdge} />
            <rect x={11} y={220} width={6} height={20} rx={2} fill={C.bodyEdge} />
            <rect x={183} y={132} width={6} height={28} rx={2} fill={C.navy} />
        </svg>
    );
}
