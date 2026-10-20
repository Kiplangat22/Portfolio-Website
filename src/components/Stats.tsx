import { useEffect, useState } from 'react';
import type { Portfolio } from '../../shared/types';
import { prefersReducedMotion, useInView } from '../hooks/useInView';

// Counts from 0 up to `value` once it scrolls into view.
const CountUp = ({ value, suffix = '' }: { value: number; suffix?: string }) => {
    const { ref, inView } = useInView<HTMLSpanElement>(0.5);
    const [shown, setShown] = useState(0);

    useEffect(() => {
        if (!inView) return;
        if (prefersReducedMotion()) {
            setShown(value);
            return;
        }
        const duration = 1400;
        const start = performance.now();
        let frame = 0;
        const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - t, 3);
            setShown(Math.round(eased * value));
            if (t < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [inView, value]);

    return <span ref={ref} className="tabular-nums">{shown}{suffix}</span>;
};

// "Jul 2023 - Sep 2023" -> Date for Jul 2023
const periodStart = (period: string) => new Date(`1 ${period.split('-')[0].trim()}`);

// Small KPI strip under the hero. Every number is derived from the portfolio data.
export const Stats = ({ portfolio }: { portfolio: Portfolio }) => {
    const firstRole = Math.min(...portfolio.experience.map((job) => periodStart(job.period).getTime()));
    const years = Math.floor((Date.now() - firstRole) / (365.25 * 24 * 60 * 60 * 1000));

    const stats = [
        { value: years, suffix: '+', label: "years turning messy data into decisions" },
        { value: new Set(portfolio.experience.map((job) => job.company)).size, label: "organisations I've learned from, across agri-tech, health and ed-tech" },
        { value: portfolio.certifications.length, label: 'certifications earned (and counting)' },
        { value: portfolio.skills.reduce((n, group) => n + group.skills.length, 0), label: 'tools I reach for most days' },
    ];

    return (
        <section aria-label="At a glance" className="px-4 md:px-8 max-w-6xl mx-auto -mt-6 md:-mt-10 relative z-10">
            <div className="glass-card grid grid-cols-2 lg:grid-cols-4 divide-white/10 lg:divide-x">
                {stats.map((stat, i) => (
                    <div key={stat.label} className={`p-6 md:p-8 ${i < 2 ? 'border-b border-white/10 lg:border-b-0' : ''} ${i % 2 === 0 ? 'border-r border-white/10 lg:border-r-0' : ''}`}>
                        <p className="font-display text-4xl md:text-5xl font-semibold text-primary">
                            <CountUp value={stat.value} suffix={stat.suffix} />
                        </p>
                        <p className="mt-2 text-sm md:text-base text-gray-400 leading-snug">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};
