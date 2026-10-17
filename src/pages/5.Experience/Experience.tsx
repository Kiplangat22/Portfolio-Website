import { MdWork } from "react-icons/md"
import type { Experience as TypeExperience } from "../../../shared/types"

export const Experience = ({ experience }: { experience: TypeExperience[] }) => {
    return (
        <section id="experience" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
            <h1 className='section-title'>💼 Experience 🚀</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {experience.map((job, index) => {
                    return (
                        <div
                            key={job.id}
                            className='glass-card-hover p-6 group'
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <div className="w-14 h-14 rounded-xl bg-white/10 p-2 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                                        <MdWork className='text-primary text-2xl' />
                                    </div>
                                </div>
                                <div className='flex-1'>
                                    <div className='flex flex-col gap-1'>
                                        <h5 className='text-primary font-bold text-lg leading-tight'>{job.title}</h5>
                                        <p className='text-gray-200 font-medium'>{job.company} · {job.location}</p>
                                        <span className="text-sm text-gray-400 flex items-center gap-2">
                                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                            {job.period}
                                        </span>
                                    </div>
                                    <ul className='pt-3 space-y-2 text-gray-300 leading-7 list-disc pl-5 marker:text-primary'>
                                        {job.points.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
