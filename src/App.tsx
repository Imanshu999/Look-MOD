import { useState, useEffect } from 'react';
import { APPS_DATA, CATEGORIES_DATA, BLOG_POSTS } from './data';
import { Header } from './components/Header';
import { SidebarDrawer } from './components/SidebarDrawer';
import { CategoryList } from './components/CategoryList';
import { AppCard } from './components/AppCard';
import { RecentCarousel } from './components/RecentCarousel';
import { AppDetail } from './components/AppDetail';
import { BlogSection } from './components/BlogSection';
import { ContactSection } from './components/ContactSection';
import { ReviewSection } from './components/ReviewSection';
import takano3dAvatar from './assets/images/takano3d_avatar_1783771284341.jpg';

import { 
  Home as HomeIcon, Gamepad2, Smartphone, BookOpen, Mail, 
  Sparkles, CheckCircle2, ShieldCheck, AlertCircle, RefreshCw 
} from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'all' | 'games' | 'apps' | 'blog' | 'contact'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedAppSlug, setSelectedAppSlug] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [glowFlash, setGlowFlash] = useState<boolean>(false);
  const [avatarError, setAvatarError] = useState<boolean>(false);
  
  const customAvatarUrl = takano3dAvatar;

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#/app/')) {
        const slug = hash.replace('#/app/', '');
        setSelectedAppSlug(slug);
      } else {
        setSelectedAppSlug(null);
        if (hash === '#/games') setActiveTab('games');
        else if (hash === '#/apps') setActiveTab('apps');
        else if (hash === '#/blog') setActiveTab('blog');
        else if (hash === '#/contact') setActiveTab('contact');
        else setActiveTab('all');
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateToHash = (newHash: string) => { window.location.hash = newHash; };
  const handleSelectApp = (slug: string) => { navigateToHash(`/app/${slug}`); };
  const handleCloseDetail = () => { activeTab === 'all' ? navigateToHash('/') : navigateToHash(`/${activeTab}`); };

  const handleSelectTab = (tab: 'all' | 'games' | 'apps' | 'blog' | 'contact') => {
    setActiveTab(tab);
    setSelectedCategory(null);
    setSelectedAppSlug(null);
    setSearchTerm('');
    tab === 'all' ? navigateToHash('/') : navigateToHash(`/${tab}`);
  };

  // ✅ यह रहा नया ऑटोमैटिक सिस्टम जो कभी फेल नहीं होगा
  const getFilteredApps = () => {
    let filtered = APPS_DATA;

    // 1. सर्च के लिए फिल्टर
    if (searchTerm.trim() !== '') {
      filtered = filtered.filter((app) => 
        app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        app.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 2. कैटेगरी के लिए फिल्टर
    if (selectedCategory) {
      filtered = filtered.filter((app) => app.category === selectedCategory);
    }

    // 3. टैब के लिए ऑटोमैटिक बटवारा
    if (activeTab === 'games') {
      return filtered.filter((app) => app.type === 'Game');
    }
    if (activeTab === 'apps') {
      return filtered.filter((app) => app.type === 'App');
    }

    return filtered;
  };

  const filteredApps = getFilteredApps();
  const recentApps = APPS_DATA.filter(app => app.isRecent);
  const recommendedApps = APPS_DATA.filter(app => app.isRecommendation);

  const handleClearAllFilters = () => { setSearchTerm(''); setSelectedCategory(null); };
  const handleAvatarClick = () => { setGlowFlash(true); setTimeout(() => setGlowFlash(false), 1200); handleSelectTab('all'); };

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) { root.classList.add('dark'); root.style.backgroundColor = '#0b0f19'; }
    else { root.classList.remove('dark'); root.style.backgroundColor = '#f8fafc'; }
  }, [darkMode]);

  const activeAppDetail = selectedAppSlug ? APPS_DATA.find(app => app.slug === selectedAppSlug) : null;

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${darkMode ? 'bg-[#0b0f19] text-slate-100' : 'bg-slate-50 text-slate-800'}`}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} searchTerm={searchTerm} setSearchTerm={(term) => { setSearchTerm(term); if (selectedAppSlug) { setSelectedAppSlug(null); navigateToHash('/'); }}} onOpenDrawer={() => setIsDrawerOpen(true)} onNavigateHome={() => handleSelectTab('all')} />
      <SidebarDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} darkMode={darkMode} activeTab={activeTab} setActiveTab={handleSelectTab} />
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 pb-24 sm:pb-8">
        {activeAppDetail ? (
          <AppDetail app={activeAppDetail} darkMode={darkMode} onBack={handleCloseDetail} />
        ) : activeTab === 'blog' ? (
          <BlogSection posts={BLOG_POSTS} darkMode={darkMode} />
        ) : activeTab === 'contact' ? (
          <div className="space-y-6"><ContactSection darkMode={darkMode} /><ReviewSection darkMode={darkMode} /></div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
            <aside className={`lg:col-span-1 rounded-2xl p-4 border transition-all ${darkMode ? 'bg-slate-900/30 border-slate-800/60' : 'bg-white border-slate-200'}`}>
              <CategoryList categories={CATEGORIES_DATA} selectedCategory={selectedCategory} onSelectCategory={(cat) => { setSelectedCategory(cat); if (selectedAppSlug) { setSelectedAppSlug(null); navigateToHash('/'); } }} darkMode={darkMode} />
            </aside>
            <section className="lg:col-span-3 space-y-8 min-w-0">
              {!selectedCategory && !searchTerm && (
                <>
                  <div className={`p-6 sm:p-8 rounded-3xl relative overflow-hidden border ${darkMode ? 'bg-gradient-to-tr from-slate-950 to-store-card border-slate-800' : 'bg-gradient-to-tr from-white to-slate-100 border-slate-200 shadow-sm'}`}>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-store-accent/10 rounded-full blur-3xl" />
                    <div className="relative z-10 max-w-xl space-y-3">
                      <div className="flex items-center gap-1.5 text-xs text-store-accent font-semibold uppercase tracking-wider"><Sparkles className="w-4 h-4 text-store-accent animate-pulse" /><span>Supported by Takano3D Studio</span></div>
                      <h2 className="text-2xl sm:text-4xl font-display font-bold tracking-tight">Look Mod Store</h2>
                    </div>
                  </div>
                  <RecentCarousel apps={recentApps} darkMode={darkMode} onSelect={handleSelectApp} />
                  <div className="space-y-4">
                    <div className="flex items-center gap-2"><div className="p-1 rounded-md bg-yellow-500/10 text-yellow-500"><Sparkles className="w-4 h-4 fill-current" /></div><h3 className="text-lg font-display font-bold">Recommended</h3></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {recommendedApps.map((app) => (<AppCard key={app.id} app={app} darkMode={darkMode} variant="recommendation" onSelect={handleSelectApp} />))}
                    </div>
                  </div>
                </>
              )}
              <div className="space-y-4">
                <div className="flex items-center justify-between"><h3 className="text-lg font-display font-bold">{selectedCategory ? `Category: ${selectedCategory}` : 'Latest updates'}</h3>{(selectedCategory || searchTerm) && <button onClick={handleClearAllFilters} className="text-xs text-store-accent font-semibold hover:underline">Reset filters</button>}</div>
                {filteredApps.length === 0 ? (
                  <div className={`p-8 rounded-2xl text-center border ${darkMode ? 'bg-slate-900/20 border-slate-800' : 'bg-white border-slate-200'}`}><AlertCircle className="w-10 h-10 text-slate-500 mx-auto mb-2" /><h4 className="font-bold text-sm">No results found</h4></div>
                ) : (
                  <div className="flex flex-col gap-3">{filteredApps.map((app) => <AppCard key={app.id} app={app} darkMode={darkMode} variant="list" onSelect={handleSelectApp} />)}</div>
                )}
              </div>
            </section>
          </div>
        )}
      </main>
      {/* ... (Footer aur Bottom Nav jaisa tha, waisa hi raheगा) ... */}
    </div>
  );
}
