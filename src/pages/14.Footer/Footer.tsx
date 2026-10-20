import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiArrowUp } from 'react-icons/hi';
import type { Profile } from '../../../shared/types';

const Footer = ({ profile }: { profile: Profile }) => {
  const socials = [
    { href: profile.linkedin, label: 'LinkedIn', icon: FaLinkedin },
    { href: profile.github, label: 'GitHub', icon: FaGithub },
  ];

  return (
    <footer className="relative border-t border-white/10 bg-dark/50 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none"></div>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="font-display text-3xl font-semibold">
              {profile.shortName}<span className="text-warm">.</span>
            </p>
            <p className="text-gray-400 mt-1">{profile.tagline}</p>
            <p className="hand-note text-2xl mt-3 -rotate-1">thanks for scrolling this far ✌️</p>
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
                <Icon size={22} className="text-gray-400 group-hover:text-primary transition-colors" />
              </a>
            ))}
            <a
              href="#home"
              className="w-12 h-12 rounded-full border border-white/15 flex items-center justify-center hover:border-primary hover:text-primary text-gray-400 transition-all duration-300"
              aria-label="Back to top"
            >
              <HiArrowUp size={20} />
            </a>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} {profile.name}</p>
          <p>Made with care in {profile.location}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
