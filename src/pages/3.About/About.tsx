import { SectionTitle } from '../../components/SectionTitle';
import { Reveal } from '../../components/Reveal';
import { Emphasis } from '../../components/Emphasis';
import type { Profile } from '../../../shared/types';

const About = ({ profile }: { profile: Profile }) => {
    return (
        <section id="about" className="relative py-16 px-4 md:px-8 max-w-6xl mx-auto scroll-mt-16">
            <SectionTitle label="a little about me">My Story</SectionTitle>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Reveal className="lg:col-span-2">
                    <article className="glass-card p-8 md:p-12 h-full">
                        <div className="space-y-5 text-lg leading-8 text-gray-300">
                            {profile.story.map((paragraph, i) => (
                                <p key={i} className={i === 0 ? 'first-letter:font-display first-letter:text-5xl first-letter:font-semibold first-letter:text-primary first-letter:float-left first-letter:mr-2 first-letter:leading-none' : ''}>
                                    <Emphasis text={paragraph} />
                                </p>
                            ))}
                        </div>
                        <p className="hand-note text-4xl mt-8 -rotate-3 inline-block">— {profile.shortName}</p>
                    </article>
                </Reveal>

                <Reveal delay={0.15}>
                    <aside className="glass-card p-8 h-full relative">
                        <span className="absolute -top-4 right-6 rotate-3 rounded-md bg-warm text-dark font-hand text-xl px-3 py-0.5 shadow-card">right now</span>
                        <dl className="space-y-6">
                            {profile.now.map(({ label, value }) => (
                                <div key={label}>
                                    <dt className="text-xs uppercase tracking-widest text-gray-500">{label}</dt>
                                    <dd className="mt-1 text-gray-100 font-medium">{value}</dd>
                                </div>
                            ))}
                        </dl>
                        <a href="#contact" className="inline-flex items-center gap-2 mt-8 text-primary font-medium hover:gap-3 transition-all">
                            Say hello <span aria-hidden="true">→</span>
                        </a>
                    </aside>
                </Reveal>
            </div>
        </section>
    )
}

export default About
