import { useEffect, useState } from 'react';

const format = (timeZone: string) =>
    new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', timeZone }).format(new Date());

// Live "it's 14:32 here" clock for the owner's city.
export const LocalClock = ({ city, timeZone }: { city: string; timeZone: string }) => {
    const [time, setTime] = useState(() => format(timeZone));

    useEffect(() => {
        const id = setInterval(() => setTime(format(timeZone)), 15_000);
        return () => clearInterval(id);
    }, [timeZone]);

    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm text-gray-300">
            <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-60 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            {city} · <time className="tabular-nums text-gray-100">{time}</time>
        </span>
    );
};
