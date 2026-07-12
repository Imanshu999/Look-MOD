import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Star, Download, ShieldCheck, 
  Info, CheckCircle2, RefreshCw, Terminal, Lock, Server, FileCheck2, Share2, Sparkles, X, ChevronLeft, ChevronRight, Play 
} from 'lucide-react';
import { AppItem } from '../types';

interface AppDetailProps {
  app: AppItem;
  allApps: AppItem[]; // सजेस्टेड ऐप्स निकालने के लिए सभी ऐप्स की लिस्ट ली
  darkMode: boolean;
  onBack: () => void;
  onAppSelect: (app: AppItem) => void; // सजेस्टेड ऐप पर क्लिक करने के लिए हैंडलर
}

export const AppDetail: React.FC<AppDetailProps> = ({
  app,
  allApps,
  darkMode,
  onBack,
  onAppSelect,
}) => {
  const [scanProgress, setScanProgress] = useState(0);
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'verified'>('idle');
  const [downloading, setDownloading] = useState(false);
  const [downloadCountdown, setDownloadCountdown] = useState(5);
  const [copied, setCopied] = useState(false);
  
  // Lightbox & Navigation States
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  // --- 1. यूट्यूब URL को एम्बेड (Embed) करने लायक बनाने का लॉजिक ---
  const getYouTubeEmbedUrl = (url?: string) => {
    if (!url) return null;
    let videoId = '';
    
    // youtube.com/watch?v=ID या youtu.be/ID दोनों को सपोर्ट करेगा
    if (url.includes('youtube.com/watch')) {
      const urlParams = new URLSearchParams(new URL(url).search);
      videoId = urlParams.get('v') || '';
    } else if (url.includes('youtu.be/')) {
      videoId = url.split('youtu.be/')[1]?.split('?')[0] || '';
    } else if (url.includes('youtube.com/embed/')) {
      return url; // पहले से ही एम्बेड है तो सीधा भेज दो
    }
    
    return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
  };

  const embedVideoUrl = getYouTubeEmbedUrl(app.videoUrl);

  // --- 2. सजेस्टेड ऐप्स निकालने का लॉजिक (प्ले स्टोर की तरह) ---
  // करंट ऐप को छोड़कर, सेम कैटेगरी या सेम टाइप (Game/App) के ऐप्स फ़िल्टर करना
  const suggestedApps = allApps
    .filter(item => item.id !== app.id && (item.category === app.category || item.type === app.type))
    .slice(0, 4); // सिर्फ टॉप 4 ऐप्स नीचे दिखाएंगे

  useEffect(() => {
    setScanState('scanning');
    setScanProgress(0);
    setDownloading(false);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // नया ऐप ओपन होते ही पेज ऊपर स्क्रॉल हो जाएगा

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setScanState('verified');
          return 100;
        }
        return prev + Math.floor(Math.random() * 15) + 5;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [app.id]);

  const triggerDownload = () => {
    setDownloading(true);
    setDownloadCountdown(5);
  };

  useEffect(() => {
    if (downloading && downloadCountdown > 0) {
      const timer = setTimeout(() => {
        setDownloadCountdown(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (downloading && downloadCountdown === 0) {
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.src = app.downloadUrl;
      document.body.appendChild(iframe);
      
      setTimeout(() => {
        if (document.body.contains(iframe)) {
          document.body.removeChild(iframe);
        }
        setDownloading(false);
      }, 2500);
    }
  }, [downloading, downloadCountdown, app.downloadUrl]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const showPrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (app.screenshots && selectedIndex !== null) {
      setSelectedIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : app.screenshots!.length - 1));
    }
  };

  const showNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (app.screenshots && selectedIndex !== null) {
      setSelectedIndex((prev) => (prev !== null && prev < app.screenshots!.length - 1 ? prev + 1 : 0));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'Escape') setSelectedIndex(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) > minSwipeDistance) {
      setSelectedIndex(null);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in" key={app.id}>
      
      {/* Back & Action Header */}
      <div className="flex items-center justify-between gap-4">
        <button
          onClick={onBack}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold border transition-all cursor-pointer ${
            darkMode
              ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700'
              : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
          }`}
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Catalog</span>
        </button>

        <button
          onClick={handleShare}
          className={`p-2 rounded-xl border transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold ${
            darkMode
              ? 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
              : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900'
          }`}
        >
          <Share2 className="w-4 h-4 text-store-accent" />
          <span>{copied ? 'Copied!' : 'Share'}</span>
        </button>
      </div>

      {/* Main App Hero Details */}
      <div className={`p-5 sm:p-6 rounded-2xl border ${
        darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'
      }`}>
        <div className="flex flex-col items-center text-center gap-5">
          
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-slate-700/20 shadow-xl shrink-0 mx-auto">
            <img 
              src={app.icon} 
              alt={app.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="flex-1 text-center min-w-0">
            <div className="flex flex-wrap items-center justify-center gap-2 mb-1.5">
              <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full ${
                darkMode ? 'bg-slate-800 text-blue-400' : 'bg-slate-100 text-blue-600'
              }`}>
                {app.type}
              </span>
              <span className="text-xs bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-2 py-0.5 rounded-md font-medium">
                MOD Unlocked
              </span>
            </div>

            <h2 className={`text-2xl sm:text-3xl font-display font-bold tracking-tight mb-1 ${
              darkMode ? 'text-white' : 'text-slate-800'
            }`}>
              {app.name}
            </h2>
            <p className="text-sm text-slate-500">{app.developer}</p>

            <div className="flex items-center justify-center gap-4 mt-3 text-xs">
              <div className="flex items-center text-yellow-400 font-mono font-bold">
                <Star className="w-4 h-4 fill-current mr-1" />
                <span>{app.rating} / 5</span>
              </div>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400 font-mono">↓ {app.downloads} downloads</span>
              <span className="text-slate-600">|</span>
              <span className="text-slate-400 font-mono">{app.size}</span>
            </div>
          </div>

          <div className="w-full max-w-md shrink-0 flex flex-col gap-2 mx-auto">
            <button
              onClick={triggerDownload}
              disabled={downloading}
              className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-bold text-sm text-white transition-all shadow-lg cursor-pointer ${
                downloading 
                  ? 'bg-slate-800 cursor-not-allowed' 
                  : 'bg-store-accent hover:bg-blue-600 shadow-store-accent/20 hover:shadow-store-accent/35 active:scale-95'
              }`}
            >
              <Download className="w-5 h-5 animate-bounce" />
              <span>{downloading ? `Preparing (${downloadCountdown}s)...` : 'Download APK'}</span>
            </button>

            <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-400 font-medium py-1 bg-emerald-500/5 rounded-lg border border-emerald-500/15">
              <ShieldCheck className="w-4 h-4 fill-emerald-500/10" />
              <span>SHA-256 Verified</span>
            </div>
          </div>

        </div>

        {downloading && (
          <div className={`mt-5 p-4 rounded-xl border animate-pulse ${
            darkMode ? 'bg-slate-950/60 border-slate-800' : 'bg-slate-50 border-slate-200'
          }`}>
            <h4 className="text-sm font-bold flex items-center gap-2 text-store-accent">
              <RefreshCw className="w-4 h-4 animate-spin" />
              Generating Secure Download Link...
            </h4>
            <div className="w-full bg-slate-800 rounded-full h-1.5 mt-3 overflow-hidden">
              <div 
                className="bg-store-accent h-full transition-all duration-1000"
                style={{ width: `${(5 - downloadCountdown) * 20}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Description Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <div className="lg:col-span-2 space-y-6">
          
          {/* --- यूट्यूब वीडियो प्लेयर सेक्शन --- */}
          {embedVideoUrl && (
            <div className={`p-5 rounded-2xl border ${
              darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'
            }`}>
              <h3 className={`text-base font-display font-bold mb-4 flex items-center gap-2 ${
                darkMode ? 'text-slate-200' : 'text-slate-800'
              }`}>
                <Play className="w-4.5 h-4.5 text-red-500 fill-red-500" />
                <span>Video Preview / Demo</span>
              </h3>
              
              <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-slate-800/20 bg-black">
                <iframe
                  src={embedVideoUrl}
                  title={`${app.name} Video Preview`}
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {/* Dynamic Screenshots Container */}
          {app.screenshots && app.screenshots.length > 0 && (
            <div className={`p-5 rounded-2xl border ${
              darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'
            }`}>
              <h3 className={`text-base font-display font-bold mb-4 flex items-center gap-2 ${
                darkMode ? 'text-slate-200' : 'text-slate-800'
              }`}>
                <Sparkles className="w-4.5 h-4.5 text-store-accent" />
                <span>Screenshots</span>
              </h3>

              <div className="flex gap-4 overflow-x-auto pb-3 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent snap-x items-center">
                {app.screenshots.map((screenshot, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setSelectedIndex(idx)}
                    className="rounded-xl overflow-hidden border border-slate-800/40 shadow-md shrink-0 snap-start bg-slate-950/10 max-h-[320px] sm:max-h-[400px] transition-all duration-300 cursor-zoom-in"
                  >
                    <img 
                      src={screenshot} 
                      alt={`${app.name} screenshot ${idx + 1}`} 
                      className="h-[280px] sm:h-[360px] w-auto object-contain hover:scale-102 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className={`p-5 rounded-2xl border ${
            darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'
          }`}>
            <h3 className={`text-base font-display font-bold mb-3 ${
              darkMode ? 'text-slate-200' : 'text-slate-800'
            }`}>
              MOD Description
            </h3>
            <p className={`text-sm leading-relaxed whitespace-pre-line ${
              darkMode ? 'text-slate-300' : 'text-slate-600'
            }`}>
              {app.longDescription || app.description}
            </p>
          </div>

        </div>

        {/* Right column: Specs */}
        <div className="space-y-6">
          <div className={`p-5 rounded-2xl border ${
            darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'
          }`}>
            <h3 className={`text-base font-display font-bold mb-4 flex items-center gap-2 ${
              darkMode ? 'text-slate-200' : 'text-slate-800'
            }`}>
              <Info className="w-4.5 h-4.5 text-store-accent" />
              <span>Technical Information</span>
            </h3>

            <div className="divide-y divide-slate-800/10 text-xs">
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-500 font-medium">Current version</span>
                <span className={`font-mono font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{app.version}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-500 font-medium">File size</span>
                <span className={`font-mono font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{app.size}</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-slate-500 font-medium">Category</span>
                <span className={`font-bold ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>{app.category}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* --- 3. सजेस्टेड ऐप्स सेक्शन (You Might Also Like / Recommended Section) --- */}
      {suggestedApps.length > 0 && (
        <div className={`p-5 sm:p-6 rounded-2xl border mt-6 ${
          darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'
        }`}>
          <h3 className={`text-base font-display font-bold mb-4 flex items-center gap-2 ${
            darkMode ? 'text-slate-200' : 'text-slate-800'
          }`}>
            <Sparkles className="w-4.5 h-4.5 text-store-accent" />
            <span>Recommended Apps / Similar Options</span>
          </h3>

          {/* रिस्पॉन्सिव हॉरिजॉन्टल ग्रिड (प्ले स्टोर जैसा लुक) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {suggestedApps.map((item) => (
              <div
                key={item.id}
                onClick={() => onAppSelect(item)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer flex flex-col items-center text-center gap-2.5 active:scale-98 ${
                  darkMode 
                    ? 'bg-slate-950/40 border-slate-800/60 hover:bg-slate-900 hover:border-slate-700' 
                    : 'bg-slate-50 border-slate-200 hover:bg-white hover:shadow-md'
                }`}
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden border border-slate-700/10 shadow-sm shrink-0">
                  <img src={item.icon} alt={item.name} className="w-full h-full object-cover" />
                </div>
                
                <div className="min-w-0 w-full">
                  <h4 className={`text-xs font-bold truncate ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}>
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-slate-500 truncate mt-0.5">{item.category}</p>
                </div>

                <div className="flex items-center gap-1 text-[10px] text-yellow-400 font-mono font-bold bg-yellow-400/5 px-2 py-0.5 rounded-md border border-yellow-400/10">
                  <Star className="w-3 h-3 fill-current" />
                  <span>{item.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* --- ADVANCED LIGHTBOX MODAL --- */}
      {selectedIndex !== null && app.screenshots && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px] p-4 select-none touch-none overflow-hidden"
          onClick={() => setSelectedIndex(null)}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="absolute top-4 right-4 z-50">
            <button 
              className="p-2.5 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 text-white rounded-full hover:bg-slate-800/80 cursor-pointer"
              onClick={() => setSelectedIndex(null)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <button className="absolute left-4 z-50 p-3 bg-slate-900/40 text-white rounded-full cursor-pointer" onClick={showPrev}>
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-3xl max-h-[75vh] flex flex-col items-center justify-center pointer-events-auto" onClick={(e) => e.stopPropagation()}>
            <img src={app.screenshots[selectedIndex]} alt="Live Preview" className="max-w-full max-h-[70vh] rounded-2xl object-contain border border-slate-800/30" />
            <span className="text-white text-xs font-medium mt-3 bg-slate-900/50 px-3 py-1 rounded-full">
              Screenshot {selectedIndex + 1}
            </span>
          </div>

          <button className="absolute right-4 z-50 p-3 bg-slate-900/40 text-white rounded-full cursor-pointer" onClick={showNext}>
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}

    </div>
  );
};
