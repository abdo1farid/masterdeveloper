import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'glow';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-bold tracking-wide transition-all duration-300 flex items-center justify-center gap-2 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:bg-blue-500 border border-blue-400/20",
    secondary: "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 backdrop-blur-sm",
    glow: "bg-transparent text-cyan-300 border border-cyan-500/30 hover:bg-cyan-950/30 hover:border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]"
  };

  return (
    <motion.button
      {...{
        whileHover: { scale: 1.02, y: -2 },
        whileTap: { scale: 0.98 }
      } as any}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      {variant === 'primary' && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[length:200%_auto] animate-shimmer" />
      )}
    </motion.button>
  );
};