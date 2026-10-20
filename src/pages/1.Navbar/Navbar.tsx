import { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const links = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
];

// Which section is currently in the middle of the screen
function useActiveSection(ids: string[]) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

// 0..1 of the whole page scrolled, plus whether we've left the top
function useScrollState() {
  const [state, setState] = useState({ progress: 0, scrolled: false });

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setState({ progress: max > 0 ? window.scrollY / max : 0, scrolled: window.scrollY > 12 });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return state;
}

const sectionIds = [...links.map((link) => link.id), 'contact'];

export const Navbar = ({ shortName }: { shortName: string }) => {
  const [nav, setNav] = useState(false);
  const active = useActiveSection(sectionIds);
  const { progress, scrolled } = useScrollState();

  useEffect(() => {
    if (!nav) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setNav(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [nav]);

  const logo = (
    <a href="#home" className="font-display text-2xl lg:text-3xl font-semibold tracking-tight hover:opacity-80 transition-opacity">
      {shortName}<span className="text-warm">.</span>
    </a>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${scrolled ? 'backdrop-blur-md bg-dark/80 border-b border-white/10' : 'bg-transparent border-b border-transparent'}`}>
      {/* Reading progress */}
      <span className="absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-primary to-warm" style={{ width: `${progress * 100}%` }} aria-hidden="true" />

      <div className="flex justify-between items-center h-16 px-4 md:px-8 text-text-light max-w-6xl mx-auto">
        {logo}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              aria-current={active === id ? 'true' : undefined}
              className={`relative px-4 py-2 rounded-lg transition-colors duration-300 hover:text-primary ${active === id ? 'text-primary' : 'text-gray-300'}`}
            >
              {label}
              <span className={`absolute left-4 right-4 -bottom-0.5 h-px bg-primary transition-transform duration-300 origin-left ${active === id ? 'scale-x-100' : 'scale-x-0'}`} />
            </a>
          ))}
          <a href="#contact" className="btn-glow ml-3 !py-2 !px-5">Say hello</a>
        </div>

        <button
          type="button"
          onClick={() => setNav(!nav)}
          className="md:hidden p-2 z-50 rounded-lg hover:bg-white/10 transition-colors"
          aria-label={nav ? 'Close menu' : 'Open menu'}
          aria-expanded={nav}
        >
          {nav ? <AiOutlineClose size={26} className="text-primary" /> : <AiOutlineMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        onClick={() => setNav(false)}
        className={`fixed inset-0 h-screen bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${nav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      />

      {/* Mobile Menu */}
      <div className={`fixed left-0 top-0 w-[75%] max-w-[300px] h-screen bg-dark/95 backdrop-blur-lg border-r border-white/10 ease-out duration-300 z-40 md:hidden ${nav ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-6 border-b border-white/10">{logo}</div>
        <div className="flex flex-col py-4">
          {[...links, { id: 'contact', label: 'Contact' }].map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setNav(false)}
              className={`px-6 py-4 hover:bg-white/10 hover:text-primary transition-all duration-300 border-b border-white/5 ${active === id ? 'text-primary' : ''}`}
            >
              {label}
            </a>
          ))}
        </div>
        <p className="hand-note text-2xl px-6 mt-4 -rotate-2">thanks for visiting!</p>
      </div>
    </nav>
  );
};
