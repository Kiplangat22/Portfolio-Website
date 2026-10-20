import { useEffect, useRef, useState } from 'react';
import { SectionTitle } from '../../components/SectionTitle';
import { Reveal } from '../../components/Reveal';
import { MdWork } from "react-icons/md"
import type { Experience as TypeExperience } from "../../../shared/types"
import { prefersReducedMotion } from '../../hooks/useInView';

// 0..1: how far the viewer has scrolled through the timeline
function useScrollProgress<T extends HTMLElement>() {
    const ref = useRef<T>(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (prefersReducedMotion()) {
            setProgress(1);
            return;
        }
        let frame = 0;
        const update = () => {
            frame = 0;
            const el = ref.current;
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const anchor = window.innerHeight * 0.6;
            setProgress(Math.min(1, Math.max(0, (anchor - rect.top) / rect.height)));
        };
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    return { ref, progress };
}

export const Experience = ({ experience }: { experience: TypeExperience[] }) => {
    const { ref, progress } = useScrollProgress<HTMLOListElement>();

    return (
        <section id="experience" className="py-16 px-4 md:px-8 max-w-4xl mx-auto scroll-mt-16">
            <SectionTitle label="where I've learned the most">Experience</SectionTitle>

            <ol ref={ref} className="relative">
                {/* Timeline track and the part that fills in as you scroll */}
                <span className="absolute left-5 md:left-7 top-2 bottom-2 w-px bg-white/10" aria-hidden="true" />
                <span
                    className="absolute left-5 md:left-7 top-2 w-px bg-gradient-to-b from-primary to-warm origin-top"
                    style={{ height: `calc((100% - 1rem) * ${progress})` }}
                    aria-hidden="true"
                />

                {experience.map((job, index) => (
                    <li key={job.id} className="relative pl-14 md:pl-20 pb-10 last:pb-0">
                        <div className="absolute left-0 top-0">
                            {job.logo ? (
                                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white p-1 md:p-1.5 flex items-center justify-center ring-4 ring-dark shadow-card">
                                    <img src={job.logo} alt={`${job.company} logo`} loading="lazy" className='w-full h-full object-contain' />
                                </div>
                            ) : (
                                <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-surface border border-white/10 flex items-center justify-center ring-4 ring-dark">
                                    <MdWork className='text-primary text-2xl' />
                                </div>
                            )}
                        </div>

                        <Reveal delay={0.05}>
                            <div className="glass-card-hover p-5 md:p-6">
                                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                                    <h3 className="font-display text-xl md:text-2xl font-semibold text-slate-100 leading-tight">{job.title}</h3>
                                    <span className="text-sm text-gray-400 tabular-nums">{job.period}</span>
                                </div>
                                <p className="text-primary font-medium mt-1">
                                    {job.company} <span className="text-gray-500">· {job.location}</span>
                                </p>
                                {index === 0 && job.period.includes('Present') && (
                                    <span className="hand-note text-xl inline-block mt-1 -rotate-1">where I am today ✦</span>
                                )}
                                <ul className="pt-3 space-y-2 text-gray-300 leading-7 list-disc pl-5 marker:text-primary">
                                    {job.points.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </Reveal>
                    </li>
                ))}
            </ol>
        </section>
    )
}
