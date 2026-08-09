'use client';

import { useState } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import Markdown from 'react-markdown';
import { motion } from 'motion/react';

export function AiDramaRecommender() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setError('');
    
    try {
      const res = await fetch('/api/recommend-drama', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to fetch recommendation');
      
      setResult(data.text);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-b from-dark to-[#1a1c23] border-b border-white/5" id="ai-recommender">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none opacity-50"></div>
      
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center mb-10"
        >
          <div className="inline-flex items-center justify-center p-3 bg-primary/20 rounded-2xl text-primary mb-4 ring-1 ring-primary/30">
            <Sparkles size={32} />
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4 font-display bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-[length:200%_auto] animate-[text-gradient_3s_ease_infinite] drop-shadow-[0_0_15px_rgba(255,45,85,0.3)] leading-tight pb-2">
            Dramatic Sarang Edit AI
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Ask me for viral K-Drama video recommendations, or any questions about our page! I&apos;m here to help you.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit} 
          className="relative mb-10 shadow-2xl shadow-black/50 group"
        >
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Search"
            className="w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2rem] py-5 pl-8 pr-20 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-lg shadow-inner group-hover:border-primary/30"
          />
          <button
            type="submit"
            disabled={loading || !prompt.trim()}
            className="absolute right-3 top-3 bottom-3 aspect-square bg-primary hover:bg-primary/90 disabled:bg-white/10 disabled:text-gray-500 text-white rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            aria-label="Generate recommendation"
          >
            {loading ? <Loader2 size={24} className="animate-spin" /> : <Send size={20} className="ml-1" />}
          </button>
        </motion.form>

        {error && (
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-400 text-center mb-8 animate-in fade-in slide-in-from-bottom-4">
            {error}
          </div>
        )}

        {result && (
          <div className="bg-white/5 border border-white/10 rounded-[2rem] p-8 md:p-10 backdrop-blur-xl animate-in fade-in zoom-in-95 duration-500 shadow-2xl relative">
            <div className="absolute top-0 right-0 p-6 opacity-20 pointer-events-none">
              <Sparkles size={100} />
            </div>
            <div className="markdown-body text-gray-200">
              <Markdown>{result}</Markdown>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
