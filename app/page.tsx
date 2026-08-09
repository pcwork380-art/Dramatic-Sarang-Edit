import fs from 'fs';
import path from 'path';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { AiDramaRecommender } from '@/components/AiDramaRecommender';
import { VideoGallery } from '@/components/VideoGallery';
import { FollowSection } from '@/components/FollowSection';
import { Footer } from '@/components/Footer';
import { FloatingActionButton } from '@/components/FloatingActionButton';
import { WelcomeModal } from '@/components/WelcomeModal';
import type { Video } from '@/types';

// Server-side data fetching
async function getVideos(): Promise<Video[]> {
  try {
    const dataPath = path.join(process.cwd(), 'data', 'videos.json');
    const fileContents = fs.readFileSync(dataPath, 'utf8');
    return JSON.parse(fileContents) as Video[];
  } catch (error) {
    console.error('Error reading videos.json:', error);
    return [];
  }
}

export default async function Home() {
  const videos = await getVideos();
  return (
    <div className="min-h-screen flex flex-col bg-dark selection:bg-primary selection:text-white">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <AiDramaRecommender />
        
        {/* Videos Section */}
        <section id="videos" className="py-24 bg-dark-gray">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">Latest Videos</h2>
              <a href="#" className="relative group inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 bg-gradient-to-r from-primary to-purple-600 border border-primary/50 rounded-full overflow-hidden hover:scale-[1.02] hover:shadow-[0_8px_20px_-6px_rgba(168,85,247,0.5)]">
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover:animate-[shimmer_1.5s_infinite] skew-x-12"></span>
                <span className="relative flex items-center gap-2">
                  View All Videos
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
              </a>
            </div>
            
            <VideoGallery initialVideos={videos} />
          </div>
        </section>

        <FollowSection />
      </main>

      <Footer />
      <FloatingActionButton />
      <WelcomeModal />
    </div>
  );
}
