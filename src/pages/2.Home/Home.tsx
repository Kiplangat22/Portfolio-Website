import { ReactTyped } from "react-typed";
import { HiDownload } from 'react-icons/hi'
import type { Profile } from "../../../shared/types";
import { HeroDashboard } from "../../components/HeroDashboard";
import { LocalClock } from "../../components/LocalClock";


export const Home = ({ profile }: { profile: Profile }) => {
    const city = profile.location.split(',')[0];

    return (
        <section id="home" className="hero-bg min-h-[100svh] md:min-h-[86vh] flex items-center justify-center pt-24 md:pt-20 pb-20 text-text-light relative">
            {/* Faded dashboard wireframe behind the hero */}
            <HeroDashboard />

            <div className="w-full max-w-6xl mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row justify-center items-center gap-12 md:gap-8 z-10">
                <div className="w-full md:w-[58%] animate-slide-in-left">
                    <div className="flex flex-wrap items-center gap-3 mb-6">
                        <LocalClock city={city} timeZone={profile.timeZone} />
                        <span className="text-sm text-gray-400">{profile.role}</span>
                    </div>

                    <p className="hand-note text-3xl md:text-4xl -rotate-2 mb-1">Habari! 👋</p>
                    <h1 className="font-display text-5xl md:text-7xl font-semibold tracking-tight leading-[1.05] mb-5">
                        I'm {profile.shortName}.
                    </h1>
                    <p className="font-display text-2xl md:text-3xl text-gray-300 mb-6 min-h-[2.5rem]">
                        I turn data into{' '}
                        <span className="italic text-primary">
                            <ReactTyped strings={profile.heroPhrases} typeSpeed={70} backSpeed={40} backDelay={1800} loop />
                        </span>
                    </p>

                    <p className="text-lg leading-8 text-gray-300 mb-8 max-w-xl">{profile.summary}</p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#contact" className="btn-glow flex items-center gap-2 text-lg">
                            Let's talk
                        </a>
                        <a href={profile.resumeUrl} download className="btn-outline flex items-center gap-2 text-lg">
                            <span>Download resume</span>
                            <HiDownload size={20} />
                        </a>
                    </div>
                </div>

                <div className="w-full md:w-[42%] flex justify-center items-center animate-slide-in-right">
                    <div className="relative">
                        {/* Soft warm glow behind an organic, slowly morphing photo frame */}
                        <div className="absolute -inset-6 bg-gradient-to-br from-primary/25 via-transparent to-warm/20 blur-2xl rounded-full" />
                        <div className="relative w-64 h-64 md:w-80 md:h-80 p-[3px] bg-gradient-to-br from-primary to-warm animate-blob overflow-hidden shadow-card">
                            <img
                                src={profile.photoUrl}
                                alt={`Portrait of ${profile.name}`}
                                className="w-full h-full object-cover bg-dark animate-blob"
                            />
                        </div>

                        {/* Handwritten annotation */}
                        <div className="hidden sm:flex absolute -left-28 md:-left-32 bottom-6 items-end gap-1 rotate-[-8deg]" aria-hidden="true">
                            <span className="hand-note text-2xl">that's me!</span>
                            <svg width="64" height="40" viewBox="0 0 64 40" fill="none" className="text-warm mb-3">
                                <path d="M2 30 C 20 38, 40 30, 58 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M48 9 L 59 9 L 57 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
