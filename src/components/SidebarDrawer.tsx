import React from 'react';
import { X, Home, Gamepad2, Smartphone, BookOpen, Mail, ShieldAlert, Sparkles, ChevronRight, Instagram, Youtube, Send, Facebook } from 'lucide-react';

interface SidebarDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  activeTab: 'all' | 'games' | 'apps' | 'blog' | 'contact';
  setActiveTab: (tab: 'all' | 'games' | 'apps' | 'blog' | 'contact') => void;
}

export const SidebarDrawer: React.FC<SidebarDrawerProps> = ({
  isOpen,
  onClose,
  darkMode,
  activeTab,
  setActiveTab,
}) => {
  if (!isOpen) return null;

  const navItems = [
    { id: 'all', label: 'Home', icon: Home, description: 'Main page and updates' },
    { id: 'games', label: 'Games', icon: Gamepad2, description: 'Action, racing, and arcade MODs' },
    { id: 'apps', label: 'Apps', icon: Smartphone, description: 'Tools, music, and premium editors' },
    { id: 'blog', label: 'Info Blog', icon: BookOpen, description: 'Installation guides and Android news' },
    { id: 'contact', label: 'Contact Studio', icon: Mail, description: 'Send requests to Takano3D' },
  ] as const;

  const handleSelect = (tab: 'all' | 'games' | 'apps' | 'blog' | 'contact') => {
    setActiveTab(tab);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Overlay Backdrop with blur */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer content */}
      <div className={`absolute inset-y-0 right-0 max-w-xs w-full shadow-2xl flex flex-col transition-transform duration-300 transform translate-x-0 ${
        darkMode ? 'bg-slate-950 border-l border-slate-900 text-white' : 'bg-white border-l border-slate-200 text-slate-800'
      }`}>
        {/* Drawer Header */}
        <div className={`p-4 border-b flex items-center justify-between ${
          darkMode ? 'border-slate-900' : 'border-slate-100'
        }`}>
          <div>
            <h2 className="font-display font-bold text-base tracking-tight text-store-accent">
              Look Mod Store
            </h2>
            <p className="text-[10px] text-slate-500 font-mono">TAKANO3D APPS CATALOG</p>
          </div>
          <button 
            onClick={onClose}
            className={`p-1.5 rounded-lg transition-colors ${
              darkMode ? 'hover:bg-slate-900 text-slate-400 hover:text-white' : 'hover:bg-slate-100 text-slate-500 hover:text-slate-800'
            }`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Navigation */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`w-full text-left flex items-center gap-3.5 p-3 rounded-xl transition-all ${
                  isActive 
                    ? 'bg-store-accent text-white font-semibold shadow-[0_4px_12px_rgba(59,130,246,0.25)]' 
                    : darkMode 
                      ? 'hover:bg-slate-900 text-slate-300 hover:text-white' 
                      : 'hover:bg-slate-50 text-slate-600 hover:text-slate-900'
                }`}
              >
                <div className={`p-1.5 rounded-lg ${isActive ? 'bg-white/20' : darkMode ? 'bg-slate-900' : 'bg-slate-100'}`}>
                  <Icon className="w-4.5 h-4.5 shrink-0" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-medium leading-none mb-0.5">{item.label}</div>
                  <div className={`text-[10px] truncate ${isActive ? 'text-blue-100' : 'text-slate-500'}`}>
                    {item.description}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 opacity-50 shrink-0" />
              </button>
            );
          })}

          {/* Social Media Section */}
          <div className={`mt-6 mx-3 p-4 rounded-xl flex justify-between items-center ${darkMode ? 'bg-slate-900' : 'bg-slate-100'}`}>
            <a href="https://www.facebook.com/share/19JUUNiUBb/" target="_blank" rel="noreferrer" className="text-[#1877F2] hover:scale-110 transition-transform">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/look_mod.vercel.app?igsh=MXh6NzUyZmY1ajRqZw==" target="_blank" rel="noreferrer" className="text-[#E1306C] hover:scale-110 transition-transform">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/xi_r7.czx_?igsh=N3VwbDNzMGs5OWps" target="_blank" rel="noreferrer" className="text-[#E1306C] hover:scale-110 transition-transform">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://youtube.com/@look-mod.vercel?si=AQ4duw4Yz0g6itdC" target="_blank" rel="noreferrer" className="text-[#FF0000] hover:scale-110 transition-transform">
              <Youtube className="w-6 h-6" />
            </a>
            <a href="https://t.me/Imaanshu_N" target="_blank" rel="noreferrer" className="text-[#0088cc] hover:scale-110 transition-transform">
              <Send className="w-6 h-6" />
            </a>
          </div>
        </nav>

        {/* Brand footer inside drawer */}
        <div className={`p-4 border-t text-center font-mono ${
          darkMode ? 'border-slate-900 bg-slate-900/25' : 'border-slate-100 bg-slate-50/50'
        }`}>
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-500">
            <ShieldAlert className="w-3.5 h-3.5 text-store-accent" />
            <span>Verified by Takano3D</span>
          </div>
          <div className="text-[9px] text-slate-600 mt-1">
            Copyright © 2026 - Look Mod Store
          </div>
        </div>
      </div>
    </div>
  );
};
