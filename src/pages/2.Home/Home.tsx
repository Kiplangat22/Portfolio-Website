import { ReactTyped } from "react-typed";
import { HiDownload } from 'react-icons/hi'
import type { Profile } from "../../../shared/types";
import About from "../3.About/About";


export const Home = ({ profile }: { profile: Profile }) => {
    return (
        <>
            <section id="home" className="hero-bg min-h-screen flex items-center justify-center pt-20 md:pt-16 pb-8 text-text-light relative">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                </div>

                {/* Content container with max-width to match other sections */}
                <div className="w-full max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-center items-center z-10">
                    <div className="w-full md:w-1/2 flex justify-center items-center animate-slide-in-left">
                        <div className="pb-8">
                            <p className="text-primary font-medium mb-2 tracking-wider">👋 Welcome to my portfolio</p>
                            <h1 className="text-3xl md:text-5xl font-bold mb-4">
                                Hi, I'm{' '}
                                <span className='gradient-text'>
                                    <ReactTyped
                                        strings={profile.roles}
                                        typeSpeed={80}
                                        backSpeed={50}
                                        loop />
                                </span>
                            </h1>

                            <p className="text-lg md:text-xl leading-8 text-gray-300 mb-6">
                                Data Analyst and Product Operations Associate at <span className="text-primary font-medium">SunCulture</span>, using <span className="text-primary font-medium">Python</span>, <span className="text-primary font-medium">SQL</span>, <span className="text-primary font-medium">Tableau</span> and <span className="text-primary font-medium">Power BI</span> to turn data into better decisions.
                                <br className="hidden md:block" /><br className="hidden md:block" />
                                I monitor product health, automate and standardize processes, and build reports and dashboards that drive efficient operations and sustainable growth.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <a href={profile.resumeUrl} download className="btn-glow flex items-center gap-2 text-lg">
                                    <span>Download Resume</span>
                                    <HiDownload size={22} />
                                </a>
                                <a href="#contact" className="btn-outline flex items-center gap-2 text-lg">
                                    <span>Let's Talk</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 flex justify-center items-center animate-slide-in-right">
                        <div className="relative">
                            {/* Glow effect behind image */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse-slow"></div>
                            <div className="card-border-gradient p-1 rounded-full">
                                <img
                                    src={profile.photoUrl}
                                    alt={profile.name}
                                    className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover float-element"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About summary={profile.summary} />
        </>
    )
}
