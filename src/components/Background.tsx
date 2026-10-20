import { useEffect, useRef } from 'react';

// Site-wide background: faint topographic contours with a slow-drifting data network on top.
// Both sit behind all content (fixed, z-0) and never take pointer events.
// A faint film-grain layer on top keeps the dark surfaces from feeling too digital.

const W = 1600;
const H = 1000;

const CONTOUR_CENTERS = [
    { x: 1200, y: 220, rings: 14 },
    { x: 220, y: 820, rings: 12 },
    { x: 760, y: 560, rings: 6 },
];

// Irregular concentric rings, like elevation lines on a map
function buildContours() {
    return CONTOUR_CENTERS.flatMap((c, ci) =>
        Array.from({ length: c.rings }, (_, i) => {
            const k = i + 1;
            const base = k * 34;
            let d = '';
            for (let a = 0; a <= 360; a += 6) {
                const t = (a * Math.PI) / 180;
                const r = base * (1 + 0.12 * Math.sin(3 * t + k * 0.35 + ci) + 0.06 * Math.cos(5 * t - k * 0.2));
                const x = c.x + r * Math.cos(t) * 1.35;
                const y = c.y + r * Math.sin(t);
                d += `${a === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
            }
            return { d: `${d}Z`, major: k % 4 === 0 };
        })
    );
}

const contours = buildContours();

const LINK_DISTANCE = 140;

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`;

function DataNetwork() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let nodes: { x: number; y: number; vx: number; vy: number }[] = [];
        let width = 0;
        let height = 0;
        let frameId = 0;

        const resize = () => {
            const dpr = window.devicePixelRatio || 1;
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width * dpr;
            canvas.height = height * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            const count = Math.round(Math.min(55, (width * height) / 26000));
            nodes = Array.from({ length: count }, () => ({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.2,
                vy: (Math.random() - 0.5) * 0.2,
            }));
        };

        const draw = () => {
            ctx.clearRect(0, 0, width, height);
            for (const n of nodes) {
                if (!reduceMotion) {
                    n.x += n.vx;
                    n.y += n.vy;
                }
                if (n.x < 0 || n.x > width) n.vx *= -1;
                if (n.y < 0 || n.y > height) n.vy *= -1;
            }
            ctx.lineWidth = 1;
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i + 1; j < nodes.length; j++) {
                    const a = nodes[i];
                    const b = nodes[j];
                    const dist = Math.hypot(a.x - b.x, a.y - b.y);
                    if (dist < LINK_DISTANCE) {
                        ctx.strokeStyle = `rgba(20, 184, 166, ${0.16 * (1 - dist / LINK_DISTANCE)})`;
                        ctx.beginPath();
                        ctx.moveTo(a.x, a.y);
                        ctx.lineTo(b.x, b.y);
                        ctx.stroke();
                    }
                }
            }
            ctx.fillStyle = 'rgba(94, 234, 212, 0.45)';
            for (const n of nodes) {
                ctx.beginPath();
                ctx.arc(n.x, n.y, 1.6, 0, Math.PI * 2);
                ctx.fill();
            }
            if (!reduceMotion) frameId = requestAnimationFrame(draw);
        };

        const onResize = () => {
            resize();
            if (reduceMotion) draw();
        };

        resize();
        draw();
        window.addEventListener('resize', onResize);
        return () => {
            cancelAnimationFrame(frameId);
            window.removeEventListener('resize', onResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

export const Background = () => (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <svg
            className="absolute inset-0 w-full h-full opacity-[0.14]"
            viewBox={`0 0 ${W} ${H}`}
            preserveAspectRatio="xMidYMid slice"
        >
            {contours.map((c, i) => (
                <path
                    key={i}
                    d={c.d}
                    fill="none"
                    stroke="#5eead4"
                    strokeOpacity={c.major ? 0.9 : 0.45}
                    strokeWidth={c.major ? 1.4 : 0.8}
                />
            ))}
        </svg>
        <DataNetwork />
        <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay" style={{ backgroundImage: GRAIN }} />
    </div>
);
