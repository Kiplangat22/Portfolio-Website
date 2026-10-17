import { FaCertificate } from "react-icons/fa";
import type { Certification } from "../../../shared/types";

export const LicenseCert = ({ certifications }: { certifications: Certification[] }) => {
  return (
    <section id="certifications" className="py-16 px-4 md:px-8 max-w-6xl mx-auto">
      <h1 className='section-title'>🥇 Licenses & Certifications 🏆</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        {certifications.map((certification, index) => {
          return (
            <div
              key={certification.id}
              className='glass-card-hover p-6 flex flex-col items-center text-center group'
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-white/10 p-3 mb-4 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <FaCertificate className='text-primary text-3xl' />
              </div>
              <h3 className='text-lg font-bold text-gray-200 flex-1'>
                {certification.title}
              </h3>
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
          );
        })}
      </div>
    </section>
  );
};
