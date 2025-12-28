import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layers, Code2, User, Zap, Menu, X } from 'lucide-react';
import { Button } from './Button';

interface NavItemProps {
  item: {
    name: string;
    href: string;
    icon: React.ElementType;
    index: number;
  };
  isActive: boolean;
  onClick: (index: number) => void;
}

const NavItem: React.FC<NavItemProps> = ({ item, isActive, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={() => onClick(item.index)}
      className={`relative flex items-center px-3 py-2 rounded-full transition-all group cursor-pointer ${isActive ? 'bg-white/10 text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <item.icon className={`w-5 h-5 transition-transform duration-300 ${isHovered || isActive ? 'scale-110 text-cyan-400' : ''}`} />
      <AnimatePresence>
        {(isHovered || isActive) && (
          <motion.span
            {...{
              initial: { opacity: 0, width: 0, marginLeft: 0 },
              animate: { opacity: 1, width: 'auto', marginLeft: 8 },
              exit: { opacity: 0, width: 0, marginLeft: 0 },
              transition: { duration: 0.2, ease: "easeInOut" }
            } as any}
            className="text-sm font-medium whitespace-nowrap overflow-hidden"
          >
            {item.name}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
};

interface NavigationProps {
  onNavigate?: (index: number) => void;
  currentSection?: number;
}

export const Navigation: React.FC<NavigationProps> = ({ onNavigate, currentSection = 0 }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleNavClick = (index: number) => {
    if (onNavigate) {
      onNavigate(index);
    }
    setIsMobileOpen(false);
  };

  const navLinks = [
    { name: 'About', href: '#about', icon: User, index: 1 },
    { name: 'Features', href: '#features', icon: Layers, index: 2 },
    { name: 'Codify', href: '#codify', icon: Code2, index: 3 },
  ];

  return (
    <>
      <motion.nav
        {...{
          initial: { y: -100, x: "-50%", opacity: 0 },
          animate: { y: 0, x: "-50%", opacity: 1 },
          transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        } as any}
        className="fixed top-6 left-1/2 z-50 w-[calc(100%-2rem)] md:w-[95%] max-w-5xl"
      >
        <div className="relative backdrop-blur-xl bg-[#0A0F1C]/80 border border-white/10 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.2)] px-4 py-3 flex items-center justify-between">
          
          {/* Logo Section */}
          <div 
            className="flex items-center gap-3 pl-2 cursor-pointer group"
            onClick={() => handleNavClick(0)}
          >
            <img 
              src="https://i.ibb.co/W4wrG30t/Logo-Improved.png" 
              alt="MasterDeveloper" 
              className="h-9 w-auto object-contain rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" 
            />
            <span className="font-bold text-white tracking-tight hidden sm:block">MasterDeveloper</span>
          </div>

          {/* Desktop Navigation - Centered Icons */}
          <div className="hidden md:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
            <div className="flex items-center bg-white/5 rounded-full p-1 border border-white/5">
              {navLinks.map((link) => (
                <NavItem 
                  key={link.name} 
                  item={link} 
                  isActive={currentSection === link.index}
                  onClick={handleNavClick} 
                />
              ))}
            </div>
          </div>

          {/* Right Action Section */}
          <div className="flex items-center gap-3 pr-1">
             <div className="hidden md:block">
                <Button 
                  variant="glow" 
                  className={`!py-2 !px-4 !text-xs !h-9 border-cyan-500/30 ${currentSection === 4 ? 'bg-cyan-950/30' : ''}`}
                  onClick={() => handleNavClick(4)}
                >
                   <Zap className="w-3 h-3 mr-2" />
                   Waitlist
                </Button>
             </div>
             
             {/* Mobile Menu Toggle */}
             <button 
                className="md:hidden p-2 text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
             >
                {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
             </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            {...{
              initial: { opacity: 0, scale: 0.95, y: -20 },
              animate: { opacity: 1, scale: 1, y: 0 },
              exit: { opacity: 0, scale: 0.95, y: -20 },
              transition: { duration: 0.2 }
            } as any}
            className="fixed top-24 left-4 right-4 z-40 md:hidden"
          >
            <div className="bg-[#0A0F1C]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden p-4 space-y-2">
               {navLinks.map((link) => (
                 <button 
                   key={link.name}
                   onClick={() => handleNavClick(link.index)}
                   className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-colors group ${currentSection === link.index ? 'bg-white/10 text-white' : 'bg-white/5 hover:bg-white/10 text-slate-300'}`}
                 >
                   <div className={`p-2 rounded-lg transition-colors ${currentSection === link.index ? 'bg-cyan-500/20 text-cyan-400' : 'bg-black/20 group-hover:bg-cyan-500/20 text-slate-400 group-hover:text-cyan-400'}`}>
                     <link.icon className="w-5 h-5" />
                   </div>
                   <span className="font-medium">{link.name}</span>
                 </button>
               ))}
               <div className="pt-2 mt-2 border-t border-white/5">
                 <Button variant="primary" className="w-full justify-center !py-3" onClick={() => handleNavClick(4)}>
                   Join Waitlist
                 </Button>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};