// Faded, tilted dashboard wireframe (KPI tiles, charts, table) shown behind the hero section.
// Purely decorative: no numbers or claims, just the shape of a dashboard.

const Line = ({ w = '100%', h = 8 }: { w?: string; h?: number }) => (
    <i className="block rounded bg-accent" style={{ width: w, height: h }} />
)

const Bars = ({ heights }: { heights: number[] }) => (
    <div className="flex-1 flex items-end gap-1.5">
        {heights.map((h, i) => (
            <b key={i} className="flex-1 rounded-t-sm bg-accent" style={{ height: `${h}%` }} />
        ))}
    </div>
)

const tile = 'border border-accent rounded-lg p-3 flex flex-col gap-2'

export const HeroDashboard = () => (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
            className="absolute top-16 -right-[30%] md:-right-[6%] w-[140%] md:w-[78%] max-w-[1100px] grid grid-cols-4 auto-rows-[90px] gap-3.5 opacity-[0.13]"
            style={{
                transform: 'perspective(1400px) rotateX(18deg) rotateY(-16deg) rotateZ(3deg)',
                maskImage: 'radial-gradient(ellipse 70% 70% at 60% 40%, #000 30%, transparent 85%)',
                WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 60% 40%, #000 30%, transparent 85%)',
            }}
        >
            <div className={tile}><Line w="40%" /><Line w="70%" h={18} /></div>
            <div className={tile}><Line w="50%" /><Line w="60%" h={18} /></div>
            <div className={tile}><Line w="35%" /><Line w="75%" h={18} /></div>
            <div className={tile}><Line w="45%" /><Line w="55%" h={18} /></div>
            <div className={`${tile} col-span-2 row-span-2`}>
                <Line w="30%" />
                <svg viewBox="0 0 300 120" preserveAspectRatio="none" className="flex-1 w-full">
                    <polyline fill="none" stroke="#5eead4" strokeWidth="3" points="0,100 40,85 80,90 120,60 160,65 200,40 240,45 300,15" />
                </svg>
            </div>
            <div className={`${tile} row-span-2`}><Line w="50%" /><Bars heights={[40, 70, 55, 90]} /></div>
            <div className={`${tile} row-span-2`}><Line w="60%" /><Line /><Line w="80%" /><Line w="65%" /><Line w="90%" /></div>
            <div className={`${tile} col-span-2`}><Line w="25%" /><Bars heights={[30, 50, 45, 70, 60, 85, 75, 95]} /></div>
            <div className={tile}><Line w="40%" /><Line w="65%" h={18} /></div>
            <div className={tile}><Line w="55%" /><Line w="50%" h={18} /></div>
        </div>
    </div>
)
