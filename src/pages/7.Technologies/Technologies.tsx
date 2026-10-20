import { SectionTitle } from '../../components/SectionTitle';
import { Reveal } from '../../components/Reveal';
import { skillIcons } from '../../components/SkillIcons';
import type { SkillGroup } from "../../../shared/types";

export const Technologies = ({ skills }: { skills: SkillGroup[] }) => {
  return (
    <section id="skills" className="scroll-mt-16 py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <SectionTitle label="what's in my toolkit">Skills & Tools</SectionTitle>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {skills.map((group, index) => (
          <Reveal key={group.category} delay={(index % 3) * 0.1}>
          <div className='glass-card-hover p-6 h-full'>
            <h3 className='font-display text-xl font-semibold text-slate-100 mb-5'>{group.category}</h3>
            <div className='grid grid-cols-3 gap-4'>
              {group.skills.map((skill) => {
                const icon = skillIcons[skill];
                return (
                  <div key={skill} className='group flex flex-col items-center text-center gap-2'>
                    {/* White tile so every brand color reads clearly on the dark theme */}
                    <div className='w-14 h-14 rounded-xl bg-white flex items-center justify-center shadow-card group-hover:-translate-y-1 group-hover:shadow-glow transition-all duration-300'>
                      {icon ? (
                        <icon.Icon size={30} style={icon.color ? { color: icon.color } : undefined} />
                      ) : (
                        <span className='text-dark font-bold text-lg'>{skill.charAt(0)}</span>
                      )}
                    </div>
                    <span className='text-xs md:text-sm text-gray-300 leading-tight group-hover:text-primary transition-colors'>
                      {skill}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
};
