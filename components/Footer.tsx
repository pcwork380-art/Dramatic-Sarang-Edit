export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="px-6 py-5 bg-dark-gray border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-white/30 text-[11px] max-w-7xl mx-auto w-full">
      <div className="flex gap-4 sm:gap-6 uppercase tracking-wider mb-4 sm:mb-0 text-center sm:text-left flex-col sm:flex-row">
        <span>&copy; {currentYear} Dramatic Sarang Edit</span>
        <span className="hidden sm:inline">All Rights Reserved</span>
      </div>
      <div className="flex gap-4 sm:gap-6 uppercase tracking-widest">
        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-primary transition-colors">Terms</a>
        <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
      </div>
    </footer>
  );
}
