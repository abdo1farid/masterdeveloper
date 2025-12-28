import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logoGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
        <stop stopColor="#06B6D4" /> {/* Cyan-500 */}
        <stop offset="1" stopColor="#3B82F6" /> {/* Blue-500 */}
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="1.5" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    {/* Background Container */}
    <rect width="100" height="100" rx="22" fill="url(#logoGradient)" />
    
    {/* Inner Border (Optional subtle detail) */}
    <rect x="5" y="5" width="90" height="90" rx="18" stroke="white" strokeOpacity="0.1" strokeWidth="2" />

    {/* Letter M */}
    <path 
      d="M20 70V30L35 52L50 30V70" 
      stroke="white" 
      strokeWidth="7" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      filter="url(#glow)"
    />
    
    {/* Letter D */}
    <path 
      d="M62 30H72C82 30 88 38 88 50C88 62 82 70 72 70H62V30Z" 
      stroke="white" 
      strokeWidth="7" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      filter="url(#glow)"
    />
  </svg>
);