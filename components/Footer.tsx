import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

interface FooterProps {
  onOpenPrivacy?: () => void;
  onOpenTerms?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const socialLinks = [
    { icon: Github, href: "#", label: "Github" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/109306896", label: "LinkedIn" },
    { icon: Mail, href: "mailto:codify.mdev@gmail.com", label: "Email" }
  ];

  return (
    <footer className="bg-black py-8 md:py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 md:mb-12 gap-6 md:gap-0">
            <div className="flex items-center gap-3">
              <img 
                src="https://i.postimg.cc/13Q6MqBC/475252253-579232535096381-4554212589792718853-n.jpg" 
                alt="MasterDeveloper" 
                className="h-8 md:h-10 w-auto object-contain rounded-lg" 
              />
              <span className="text-lg md:text-xl font-bold text-white">MasterDeveloper</span>
            </div>
            
            <div className="flex gap-6">
              {socialLinks.map((item, i) => (
                <a 
                  key={i} 
                  href={item.href} 
                  target={item.href.startsWith('http') ? "_blank" : undefined}
                  rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="text-slate-500 hover:text-cyan-400 transition-colors"
                  aria-label={item.label}
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-slate-600 pt-6 md:pt-8 border-t border-white/5 text-center md:text-left">
          <p>© {new Date().getFullYear()} MasterDeveloper. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <button 
              onClick={onOpenPrivacy}
              className="hover:text-cyan-400 transition-colors cursor-pointer bg-transparent border-none p-0 text-slate-600"
            >
              Privacy Policy
            </button>
            <button 
              onClick={onOpenTerms}
              className="hover:text-cyan-400 transition-colors cursor-pointer bg-transparent border-none p-0 text-slate-600"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
