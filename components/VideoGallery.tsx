'use client';

import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Search, ExternalLink, Calendar } from 'lucide-react';
import Image from 'next/image';
import type { Video } from '@/types';

interface VideoGalleryProps {
  initialVideos: Video[];
}

const ITEMS_PER_PAGE = 6;

export function VideoGallery({ initialVideos }: VideoGalleryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  const filteredVideos = useMemo(() => {
    return initialVideos.filter((video) =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [initialVideos, searchQuery]);

  const displayedVideos = filteredVideos.slice(0, visibleCount);
  const hasMore = visibleCount < filteredVideos.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
  };

  return (
    <div className="w-full">
      {/* Search Bar */}
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative max-w-md mx-auto mb-12"
      >
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-11 pr-4 py-3 bg-dark-gray border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow"
          placeholder="Search videos by title..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setVisibleCount(ITEMS_PER_PAGE); // Reset count on search
          }}
        />
      </motion.div>

      {/* Video Grid */}
      {displayedVideos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(255,45,85,0.15)]"
            >
              <div className="relative aspect-video bg-dark-gray flex items-center justify-center overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
                <a
                  href={video.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex items-center justify-center z-10"
                  aria-label="Play video"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center scale-90 group-hover:scale-100 transition-transform">
                    <svg className="w-6 h-6 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </a>
              </div>
              <div className="p-4 flex flex-col gap-2">
                <div className="flex justify-between items-start gap-4">
                  <h4 className="font-bold text-sm leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {video.title}
                  </h4>
                  <span className="text-[10px] text-white/30 uppercase whitespace-nowrap pt-0.5">
                    {new Date(video.uploadDate).toLocaleDateString('en-US', { month: 'short', day: '2-digit' })}
                  </span>
                </div>
                <a
                  href={video.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 w-full flex items-center justify-center text-[10px] uppercase font-bold py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-white/70 hover:text-white"
                >
                  Watch on Facebook
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-400">
          <p className="text-lg">No videos found matching &quot;{searchQuery}&quot;</p>
        </div>
      )}

      {/* Load More */}
      {hasMore && (
        <div className="mt-16 text-center">
          <button
            onClick={handleLoadMore}
            className="px-8 py-3 rounded-xl bg-transparent border border-white/20 hover:border-white/50 text-white text-sm font-bold tracking-wider transition-all hover:bg-white/5 uppercase"
          >
            Load More Videos
          </button>
        </div>
      )}
    </div>
  );
}
