import { SectionTitle } from '../../components/SectionTitle';
import { Reveal } from '../../components/Reveal';
import { FaGraduationCap } from 'react-icons/fa';
import type { Education as TypeEducation } from '../../../shared/types';

export const Education = ({ education }: { education: TypeEducation[] }) => {
    return (
        <section id="education" className="scroll-mt-16 py-16 px-4 md:px-8 max-w-6xl mx-auto">
            <SectionTitle label="where it all started">Education</SectionTitle>

            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8">
                {education.map((school) => (
                    <Reveal key={school.id} className="w-full md:w-[60%]">
                    <div className="glass-card-hover p-8 h-full group">
                        <div className="flex flex-col justify-center items-center">
                            <div className="w-24 h-24 rounded-2xl bg-white/10 p-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <FaGraduationCap className="text-primary text-5xl" />
                            </div>
                        </div>
                        <div className="flex flex-col items-center mt-6">
                            <h2 className="font-display text-3xl font-semibold text-slate-100 mb-2 text-center">{school.institution}</h2>
                            <p className="text-lg text-gray-300 text-center">{school.degree}</p>
                            <p className="text-gray-400 text-center">{school.location}</p>
                            <span className="mt-2 px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
                                {school.period}
                            </span>
                        </div>
                    </div>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
