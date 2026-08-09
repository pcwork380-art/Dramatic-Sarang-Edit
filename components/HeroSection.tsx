"use client";
import Image from "next/image";

import { motion } from 'motion/react';
import { PlayCircle, Facebook } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-dark pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" 
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-xl space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block"
          >
            <span className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
              Official Creator Website
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight"
          >
            Dramatic <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ff758c]">Sarang Edit</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-white/50 leading-relaxed font-light"
          >
            Emotional &bull; Dramatic &bull; Korean Style Video Edits. <br/>
            A cinematic journey through moments captured in time.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a
              href="#videos"
              className="flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary-hover transition-all hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,45,85,0.3)] w-full sm:w-auto justify-center"
            >
              Watch Videos
            </a>
            <a
              href="https://www.facebook.com/dramaticsarangedit11"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-3 bg-white/5 border border-white/10 text-white rounded-xl font-bold hover:bg-white/10 transition-all hover:scale-[1.02] w-full sm:w-auto justify-center"
            >
              Follow on Facebook
            </a>
          </motion.div>
        </div>

        {/* Follow Card (Glassmorphism) - visible on desktop */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0, y: [0, -10, 0] }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.4 },
            x: { duration: 0.8, delay: 0.4 },
            y: { duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1.2 }
          }}
          className="hidden lg:flex flex-1 max-w-[340px] bg-white/5 backdrop-blur-xl border border-white/10 rounded-[32px] p-8 flex-col space-y-6 shadow-2xl"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-purple-500 p-1">
                <div className="w-full h-full rounded-full bg-dark-gray flex items-center justify-center border-4 border-dark">
                  <span className="text-2xl font-bold text-white">DSE</span>
                </div>
              </div>
              <div className="absolute bottom-0 right-1 w-6 h-6 bg-blue-500 border-2 border-dark rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Dramatic Sarang Edit</h3>
              <p className="text-white/40 text-sm">@dramaticsarangedit11</p>
            </div>
            <p className="text-white/60 text-sm italic tracking-wide">
              &quot;Follow Dramatic Sarang Edit for daily emotional edits and new videos.&quot;
            </p>
            <a
              href="https://www.facebook.com/dramaticsarangedit11"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#1877F2] hover:bg-[#166fe5] text-white py-3 rounded-full font-bold transition-all flex items-center justify-center gap-2"
            >
              <Facebook size={20} />
              Follow Page
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
