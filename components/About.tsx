import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, Code, Sparkles, Target } from 'lucide-react';

export const About: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="relative h-full w-full bg-[#020408] overflow-hidden">
      {/* Background Grid & Noise - Fixed background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />
      
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[128px] translate-x-1/2 pointer-events-none" />

      {/* Scrollable Container for Mobile Responsiveness */}
      <div className="w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
        {/* Changed layout: pt-32 on mobile to clear nav, lg:justify-center for desktop centering */}
        <div className="min-h-full flex flex-col lg:justify-center pt-32 pb-12 lg:py-0">
          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Text Content */}
              <motion.div 
                {...{
                  initial: { opacity: 0, x: -50 },
                  whileInView: { opacity: 1, x: 0 },
                  viewport: { once: true },
                  transition: { duration: 0.8 }
                } as any}
                className="relative order-1 lg:order-none"
              >
                 {/* Decorative Line - visible only on large screens */}
                 <div className="absolute -left-6 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-blue-500/50 to-transparent hidden lg:block" />

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-950/30 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6 lg:mb-8 shadow-[0_0_15px_rgba(59,130,246,0.3)] backdrop-blur-md">
                  <Target className="w-4 h-4" />
                  <span>Our Mission</span>
                </div>
                
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 lg:mb-8 leading-[1.1] tracking-tight text-white">
                  Architecting the <br />
                  <span className="text-blue-500">
                    Next Generation
                  </span>
                </h2>

                <div className="space-y-6 text-base sm:text-lg text-slate-400 leading-relaxed font-light">
                  <p className="border-l-2 border-slate-800 pl-6 hover:border-blue-500 transition-colors duration-300">
                    We are a passionate team dedicated to transforming how developers learn and grow. 
                    Our mission is to create innovative tools and resources that empower developers 
                    at every stage of their journey.
                  </p>
                  <p className="border-l-2 border-slate-800 pl-6 hover:border-purple-500 transition-colors duration-300">
                    Breaking free from traditional teaching methods, we've built a platform that 
                    combines cutting-edge tools with modern learning approaches—designed for the 
                    developer of today and tomorrow.
                  </p>
                </div>
              </motion.div>

              {/* Visual Element - Draggable Cards Area */}
              <motion.div
                {...{
                  initial: { opacity: 0, scale: 0.9 },
                  whileInView: { opacity: 1, scale: 1 },
                  viewport: { once: true },
                  transition: { duration: 0.8 }
                } as any}
                className="relative w-full flex flex-col gap-6 items-center lg:block lg:h-[600px] order-2 lg:order-none pb-20 lg:pb-0"
                ref={containerRef}
              >
                  {/* Central Glowing Core - Hidden on mobile to reduce clutter */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full blur-3xl pointer-events-none hidden lg:block" />
                  
                  {/* Connecting Lines (SVG) - Hidden on mobile */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20 hidden lg:block">
                     <line x1="30%" y1="20%" x2="70%" y2="80%" stroke="url(#gradient-line)" strokeWidth="1" strokeDasharray="4 4" />
                     <line x1="70%" y1="20%" x2="30%" y2="80%" stroke="url(#gradient-line)" strokeWidth="1" strokeDasharray="4 4" />
                     <defs>
                        <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3b82f6" />
                            <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                     </defs>
                  </svg>

                  {/* Card 1: Modern Code */}
                  <motion.div 
                    {...{
                      drag: true,
                      dragConstraints: containerRef,
                      dragElastic: 0.2,
                      whileDrag: { scale: 1.05, cursor: "grabbing" },
                      whileHover: { scale: 1.05, cursor: "grab" }
                    } as any}
                    className="relative lg:absolute lg:top-10 lg:left-10 w-full max-w-sm lg:w-64 p-6 rounded-2xl bg-[#0A0F1C]/90 backdrop-blur-xl border border-blue-500/20 shadow-2xl z-20 group cursor-grab touch-none"
                  >
                      <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors pointer-events-none">
                          <Code className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 pointer-events-none">Modern Code</h3>
                      <p className="text-sm text-slate-400 pointer-events-none">Best practices built-in to every interaction.</p>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>

                  {/* Card 2: Innovation */}
                  <motion.div 
                    {...{
                      drag: true,
                      dragConstraints: containerRef,
                      dragElastic: 0.2,
                      whileDrag: { scale: 1.05, cursor: "grabbing" },
                      whileHover: { scale: 1.05, cursor: "grab" }
                    } as any}
                    className="relative lg:absolute lg:bottom-20 lg:right-10 w-full max-w-sm lg:w-64 p-6 rounded-2xl bg-[#0A0F1C]/90 backdrop-blur-xl border border-purple-500/20 shadow-2xl z-20 group cursor-grab touch-none"
                  >
                      <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors pointer-events-none">
                          <Sparkles className="w-6 h-6 text-purple-400" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 pointer-events-none">Smart Tools</h3>
                      <p className="text-sm text-slate-400 pointer-events-none">Advanced utilities at your fingertips.</p>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>

                   {/* Card 3: Community */}
                  <motion.div 
                    {...{
                      drag: true,
                      dragConstraints: containerRef,
                      dragElastic: 0.2,
                      whileDrag: { scale: 1.05, cursor: "grabbing" },
                      whileHover: { scale: 1.05, cursor: "grab" }
                    } as any}
                    className="relative lg:absolute lg:top-20 lg:right-0 w-full max-w-sm lg:w-64 p-6 rounded-2xl bg-[#0A0F1C]/90 backdrop-blur-xl border border-white/10 shadow-xl z-20 group cursor-grab touch-none"
                  >
                      <div className="flex items-center gap-3 mb-3 pointer-events-none">
                        <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                            <Users className="w-5 h-5 text-cyan-400" />
                        </div>
                        <h3 className="text-lg font-bold text-white">Community</h3>
                      </div>
                      <p className="text-sm text-slate-400 pointer-events-none">Grow together with peers in a collaborative space.</p>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};