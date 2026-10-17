import type { SkillGroup } from "../../../shared/types";

export const Technologies = ({ skills }: { skills: SkillGroup[] }) => {
  return (
    <section id="skills" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <h1 className='section-title'>🖥 Skills & Tools 💡</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {skills.map((group, index) => (
          <div
            key={group.category}
            className='glass-card-hover p-6 group'
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            <h3 className='text-lg font-bold text-primary mb-4'>{group.category}</h3>
            <div className='flex flex-wrap gap-2'>
              {group.skills.map((skill) => (
                <span key={skill} className='tech-badge'>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
