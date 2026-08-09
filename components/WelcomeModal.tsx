'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, X, Loader2 } from 'lucide-react';
import Markdown from 'react-markdown';

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchWelcomeMessage = async () => {
      try {
        const res = await fetch('/api/welcome-message', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
        const data = await res.json();
        if (res.ok) {
          setMessage(data.text);
        } else {
          setMessage("Welcome to Dramatic Sarang Edit! We're thrilled to have you here. Please enjoy our viral K-Drama video edits and feel free to ask me any questions.");
        }
      } catch (error) {
        setMessage("Welcome to Dramatic Sarang Edit! We're thrilled to have you here. Please enjoy our viral K-Drama video edits and feel free to ask me any questions.");
      } finally {
        setIsLoading(false);
      }
    };

    const hasVisited = localStorage.getItem('hasVisited_dramatic_sarang');
    if (!hasVisited) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsOpen(true);
      fetchWelcomeMessage();
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasVisited_dramatic_sarang', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 z-50 w-full max-w-md -translate-x-1/2 -translate-y-1/2 p-6"
          >
            <div className="relative overflow-hidden rounded-2xl bg-dark-gray border border-white/10 shadow-[0_0_40px_rgba(255,45,85,0.15)] p-8">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-pink-500" />
              
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-pink-500/20 text-pink-500 animate-pulse">
                  <Heart size={24} fill="currentColor" />
                </div>
                <h3 className="text-xl font-bold font-display text-white">Sarang Guide 💖</h3>
              </div>

              <div className="min-h-[80px] flex items-center">
                {isLoading ? (
                  <div className="flex items-center gap-3 text-gray-400 w-full">
                    <Loader2 className="animate-spin text-primary" size={20} />
                    <span className="text-sm">Generating a personalized welcome...</span>
                  </div>
                ) : (
                  <div className="markdown-body text-gray-300 text-lg leading-relaxed">
                    {message}
                  </div>
                )}
              </div>

              {!isLoading && (
                <div className="mt-8">
                  <button
                    onClick={handleClose}
                    className="w-full py-3 px-4 bg-gradient-to-r from-primary to-purple-600 hover:from-primary-hover hover:to-purple-500 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20"
                  >
                    Thank You!
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
