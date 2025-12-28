import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Hammer, Wrench, Loader2, Terminal, FileCode } from 'lucide-react';

const HexStream: React.FC = () => {
  const [stream, setStream] = useState('');
  
  useEffect(() => {
    const chars = '0123456789ABCDEF';
    const interval = setInterval(() => {
      let result = '';
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 4; j++) {
           result += chars[Math.floor(Math.random() * chars.length)];
        }
        result += ' ';
      }
      setStream(result);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return <div className="font-mono text-[10px] text-cyan-500/30 whitespace-pre">{stream}</div>;
};

export const CodifyShowcase: React.FC = () => {
  return (
    <section id="codify" className="relative h-full w-full bg-[#020408] overflow-hidden perspective-[2000px]">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[#020408] pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(6,182,212,0.05)_1px,transparent_1px),linear-gradient(to_right,rgba(6,182,212,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_40%,transparent_100%)]" />
          {/* Reactor Core Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      {/* Scrollable Container for Mobile Responsiveness */}
      <div className="w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
        {/* Adjusted layout: pt-32 for mobile, flexible height */}
        <div className="min-h-full flex flex-col justify-center pt-32 pb-12 lg:py-0">
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex flex-col items-center">
            
            {/* Header Text Area */}
            <div className="text-center mb-8 lg:mb-12 relative">
                <motion.h2 
                  {...{
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { delay: 0.1 }
                  } as any}
                  className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight mb-4 leading-tight"
                >
                  Introducing <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 filter drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]">Codify</span>
                </motion.h2>

                <motion.p
                  {...{
                    initial: { opacity: 0, y: 20 },
                    whileInView: { opacity: 1, y: 0 },
                    viewport: { once: true },
                    transition: { delay: 0.2 }
                  } as any}
                  className="text-base md:text-xl text-slate-400 max-w-2xl mx-auto mt-4 md:mt-6 font-light leading-relaxed px-4"
                >
                  A platform that aims to teach new developers in the best way
                </motion.p>
            </div>

            {/* 3D Holographic Interface */}
            <motion.div
              {...{
                initial: { rotateX: 20, rotateY: 0, opacity: 0, y: 50 },
                whileInView: { rotateX: 5, rotateY: 0, opacity: 1, y: 0 },
                viewport: { once: true },
                transition: { duration: 1, type: "spring" }
              } as any}
              className="relative w-full max-w-5xl aspect-square sm:aspect-[16/9] lg:aspect-[2/1] rounded-2xl bg-[#030712]/90 border border-white/10 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.5)] overflow-hidden group hover:border-cyan-500/30 transition-colors duration-500"
            >
                {/* Outer Glow Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />

                {/* Window Header */}
                <div className="h-10 md:h-12 border-b border-white/5 bg-[#0A0F1C] flex items-center justify-between px-4 md:px-6 select-none z-20 relative">
                    <div className="flex items-center gap-4">
                        <div className="flex gap-2">
                            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                        </div>
                        <div className="h-4 w-px bg-white/10" />
                        <span className="text-[10px] font-mono text-slate-500 flex items-center gap-2">
                            <Terminal className="w-3 h-3" />
                            Codify
                        </span>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="absolute inset-0 top-12 flex">
                    {/* Sidebar */}
                    <div className="w-64 border-r border-white/5 bg-[#050912]/50 p-6 hidden md:flex flex-col gap-4">
                        <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Explorer</div>
                        {[1,2,3].map(i => (
                            <div key={i} className="flex items-center gap-2 text-slate-600">
                                 <FileCode className="w-4 h-4" />
                                 <div className="h-2 bg-slate-800 rounded w-24 animate-pulse" style={{ width: Math.random() * 50 + 40 }} />
                            </div>
                        ))}
                        <div className="mt-auto">
                            <div className="h-32 bg-gradient-to-b from-transparent to-cyan-500/5 border border-cyan-500/10 rounded-lg p-3">
                                 <div className="text-[10px] text-cyan-500/50 font-mono mb-2">SYSTEM LOGS</div>
                                 <HexStream />
                                 <HexStream />
                                 <HexStream />
                            </div>
                        </div>
                    </div>

                    {/* Editor Area (Blurred) */}
                    <div className="flex-1 p-8 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                        <div className="space-y-3 blur-[3px] opacity-40">
                             <div className="flex gap-4"><span className="text-purple-500">import</span> <span className="text-white">Future</span> <span className="text-purple-500">from</span> <span className="text-green-400">'@codify/core'</span>;</div>
                             <div className="flex gap-4"><span className="text-blue-500">class</span> <span className="text-yellow-400">Revolution</span> <span className="text-blue-500">extends</span> <span className="text-yellow-400">Platform</span> {'{'}</div>
                             <div className="pl-8 flex gap-4"><span className="text-purple-500">constructor</span>() {'{'}</div>
                             <div className="pl-12 text-slate-400">// Initializing neural pathways...</div>
                             <div className="pl-12 flex gap-4"><span className="text-blue-500">this</span>.<span className="text-white">power</span> = <span className="text-orange-400">Infinity</span>;</div>
                        </div>
                    </div>
                </div>

                {/* In Development Overlay (Center) */}
                <div className="absolute inset-0 top-10 md:top-12 z-30 flex items-center justify-center bg-[#050912]/60 backdrop-blur-sm p-4">
                    
                    {/* Scanning Line Effect */}
                    <div className="absolute inset-0 pointer-events-none overflow-hidden">
                        <div className="w-full h-px bg-cyan-400/50 shadow-[0_0_20px_rgba(6,182,212,1)] animate-scanline" />
                    </div>

                    <div className="relative p-1 w-full max-w-md">
                        {/* Animated Border */}
                        <div className="absolute inset-0 rounded-2xl border border-cyan-500/30 clip-path-polygon" />
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl opacity-20 blur-sm" />

                        <div className="bg-[#0A0F1C] p-6 md:p-12 rounded-xl border border-white/10 shadow-2xl flex flex-col items-center text-center relative overflow-hidden">
                            {/* Background Grid in Card */}
                            <div className="absolute inset-0 bg-[size:20px_20px] bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] opacity-50" />

                            <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan-950/30 rounded-full flex items-center justify-center mb-4 md:mb-6 relative group">
                                <div className="absolute inset-0 rounded-full border border-cyan-500/30 border-t-cyan-400 animate-spin transition-all duration-3000" />
                                <Hammer className="w-8 h-8 md:w-10 md:h-10 text-cyan-400 relative z-10" />
                                <Wrench className="w-3 h-3 md:w-4 md:h-4 text-cyan-200 absolute bottom-1 right-1 bg-[#0A0F1C] rounded-full p-0.5" />
                            </div>

                            <h3 className="text-xl md:text-2xl font-bold text-white mb-2 relative z-10">Under Construction</h3>
                            <p className="text-slate-400 text-xs md:text-sm mb-6 relative z-10 leading-relaxed">
                                The Codify platform is currently in the development phase. Our team is actively building this module.
                            </p>
                            
                            <div className="mt-2 md:mt-6 flex items-center gap-2 text-[10px] md:text-xs text-yellow-400/80 bg-yellow-950/20 px-3 py-1 rounded border border-yellow-500/20">
                                <Loader2 className="w-3 h-3 animate-spin" />
                                <span>WORK IN PROGRESS</span>
                            </div>
                        </div>
                    </div>
                </div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};