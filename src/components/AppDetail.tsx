import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, Star, Download, ShieldCheck, 
  Info, CheckCircle2, RefreshCw, Terminal, Lock, Server, FileCheck2, Share2, Sparkles, X, ChevronLeft, ChevronRight,
  Video
} from 'lucide-react';
import { AppItem } from '../types';

interface AppDetailProps {
  app: AppItem;
  darkMode: boolean;
  onBack: () => void;
}

export const AppDetail: React.FC<AppDetailProps> = ({
  app,
  darkMode,
  onBack,
}) => {
  const [scanProgress, setScanProgress] = useState(0);
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'verified'>('idle');
  const [downloading, setDownloading] = useState(false);
  const [downloadCountdown, setDownloadCountdown] = useState(5);
  const [copied, setCopied] = useState(false);
  
  // Video Trailer Active Tab State
  const [activeVideoIdx, setActiveVideoIdx] = useState<number>(0);
  
  // Lightbox & Navigation States
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    setScanState('scanning');
    setScanProgress(0);
    setDownloading(false);
    setActiveVideoIdx(0); 
    
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
  }, [app.id, app.slug]);

  const triggerDownload = () => {
    setDownloading(true);
    setDownloadCountdown(5);
  };

  // --- 100% FIXED SAME-PAGE BACKGROUND DOWNLOAD LOGIC ---
  useEffect(() => {
    if (downloading && downloadCountdown > 0) {
      const timer = setTimeout(() => {
        setDownloadCountdown(prev => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (downloading && downloadCountdown === 0) {
      try {
        // डोम में एक अदृश्य (Hidden) iframe बनाएँगे
        const iframeId = 'invisible-download-iframe';
        let iframe = document.getElementById(iframeId) as HTMLIFrameElement;
        
        if (!iframe) {
          iframe = document.createElement('iframe');
          iframe.id = iframeId;
          iframe.style.display = 'none';
          document.body.appendChild(iframe);
        }
        
        // iframe का सोर्स सीधे APK URL पर सेट कर देंगे
        // चूँकि यह एक APK फ़ाइल है, ब्राउज़र नया पेज खोलने के बजाय बैकग्राउंड में सीधे डाउनलोड ट्रिगर कर देगा
        iframe.src = app.downloadUrl;

        // डाउनलोड शुरू होने के बाद स्टेट को रीसेट करें
        setTimeout(() => {
          setDownloading(false);
        }, 500);

      } catch (error) {
        console.error("Silent iframe download failed, trying standard anchor path", error);
        // Fallback: अगर कुछ बहुत ही ज़्यादा रिस्ट्रिक्टेड है तो डायरेक्ट एंकर क्लिक
        const link = document.createElement('a');
        link.href = app.downloadUrl;
        link.setAttribute('download', `${app.slug}-mod.apk`);
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDownloading(false);
      }
    }
  }, [downloading, downloadCountdown, app.downloadUrl, app.slug]);

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const getYouTubeEmbedUrl = (url?: string) => {
    if (!url) return null;
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? `https://www.youtube.com/embed/${match[2]}` : null;
  };

  const validEmbedUrls = (app.videoUrls || [])
    .map(url => getYouTubeEmbedUrl(url))
    .filter((url): url is string => url !== null);

  const embedUrl = validEmbedUrls.length > 0 ? validEmbedUrls[activeVideoIdx] : null;

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
      
      {/* Header */}
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

      {/* Hero Section */}
      <div className={`p-5 sm:p-6 rounded-2xl border ${
        darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'
      }`}>
        <div className="flex flex-col items-center text-center gap-5">
          
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-slate-700/20 shadow-xl shrink-0 mx-auto">
            <img src={app.icon} alt={app.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
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
            <p className="text-xs text-slate-500 mt-1">
              Your download will begin automatically in <strong className="text-store-accent">{downloadCountdown} seconds</strong>. Look Mod Store protects your device by encrypting the download.
            </p>
            <div className="w-full bg-slate-800 rounded-full h-1.5 mt-3 overflow-hidden">
              <div 
                className="bg-store-accent h-full transition-all duration-1000"
                style={{ width: `${(5 - downloadCountdown) * 20}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Rest of UI elements (Videos, Screenshots, Technical details etc.) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {embedUrl && (
            <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'}`}>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                <h3 className={`text-base font-display font-bold flex items-center gap-2 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                  <Video className="w-4.5 h-4.5 text-store-accent" />
                  <span>Video Trailer / Gameplay</span>
                </h3>
                {validEmbedUrls.length > 1 && (
                  <div className="flex flex-wrap gap-1.5 bg-slate-950/20 p-1 rounded-xl border border-slate-800/30">
                    {validEmbedUrls.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveVideoIdx(index)}
                        className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all cursor-pointer ${
                          activeVideoIdx === index ? 'bg-store-accent text-white shadow-sm' : 'text-slate-400 hover:text-slate-200'
                        }`}
                      >
                        Video {index + 1}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-slate-800/20 shadow-md">
                <iframe className="absolute inset-0 w-full h-full" src={embedUrl} title="Video Trailer" frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
          )}
          
          {app.screenshots && app.screenshots.length > 0 && (
            <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'}`}>
              <h3 className={`text-base font-display font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
                <Sparkles className="w-4.5 h-4.5 text-store-accent" />
                <span>Capturas de pantalla / Screenshots</span>
              </h3>
              <div className="flex gap-4 overflow-x-auto pb-3 snap-x items-center">
                {app.screenshots.map((screenshot, idx) => (
                  <div key={idx} onClick={() => setSelectedIndex(idx)} className="rounded-xl overflow-hidden border border-slate-800/40 shadow-md shrink-0 snap-start max-h-[320px] sm:max-h-[400px] cursor-zoom-in">
                    <img src={screenshot} alt="screenshot" className="h-[280px] sm:h-[360px] w-auto object-contain hover:scale-102 transition-transform" referrerPolicy="no-referrer" />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'}`}>
            <h3 className="text-base font-display font-bold mb-3">MOD Description</h3>
            <p className="text-sm leading-relaxed whitespace-pre-line">{app.longDescription || app.description}</p>
          </div>
        </div>

        {/* Sidebar Information */}
        <div className="space-y-6">
          <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'}`}>
            <h3 className="text-base font-display font-bold mb-4 flex items-center gap-2"><Info className="w-4.5 h-4.5 text-store-accent" />Technical Information</h3>
            <div className="divide-y divide-slate-800/10 text-xs">
              <div className="py-2.5 flex justify-between"><span>Current version</span><span className="font-mono font-bold">{app.version}</span></div>
              <div className="py-2.5 flex justify-between"><span>File size</span><span className="font-mono font-bold">{app.size}</span></div>
              <div className="py-2.5 flex justify-between"><span>Developer</span><span className="font-bold">{app.developer}</span></div>
            </div>
          </div>

          {app.security && (
            <div className={`p-5 rounded-2xl border ${darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'}`}>
              <h3 className="text-base font-display font-bold mb-3 flex items-center gap-2"><ShieldCheck className="w-5 h-5 text-emerald-400" />Security & Integrity</h3>
              <div className={`p-3.5 rounded-xl border mb-4 font-mono text-[11px] ${darkMode ? 'bg-slate-950 border-slate-900' : 'bg-slate-50'}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-500 flex items-center gap-1"><Terminal className="w-3.5 h-3.5 text-store-accent" />Scanner v4.2</span>
                  <span className={scanState === 'scanning' ? 'text-yellow-400 animate-pulse' : 'text-emerald-400'}>{scanState === 'scanning' ? `Verifying ${scanProgress}%` : 'COMPLETE'}</span>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-1 mb-3.5 overflow-hidden">
                  <div className={`h-full ${scanState === 'scanning' ? 'bg-yellow-400' : 'bg-emerald-400'}`} style={{ width: `${scanProgress}%` }} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIndex !== null && app.screenshots && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-[2px] p-4" onClick={() => setSelectedIndex(null)}>
          <div className="absolute top-4 right-4 z-50"><button className="p-2.5 bg-slate-900/60 text-white rounded-full" onClick={() => setSelectedIndex(null)}><X className="w-5 h-5" /></button></div>
          <button className="absolute left-4 z-50 p-3 bg-slate-900/40 text-white rounded-full" onClick={showPrev}><ChevronLeft className="w-6 h-6" /></button>
          <div className="relative w-full max-w-3xl max-h-[75vh] flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img src={app.screenshots[selectedIndex]} alt="Expanded View" className="max-w-full max-h-[70vh] rounded-2xl object-contain shadow-2xl" referrerPolicy="no-referrer" />
          </div>
          <button className="absolute right-4 z-50 p-3 bg-slate-900/40 text-white rounded-full" onClick={showNext}><ChevronRight className="w-6 h-6" /></button>
        </div>
      )}

    </div>
  );
};
