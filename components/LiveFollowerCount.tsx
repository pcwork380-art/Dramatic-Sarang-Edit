'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Users, Activity } from 'lucide-react';

export function LiveFollowerCount() {
  const [followers, setFollowers] = useState<string>("Loading...");
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    async function fetchFollowers() {
      try {
        const res = await fetch('/api/followers');
        if (!res.ok) {
          throw new Error(`Failed to fetch: ${res.status}`);
        }
        const contentType = res.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await res.json();
          if (data.followers) {
            setFollowers(data.followers);
            setIsLive(true);
          }
        } else {
          throw new Error('Response is not JSON');
        }
      } catch (err) {
        console.error('Failed to fetch followers', err);
        setFollowers("1.1K");
      }
    }

    fetchFollowers();
    // Poll every 5 minutes for live updates
    const interval = setInterval(fetchFollowers, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center py-10 px-6">
      {/* Page Name */}
      <div className="mb-8">
        <h3 className="text-xl md:text-2xl font-display font-medium text-white/90 tracking-wide text-center">
          Dramatic Sarang Edit
        </h3>
      </div>
      
      {/* Live Counter Display */}
      <div className="relative flex flex-col items-center">
        <div className="flex items-center justify-center gap-4 mb-2">
          {isLive ? (
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
          ) : (
            <span className="relative flex h-3 w-3 rounded-full bg-gray-600"></span>
          )}
          <span className="text-green-500 font-bold tracking-widest uppercase text-sm">FOLLOWER COUNT — LIVE</span>
        </div>

        <div className="text-6xl md:text-8xl font-black text-white font-mono tracking-tighter drop-shadow-2xl tabular-nums py-2">
          {followers}
        </div>
        
        <div className="flex items-center gap-2 mt-4 text-gray-400 font-medium tracking-wide">
          <Users size={20} className="text-gray-500" />
          <span className="text-lg font-bold tracking-wider">Real-Time Followers</span>
        </div>
      </div>
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none"></div>
    </div>
  );
}
