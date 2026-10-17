import { FaChartBar } from "react-icons/fa";
import type { Project } from "../../../shared/types";


const Projects = ({ projects }: { projects: Project[] }) => {
    return (
        <section id="projects" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
            <h1 className='section-title'>✨ Featured Projects ✨</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className='glass-card-hover overflow-hidden group flex flex-col'
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="h-32 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/10 flex items-center justify-center">
                            <FaChartBar className='text-primary text-5xl group-hover:scale-110 transition-transform duration-500' />
                        </div>
                        <div className='p-6 flex flex-col flex-1'>
                            <h3 className='text-xl font-bold text-primary mb-3'>
                                {project.name}
                            </h3>
                            <p className='text-gray-300 mb-4 flex-1 leading-relaxed'>{project.description}</p>
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {project.technologies.map((tech: string, idx: number) => (
                                    <span key={idx} className='tech-badge'>{tech}</span>
                                ))}
                            </div>
                            <div className='flex gap-3'>
                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='btn-glow flex-1 text-center !py-2 text-sm'
                                    >
                                        Live Demo
                                    </a>
                                )}
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className='btn-outline flex-1 text-center !py-2 text-sm'
                                    >
                                        GitHub
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
