import { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

export const Navbar = ({ shortName }: { shortName: string }) => {
  const [nav, setNav] = useState(false);

  const handleNav = (event: any) => {
    event.stopPropagation(); // Prevent triggering the document's click listener
    setNav(!nav);
  };

  useEffect(() => {
    const closeMenu = () => {
      if (nav) {
        setNav(false);
      }
    };

    // Add click listener to the document
    document.addEventListener('click', closeMenu);

    // Prevent menu clicks from closing the menu
    const menu = document.querySelector('.menu');
    menu?.addEventListener('click', (event) => event.stopPropagation());

    // Cleanup event listeners on component unmount
    return () => {
      document.removeEventListener('click', closeMenu);
      menu?.removeEventListener('click', (event) => event.stopPropagation());
    };
  }, [nav]); // Dependency on nav to ensure the effect runs when nav changes

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-dark/80 border-b border-white/10">
      <div className="flex justify-between lg:justify-around items-center h-16 px-4 text-text-light max-w-7xl mx-auto">
        <div className="pl-2 lg:pl-4">
          <h2 className="text-lg lg:text-3xl font-bold">
            <a href="/" className="gradient-text hover:opacity-80 transition-opacity">{`<${shortName} />`}</a>
          </h2>
        </div>
        <div className="text-base lg:font-medium hidden md:flex items-center gap-1">
          <a href="#home" className="px-4 py-2 rounded-lg hover:bg-white/10 hover:text-primary transition-all duration-300">Home</a>
          <a href="#skills" className="px-4 py-2 rounded-lg hover:bg-white/10 hover:text-primary transition-all duration-300">Skills</a>
          <a href="#experience" className="px-4 py-2 rounded-lg hover:bg-white/10 hover:text-primary transition-all duration-300">Experience</a>
          <a href="#projects" className="px-4 py-2 rounded-lg hover:bg-white/10 hover:text-primary transition-all duration-300">Projects</a>
          <a href="#education" className="px-4 py-2 rounded-lg hover:bg-white/10 hover:text-primary transition-all duration-300">Education</a>
          <a href="#contact" className="btn-glow ml-2 !py-2 !px-4">Contact</a>
        </div>

        {/* Hamburger menu */}
        <div onClick={handleNav} className="block md:hidden p-2 cursor-pointer z-50 rounded-lg hover:bg-white/10 transition-colors">
          {nav ? <AiOutlineClose size={26} className="text-primary" /> : <AiOutlineMenu size={26} />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 md:hidden ${nav ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} />

      {/* Mobile Menu */}
      <div
        className={`menu fixed left-0 top-0 w-[75%] max-w-[300px] h-screen bg-dark/95 backdrop-blur-lg border-r border-white/10 ease-out duration-300 z-40 ${nav ? "translate-x-0" : "-translate-x-full"}`}
      >
        <h2 className="text-2xl font-bold p-6 border-b border-white/10">
          <a href="/" className="gradient-text">{`<${shortName} />`}</a>
        </h2>
        <div className="flex flex-col py-4">
          <a href="#" className="px-6 py-4 hover:bg-white/10 hover:text-primary transition-all duration-300 border-b border-white/5">Home</a>
          <a href="#skills" className="px-6 py-4 hover:bg-white/10 hover:text-primary transition-all duration-300 border-b border-white/5">Skills</a>
          <a href="#experience" className="px-6 py-4 hover:bg-white/10 hover:text-primary transition-all duration-300 border-b border-white/5">Experience</a>
          <a href="#projects" className="px-6 py-4 hover:bg-white/10 hover:text-primary transition-all duration-300 border-b border-white/5">Projects</a>
          <a href="#education" className="px-6 py-4 hover:bg-white/10 hover:text-primary transition-all duration-300 border-b border-white/5">Education</a>
          <a href="#contact" className="px-6 py-4 hover:bg-white/10 hover:text-primary transition-all duration-300">Contact</a>
        </div>
      </div>
    </nav>
  );
};

