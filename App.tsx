import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { CodifyShowcase } from './components/CodifyShowcase';
import { About } from './components/About';
import { Waitlist } from './components/Waitlist';
import { Footer } from './components/Footer';
import { LegalModal } from './components/LegalModal';
import { TermsContent, PrivacyPolicyContent } from './components/LegalDocs';
import { ArrowRight, ArrowLeft, Pause, Play } from 'lucide-react';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = 5;
  const [timeLeft, setTimeLeft] = useState(15);
  const [isPaused, setIsPaused] = useState(false);
  const [legalPage, setLegalPage] = useState<'privacy' | 'terms' | null>(null);

  // Reset timer whenever the section changes
  useEffect(() => {
    if (currentSection < totalSections - 1) {
      setTimeLeft(15);
      setIsPaused(false);
    }
  }, [currentSection]);

  // Timer countdown logic
  useEffect(() => {
    // Stop timer if on last section or paused
    if (currentSection === totalSections - 1 || isPaused) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          setCurrentSection((curr) => curr + 1);
          return 15;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currentSection, isPaused]);

  const handleManualNext = () => {
    if (currentSection < totalSections - 1) {
      setCurrentSection((prev) => prev + 1);
    }
  };

  const handleManualPrev = () => {
    if (currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
    }
  };

  const navigateToSection = (index: number) => {
    setCurrentSection(index);
  };

  const isLastSection = currentSection === totalSections - 1;

  return (
    <div className="bg-[#0B0F19] h-screen w-screen overflow-hidden relative selection:bg-cyan-500/30 selection:text-cyan-200 font-sans">
      <Navigation onNavigate={navigateToSection} currentSection={currentSection} />
      
      {/* Sections Container - Horizontal Translation */}
      <motion.div 
        {...{
          animate: { x: `-${currentSection * 100}vw` },
          transition: { type: "spring", stiffness: 40, damping: 20, mass: 1 }
        } as any}
        className="flex h-full w-[500vw]"
      >
        
        {/* Section 1: Hero */}
        <section className="w-screen h-screen flex-shrink-0 relative">
           <Hero onNavigate={navigateToSection} />
        </section>

        {/* Section 2: About */}
        <section className="w-screen h-screen flex-shrink-0 relative">
           <About />
        </section>

        {/* Section 3: Features */}
        <section className="w-screen h-screen flex-shrink-0 relative">
           <Features />
        </section>

        {/* Section 4: Codify */}
        <section className="w-screen h-screen flex-shrink-0 relative">
           <CodifyShowcase />
        </section>

        {/* Section 5: Waitlist + Footer */}
        <section className="w-screen h-screen flex-shrink-0 relative bg-[#020408] overflow-hidden">
           {/* Background for consistency */}
           <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[128px]" />
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[128px]" />
               <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />
           </div>

           {/* Scrollable Container for Mobile Overflow */}
           <div className="w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar relative z-10">
               <div className="min-h-full flex flex-col pt-32 lg:pt-0">
                   {/* Waitlist Content - Centers when space is available, scrolls if not */}
                   <div id="waitlist" className="flex-1 flex items-center justify-center p-4 md:p-6 w-full mb-12">
                       <Waitlist />
                   </div>
                   
                   {/* Footer at the bottom of the scrollable area */}
                   <div className="w-full bg-[#020408]">
                      <Footer 
                        onOpenPrivacy={() => setLegalPage('privacy')} 
                        onOpenTerms={() => setLegalPage('terms')} 
                      />
                   </div>
               </div>
           </div>
        </section>

      </motion.div>

      {/* Control Buttons Container */}
      <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4">
        
        {/* Previous Button - Show if not first section */}
        {currentSection > 0 && (
          <button 
            onClick={handleManualPrev}
            className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all shadow-lg"
            title="Previous Section"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        )}

        {/* Play/Pause Button - Show if not last section */}
        {!isLastSection && (
          <button 
            onClick={() => setIsPaused(!isPaused)}
            className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:scale-105 active:scale-95 transition-all shadow-lg"
            title={isPaused ? "Resume Timer" : "Pause Timer"}
          >
            {isPaused ? <Play className="w-5 h-5 fill-current ml-0.5" /> : <Pause className="w-5 h-5 fill-current" />}
          </button>
        )}

        {/* Next/Timer Button - Show if not last section */}
        {!isLastSection && (
          <div className="relative flex flex-col items-center">
            <button 
                onClick={handleManualNext}
                className="w-16 h-16 bg-white rounded-full flex flex-col items-center justify-center shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95 transition-transform duration-300 group z-10"
            >
                 <ArrowRight className="w-6 h-6 text-black mb-0.5 group-hover:translate-x-1 transition-transform" />
                 
                 {/* Timer Text */}
                 <span className={`text-[10px] font-bold ${isPaused ? 'text-slate-400' : 'text-blue-600'} font-mono leading-none`}>
                    {timeLeft}
                 </span>
            </button>
            
            {/* Horizontal Slider - Positioned absolutely under the button */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                <motion.div 
                   className={`h-full ${isPaused ? 'bg-slate-500' : 'bg-blue-500'}`}
                   {...{
                     initial: { width: "100%" },
                     animate: { width: `${(timeLeft / 15) * 100}%` },
                     transition: { duration: 1, ease: "linear" }
                   } as any}
                />
            </div>
          </div>
        )}
      </div>

      {/* Legal Modal Overlay */}
      <LegalModal 
        isOpen={!!legalPage} 
        onClose={() => setLegalPage(null)} 
        title={legalPage === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
        icon={legalPage === 'privacy' ? 'privacy' : 'terms'}
      >
        {legalPage === 'privacy' ? <PrivacyPolicyContent /> : <TermsContent />}
      </LegalModal>

    </div>
  );
};

export default App;