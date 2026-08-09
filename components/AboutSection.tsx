'use client';

import { motion } from 'motion/react';
import { Play, Clapperboard, Heart } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: <Clapperboard className="text-primary" size={24} />,
      title: "Cinematic Quality",
      description: "High-definition edits with professional color grading and transitions."
    },
    {
      icon: <Heart className="text-primary" size={24} />,
      title: "Emotional Storytelling",
      description: "Bringing out the deepest feelings from your favorite Korean dramas."
    },
    {
      icon: <Play className="text-primary" size={24} />,
      title: "Daily Uploads",
      description: "Fresh content delivered daily to our Facebook community."
    }
  ];

  return (
    <section className="py-24 bg-dark relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-bold mb-6 whitespace-nowrap tracking-tight">
              About <span className="text-primary">Dramatic Sarang Edit</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed mb-8 font-light">
              We specialize in creating powerful, emotional, and visually stunning Korean drama video edits. Our goal is to capture the essence of every heartbreaking moment, epic battle, and romantic encounter. 
            </p>
            <p className="text-white/60 text-lg leading-relaxed font-light">
              Every edit is crafted with precision to deliver a cinematic experience directly to your feed. Join our growing community on Facebook and immerse yourself in the drama.
            </p>
          </motion.div>
          
          <div className="grid gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md border border-white/5 p-6 rounded-[24px] flex gap-6 items-start hover:border-primary/30 transition-colors group shadow-lg"
              >
                <div className="w-14 h-14 bg-dark rounded-full flex items-center justify-center shrink-0 border border-white/10 group-hover:shadow-[0_0_15px_rgba(255,45,85,0.2)] transition-shadow">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
