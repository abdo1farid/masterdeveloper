import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { ArrowRight, Sparkles, Terminal } from 'lucide-react';

const Typewriter: React.FC<{ phrases: string[] }> = ({ phrases }) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const i = loopNum % phrases.length;
    const fullText = phrases[i];

    const handleTyping = () => {
      setText(isDeleting 
        ? fullText.substring(0, text.length - 1) 
        : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 50 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, phrases, typingSpeed]);

  return (
    <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 font-extrabold filter drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
      {text}
      <span className="inline-block w-[3px] h-[0.9em] bg-cyan-400 animate-blink ml-1 align-middle mb-1 shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>
    </span>
  );
};

interface HeroProps {
  onNavigate?: (index: number) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative h-full flex items-center justify-center overflow-hidden bg-[#020408]">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Deep Space Background */}
        <div className="absolute inset-0 bg-brand-dark" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#1e1b4b,transparent_70%)]" />
        
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-[0.2]"
          style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
            backgroundSize: '3rem 3rem',
            transform: 'perspective(1000px) rotateX(60deg) translateY(-200px) scale(2)',
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 30%, black 100%)'
          }}
        />

        {/* Floating Light Orbs */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[128px] animate-pulse-slow mix-blend-screen" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[128px] animate-blob mix-blend-screen" />
        
        {/* Noise Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Text */}
        <div className="text-left flex flex-col items-start relative">
          
          <motion.div
            {...{
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5 }
            } as any}
            onClick={() => onNavigate?.(4)}
            className="inline-flex items-center gap-3 px-1.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium mb-8 backdrop-blur-md hover:bg-white/10 transition-colors cursor-pointer group"
          >
            <span className="bg-cyan-500/20 text-cyan-300 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide shadow-sm border border-cyan-500/20">
              Open
            </span>
            <span className="pr-2 text-xs tracking-wide font-medium text-slate-200 flex items-center gap-1">
              Join Waitlist
              <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.div>

          <motion.h1
            {...{
              initial: { opacity: 0, x: -30 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.8, delay: 0.1 }
            } as any}
            className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-8 leading-[1.1] break-words max-w-full text-white"
          >
            Forging the <br />
            <div className="min-h-[1.2em]">
               <Typewriter phrases={["Elite Devs", "Future Code", "New Standard"]} />
            </div>
          </motion.h1>

          <motion.p
            {...{
              initial: { opacity: 0, x: -30 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.8, delay: 0.2 }
            } as any}
            className="text-lg md:text-xl text-slate-400 max-w-xl leading-relaxed font-light mb-10 border-l-2 border-slate-800 pl-6"
          >
            Creating innovative tools and resources that <span className="text-white font-medium">empower developers</span> at every stage of their journey.
          </motion.p>

          <motion.div
            {...{
              initial: { opacity: 0, y: 30 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.3 }
            } as any}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
             <Button 
               variant="glow" 
               className="w-full sm:w-auto min-w-[160px] h-14 text-base !bg-cyan-950/40 hover:!bg-cyan-900/50"
               onClick={() => onNavigate?.(4)}
             >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Join Waitlist
             </Button>

            <div className="w-full sm:w-auto" onClick={() => onNavigate?.(1)}>
              <Button variant="secondary" className="w-full min-w-[160px] h-14 text-base bg-white/5 border-white/10 text-slate-300 hover:text-white hover:border-white/30">
                Dive In
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Holographic Interface */}
        <motion.div
           {...{
             initial: { opacity: 0, scale: 0.9, rotateY: 15 },
             animate: { opacity: 1, scale: 1, rotateY: 0 },
             transition: { duration: 1, delay: 0.4, type: "spring" }
           } as any}
           className="relative hidden lg:block perspective-1000"
        >
           {/* Decorative elements behind */}
           <div className="absolute -inset-10 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 rounded-full blur-3xl opacity-30 animate-pulse-slow -z-10" />

           {/* The Main Card */}
           <div className="relative rounded-2xl overflow-hidden bg-[#0A0F1C]/80 backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_-10px_rgba(6,182,212,0.15)] group">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-white/5 bg-gradient-to-r from-white/5 to-transparent">
                 <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                       <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                    </div>
                    <div className="h-4 w-[1px] bg-white/10 mx-1" />
                    <span className="text-xs font-mono text-cyan-400 flex items-center gap-2">
                       <Terminal className="w-3 h-3" />
                       master-dev.tsx
                    </span>
                 </div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm relative">
                 {/* Line Numbers */}
                 <div className="absolute left-4 top-6 bottom-6 w-6 flex flex-col items-end gap-1.5 text-slate-700 select-none text-xs">
                    {[1,2,3,4,5,6,7,8].map(n => <span key={n}>{n}</span>)}
                 </div>

                 {/* Code Text */}
                 <div className="pl-10 space-y-1.5">
                    <div className="text-purple-400">interface <span className="text-yellow-200">Developer</span> {'{'}</div>
                    <div className="pl-4 text-slate-300">skills: <span className="text-cyan-300">string</span>[];</div>
                    <div className="pl-4 text-slate-300">passion: <span className="text-blue-400">100%</span>;</div>
                    <div className="pl-4 text-slate-300">future: <span className="text-green-400">"Unlimited"</span>;</div>
                    <div className="text-purple-400">{'}'}</div>
                    <div className="h-2" />
                    <div className="text-blue-400">const <span className="text-white">you</span> = <span className="text-purple-400">new</span> <span className="text-yellow-200">MasterDeveloper</span>();</div>
                    <div className="text-slate-400 flex items-center gap-1">
                      // Ready to upgrade?
                      <motion.div 
                        className="w-2 h-4 bg-cyan-400"
                        {...{
                          animate: { opacity: [1, 0] },
                          transition: { repeat: Infinity, duration: 0.8 }
                        } as any}
                      />
                    </div>
                 </div>
              </div>
           </div>
           
           {/* Glass Reflection Overlay */}
           <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-2xl pointer-events-none" />
        </motion.div>

      </div>
    </section>
  );
};