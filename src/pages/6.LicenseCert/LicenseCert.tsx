import { SectionTitle } from '../../components/SectionTitle';
import { Reveal } from '../../components/Reveal';
import { CertificationIcon } from "../../components/CertificationIcons";
import type { Certification } from "../../../shared/types";

export const LicenseCert = ({ certifications }: { certifications: Certification[] }) => {
  return (
    <section id="certifications" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <SectionTitle label="always learning">Licenses & Certifications</SectionTitle>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
        {certifications.map((certification, index) => {
          return (
            <Reveal key={certification.id} delay={(index % 4) * 0.08}>
            <div className='glass-card-hover p-6 h-full flex flex-col items-center text-center group'>
              {/* White tile so each brand color reads clearly on the dark theme */}
              <div className="w-16 h-16 rounded-2xl bg-white mb-4 flex items-center justify-center shadow-card group-hover:-translate-y-1 group-hover:shadow-glow transition-all duration-300">
                <CertificationIcon logo={certification.logo} />
              </div>
              <h3 className='text-lg font-bold text-gray-200 leading-snug'>
                {certification.title}
              </h3>
              {certification.issuer && (
                <p className='text-sm text-gray-400 mt-1'>{certification.issuer}</p>
              )}
              <div className='flex-1' />
              {certification.link && (
                <a
                  href={certification.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className='btn-outline !py-2 !px-6 text-sm mt-4'
                >
                  Verify Credential
                </a>
              )}
            </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};
