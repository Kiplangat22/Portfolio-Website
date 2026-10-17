import { FaLinkedin, FaGithub } from 'react-icons/fa';
import type { Profile } from '../../../shared/types';

const Footer = ({ profile }: { profile: Profile }) => {
  const socials = [
    { href: profile.linkedin, label: 'LinkedIn', icon: FaLinkedin },
    { href: profile.github, label: 'GitHub', icon: FaGithub },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-dark/50 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-6 py-12 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold gradient-text mb-2">{`<${profile.shortName} />`}</h2>
            <p className="text-gray-400">{profile.tagline}</p>
          </div>
          <div className="flex items-center gap-4">
            {socials.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
                aria-label={label}
              >
                <Icon size={24} className="text-gray-400 group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} <span className="text-primary">{profile.name}</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
