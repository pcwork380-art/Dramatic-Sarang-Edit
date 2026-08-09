"use client";

import { motion } from "motion/react";
import { Facebook, CheckCircle2, Users } from "lucide-react";
import Image from "next/image";
import { LiveFollowerCount } from "./LiveFollowerCount";

export function FollowSection() {
  return (
    <section id="follow" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark to-dark-gray pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Join the Community
        </h2>

        <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto font-light leading-relaxed">
          Follow Dramatic Sarang Edit for daily emotional edits and new videos.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Facebook Page Preview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center items-center bg-gradient-to-br from-primary/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-white/20 rounded-[32px] p-1 shadow-[0_0_40px_rgba(255,45,85,0.3)] h-full relative group hover:shadow-[0_0_60px_rgba(168,85,247,0.5)] transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-[length:200%_auto] animate-[text-gradient_3s_ease_infinite] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-1 bg-dark-gray rounded-[28px] overflow-hidden" />
            <div className="absolute top-0 left-0 w-48 h-48 bg-primary/30 rounded-full blur-[60px] pointer-events-none -ml-10 -mt-10 group-hover:scale-150 group-hover:bg-purple-500/30 transition-all duration-1000 z-0" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-pink-500/30 rounded-full blur-[60px] pointer-events-none -mr-10 -mb-10 group-hover:scale-150 group-hover:bg-primary/30 transition-all duration-1000 z-0" />

            <div className="relative z-10 w-full h-full bg-transparent rounded-[28px] p-5 flex justify-center items-center">
              <LiveFollowerCount />
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center bg-gradient-to-br from-[#1877F2]/20 via-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-white/20 p-1 rounded-[32px] h-full shadow-[0_0_40px_rgba(24,119,242,0.3)] relative group hover:shadow-[0_0_60px_rgba(24,119,242,0.5)] transition-all duration-500"
          >
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-[#1877F2] via-blue-400 to-cyan-400 bg-[length:200%_auto] animate-[text-gradient_3s_ease_infinite] opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute inset-1 bg-dark-gray rounded-[28px] overflow-hidden" />
            
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#1877F2]/30 rounded-full blur-[60px] pointer-events-none -mr-10 -mt-10 group-hover:scale-150 group-hover:bg-cyan-500/30 transition-all duration-1000 z-0" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/30 rounded-full blur-[60px] pointer-events-none -ml-10 -mb-10 group-hover:scale-150 group-hover:bg-[#1877F2]/30 transition-all duration-1000 z-0" />

            <div className="relative z-10 flex flex-col items-center justify-center h-full p-8 md:p-12">
              <div className="w-16 h-16 bg-[#1877F2]/20 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-[#1877F2]/30 group-hover:ring-[#1877F2]/60 transition-all duration-500">
                <Facebook size={32} className="text-[#1877F2] group-hover:scale-110 transition-transform duration-500" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Never Miss an Update
              </h3>

              <p className="text-white/80 mb-8 font-medium text-sm italic tracking-wide">
                &quot;We upload new high-quality dramatic edits every day.
                Follow our page and turn on notifications to watch them
                first!&quot;
              </p>

              <a
                href="https://www.facebook.com/dramaticsarangedit11"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#1877F2] to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white rounded-full font-bold transition-all w-full shadow-lg shadow-[#1877F2]/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Facebook size={20} />
                Follow Page
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
