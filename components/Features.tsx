import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Layers, Users, TrendingUp, Activity, ArrowUpRight, Cpu, Terminal } from 'lucide-react';
import { FeatureItem } from '../types';

const features: FeatureItem[] = [
  {
    title: 'Developer Tools',
    description: 'Powerful utilities and extensions designed to streamline your workflow, boost productivity, and solve real-world development challenges.',
    icon: Terminal,
  },
  {
    title: 'Interactive Courses',
    description: 'Learn coding through modern, hands-on courses that break away from traditional teaching. Master skills at your own pace with real projects.',
    icon: Layers,
  },
  {
    title: 'Community Hub',
    description: 'Connect with thousands of developers worldwide, share knowledge, collaborate on projects, and grow together in a supportive environment.',
    icon: Users,
  },
  {
    title: 'Progress Tracking',
    description: 'Monitor your growth with detailed analytics. Track your progress, identify strengths, and get personalized recommendations for improvement.',
    icon: TrendingUp,
  },
];

const FeatureCard: React.FC<{ feature: FeatureItem; index: number }> = ({ feature, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      {...{
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: index * 0.1, duration: 0.5 }
      } as any}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group h-full"
    >
      {/* Connector Line (Decorative) - visible on lg screens */}
      <div className={`hidden lg:block absolute -top-12 left-8 w-px h-12 bg-gradient-to-b from-transparent to-white/10 transition-all duration-500 ${isHovered ? 'to-cyan-500/50' : ''}`} />

      {/* Main Card Container */}
      <div className="relative h-full bg-[#0A0F1C]/80 backdrop-blur-sm border border-white/5 p-1 overflow-hidden transition-all duration-300 group-hover:border-cyan-500/30 group-hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.15)] rounded-2xl">
        
        {/* Tech Corners - HUD Style */}
        <div className="absolute top-0 left-0 w-4 h-4 border-l border-t border-white/10 rounded-tl-xl transition-colors duration-300 group-hover:border-cyan-500" />
        <div className="absolute top-0 right-0 w-4 h-4 border-r border-t border-white/10 rounded-tr-xl transition-colors duration-300 group-hover:border-cyan-500" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-l border-b border-white/10 rounded-bl-xl transition-colors duration-300 group-hover:border-cyan-500" />
        <div className="absolute bottom-0 right-0 w-4 h-4 border-r border-b border-white/10 rounded-br-xl transition-colors duration-300 group-hover:border-cyan-500" />

        <div className="relative h-full bg-[#050912] rounded-xl p-6 lg:p-8 flex flex-col z-10 overflow-hidden">
            {/* Hover Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            {/* Header */}
            <div className="flex justify-between items-start mb-6">
                <div className={`p-3 rounded-lg bg-white/5 border border-white/5 group-hover:bg-cyan-950/30 group-hover:border-cyan-500/30 transition-all duration-300 group-hover:scale-110`}>
                    <feature.icon className={`w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors`} />
                </div>
                <div className="flex flex-col items-end">
                  <span className="font-mono text-[10px] text-slate-600 group-hover:text-cyan-500/50 transition-colors">
                      MODULE.0{index + 1}
                  </span>
                  <div className={`h-1 w-8 mt-1 rounded-full transition-colors duration-300 ${isHovered ? 'bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'bg-slate-800'}`} />
                </div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-100 transition-colors flex items-center gap-2">
                {feature.title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors">
                {feature.description}
            </p>

            {/* Bottom Tech Detail - Status Bar */}
            <div className="mt-auto pt-8 flex items-center justify-end opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                <ArrowUpRight className="w-4 h-4 text-cyan-500 transform translate-y-2 -translate-x-2 opacity-0 group-hover:translate-y-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300" />
            </div>
            
            {/* Progress Bar Animation on Hover */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
                <div className={`h-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-700 ease-out ${isHovered ? 'w-full' : 'w-0'}`} />
            </div>
        </div>
      </div>
    </motion.div>
  );
};

export const Features: React.FC = () => {
  return (
    <section id="features" className="relative h-full w-full bg-[#020408] overflow-hidden">
      {/* Background Tech Mesh */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-900/10 rounded-full blur-[100px]" />
          
          {/* Vertical Lines */}
          <div className="absolute left-10 top-0 bottom-0 w-px bg-white/5 hidden md:block" />
          <div className="absolute right-10 top-0 bottom-0 w-px bg-white/5 hidden md:block" />
      </div>

      {/* Scrollable Container for Mobile Responsiveness */}
      <div className="w-full h-full overflow-y-auto overflow-x-hidden custom-scrollbar">
        {/* Changed layout: pt-32 on mobile to clear nav, lg:justify-center for desktop centering */}
        <div className="min-h-full flex flex-col justify-center pt-32 pb-12 lg:py-0">
          <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
                <div className="max-w-2xl">
                    <motion.div 
                        {...{
                          initial: { opacity: 0, x: -20 },
                          whileInView: { opacity: 1, x: 0 },
                          viewport: { once: true }
                        } as any}
                        className="flex items-center gap-2 text-cyan-500 font-mono text-xs mb-4"
                    >
                        <Activity className="w-4 h-4" />
                        <span className="tracking-[0.2em]">SYSTEM ARCHITECTURE</span>
                    </motion.div>
                    <motion.h2 
                        {...{
                          initial: { opacity: 0, y: 20 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: true },
                          transition: { delay: 0.1 }
                        } as any}
                        className="text-4xl md:text-6xl font-black leading-tight text-white"
                    >
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 filter drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]">Core Modules</span>
                    </motion.h2>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};