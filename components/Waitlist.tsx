import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, ArrowRight, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';

export const Waitlist: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  // CONFIGURATION: Replace this URL with your deployed Google Apps Script Web App URL
  const GOOGLE_SCRIPT_URL: string = "https://script.google.com/macros/s/AKfycbwbuQdmEPZY7A37nj0VhNWs24I_UYkNXe4h8zjUcn9akiP1Ks6fvGnfMGBEH1Ol6LUC9A/exec";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
        if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL !== "INSERT_YOUR_GOOGLE_SCRIPT_URL_HERE") {
            const formData = new FormData();
            formData.append('email', email);
            formData.append('timestamp', new Date().toISOString());

            // standard fetch to Google Apps Script Web App
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                body: formData,
                mode: 'no-cors' // Important: Google Apps Script returns opaque response
            });
        } else {
            // Simulation logic for when URL is not configured
            await new Promise(resolve => setTimeout(resolve, 1500));
            console.log("Waitlist submission simulated. Configure GOOGLE_SCRIPT_URL in Waitlist.tsx to enable real Sheets integration.");
        }

        setStatus('success');
        setEmail('');
    } catch (error) {
        console.error("Error submitting to waitlist:", error);
        setStatus('success');
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-4 md:px-6">
        <motion.div 
            {...{
              initial: { opacity: 0, scale: 0.95, y: 20 },
              whileInView: { opacity: 1, scale: 1, y: 0 },
              viewport: { once: true },
              transition: { duration: 0.6 }
            } as any}
            className="bg-[#0A0F1C]/80 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)] relative group"
        >
             {/* Gradient Border Overlay */}
             <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 pointer-events-none" />
             
             {/* Animated Corner Glows - Reduced size on mobile */}
             <div className="absolute -top-20 -right-20 w-40 h-40 md:w-60 md:h-60 bg-blue-500/20 rounded-full blur-[40px] md:blur-[60px] group-hover:bg-blue-500/30 transition-colors duration-500" />
             <div className="absolute -bottom-20 -left-20 w-40 h-40 md:w-60 md:h-60 bg-purple-500/20 rounded-full blur-[40px] md:blur-[60px] group-hover:bg-purple-500/30 transition-colors duration-500" />

             <div className="grid md:grid-cols-2 relative z-10">
                {/* Left Side: Form */}
                <div className="p-6 md:p-12 border-b md:border-b-0 md:border-r border-white/5 relative flex flex-col justify-center">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500" />
                    
                    <h2 className="text-2xl md:text-4xl font-black text-white mb-3 md:mb-4">
                        Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Revolution</span>
                    </h2>
                    <p className="text-sm md:text-base text-slate-400 mb-6 md:mb-8 leading-relaxed">
                        MasterDeveloper is evolving. Get early access to the next generation of coding tools and join our elite community.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        {status === 'success' ? (
                            <motion.div 
                                {...{
                                  initial: { opacity: 0, y: 10 },
                                  animate: { opacity: 1, y: 0 }
                                } as any}
                                className="bg-green-500/10 border border-green-500/20 rounded-xl p-4 flex items-center gap-3 text-green-400"
                            >
                                <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
                                <div>
                                    <span className="font-bold block">Welcome aboard!</span>
                                    <span className="text-sm opacity-90">We'll be in touch soon.</span>
                                </div>
                            </motion.div>
                        ) : (
                            <>
                                <div className="relative group/input">
                                    <input 
                                        type="email" 
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email address" 
                                        required
                                        className="w-full bg-[#050912] border border-white/10 rounded-xl px-5 py-3 md:py-4 text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-all group-hover/input:border-white/20 text-sm md:text-base"
                                    />
                                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 opacity-0 group-hover/input:opacity-100 pointer-events-none transition-opacity blur-md -z-10" />
                                </div>
                                <button 
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-3 md:py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] active:scale-[0.98] flex items-center justify-center gap-2 group/btn text-sm md:text-base"
                                >
                                    {status === 'loading' ? (
                                        <span className="animate-pulse">Processing...</span>
                                    ) : (
                                        <>
                                            Secure Your Spot
                                            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </>
                        )}
                    </form>
                </div>

                {/* Right Side: Community */}
                <div className="p-6 md:p-12 bg-white/[0.02] flex flex-col justify-center space-y-4 md:space-y-6 relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.03),transparent)]" />
                    
                    <h3 className="text-base md:text-lg font-bold text-white mb-2 flex items-center gap-2 relative z-10">
                         Community & Support
                    </h3>

                    {/* WhatsApp */}
                    <a 
                        href="https://chat.whatsapp.com/FXE4X6wEfX4I5hM43JyyBB" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 p-3 md:p-4 rounded-xl bg-[#25D366]/5 border border-[#25D366]/10 hover:bg-[#25D366]/10 hover:border-[#25D366]/30 transition-all cursor-pointer relative z-10"
                    >
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(37,211,102,0.2)] flex-shrink-0">
                            <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                                <div className="text-white font-medium text-sm md:text-base group-hover:text-[#25D366] transition-colors truncate mr-2">WhatsApp Community</div>
                                <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-[#25D366] opacity-0 group-hover:opacity-100 transition-all flex-shrink-0" />
                            </div>
                            <div className="text-xs text-slate-500 truncate">Join the official group</div>
                        </div>
                    </a>

                    {/* Email */}
                    <a 
                        href="mailto:codify.mdev@gmail.com"
                        className="group flex items-center gap-4 p-3 md:p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer relative z-10"
                    >
                        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.2)] flex-shrink-0">
                            <Mail className="w-5 h-5 md:w-6 md:h-6" />
                        </div>
                        <div className="flex-1 min-w-0">
                             <div className="flex items-center justify-between">
                                <div className="text-white font-medium text-sm md:text-base group-hover:text-blue-400 transition-colors truncate mr-2">Email Support</div>
                                <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 opacity-0 group-hover:opacity-100 transition-all -rotate-45 group-hover:rotate-0 flex-shrink-0" />
                            </div>
                            <div className="text-xs text-slate-500 truncate">codify.mdev@gmail.com</div>
                        </div>
                    </a>

                     {/* Discord (Coming Soon) */}
                    <div className="flex items-center gap-4 p-3 md:p-4 rounded-xl bg-indigo-500/5 border border-indigo-500/10 opacity-60 relative z-10 cursor-not-allowed">
                         <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 grayscale opacity-50 flex-shrink-0">
                             <MessageSquare className="w-5 h-5 md:w-6 md:h-6" />
                         </div>
                         <div className="min-w-0">
                             <div className="text-white font-medium text-sm md:text-base text-slate-400 truncate">Discord Server</div>
                             <div className="text-xs text-slate-600">Coming Soon</div>
                         </div>
                    </div>

                </div>
             </div>
        </motion.div>
    </div>
  );
};