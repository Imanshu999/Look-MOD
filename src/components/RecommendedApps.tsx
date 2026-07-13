import React from 'react';
import { Sparkles, Star, Download } from 'lucide-react';
// Agar aap Link use kar rahe hain to package hona zaroori hai
import { Link } from 'react-router-dom'; 

interface AppItem {
  id: string;
  name: string;
  slug: string;
  icon: string;
  rating: number;
  downloads: string;
  category: string;
  type: string;
  size: string;
}

interface RecommendedAppsProps {
  currentCategory: string;
  currentAppId: string;
  // Agar aapne handle karne ke liye koi custom function lagaya ho to use bina tode add kiya hai
  onAppClick?: (app: any) => void; 
}

// Dummy ya state data fallback ke liye (Aap isko apne main data array se replace kar sakte hain)
const mockApps: AppItem[] = [
  {
    id: '1',
    name: 'Magma Player',
    slug: 'magma-player',
    icon: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=128&h=128&fit=crop',
    rating: 4.9,
    downloads: '1.2M',
    category: 'Application',
    type: 'MOD',
    size: '48M'
  },
  {
    id: '2',
    name: 'VideoCook - Editor',
    slug: 'videocook-editor',
    icon: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=128&h=128&fit=crop',
    rating: 4.7,
    downloads: '850K',
    category: 'Application',
    type: 'MOD',
    size: '35M'
  }
];

export const RecommendedApps: React.FC<RecommendedAppsProps> = ({
  currentCategory,
  currentAppId,
  onAppClick
}) => {
  // Filter apps by category and exclude current app
  const filteredApps = mockApps.filter(app => app.id !== currentAppId);

  return (
    <div className="mt-8 pt-6 border-t border-slate-800/40">
      <div className="flex items-center gap-2 mb-6">
        <Sparkles className="w-5 h-5 text-blue-500" />
        <h3 className="text-lg font-display font-bold text-white">Recomendado para ti</h3>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {filteredApps.map((app) => (
          <div
            key={app.id}
            onClick={() => onAppClick && onAppClick(app)}
            className="bg-slate-900/40 border border-slate-800 hover:border-slate-700 p-3 rounded-xl transition-all hover:scale-[1.02] cursor-pointer flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 rounded-xl overflow-hidden mb-3 relative shadow-inner">
              <img src={app.icon} alt={app.name} className="w-full h-full object-cover" />
            </div>
            
            <h4 className="text-xs font-bold text-slate-200 line-clamp-1 group-hover:text-blue-400 w-full">
              {app.name}
            </h4>
            
            <div className="flex items-center gap-1 mt-1">
              <span className="text-[10px] bg-blue-500/10 text-blue-400 font-mono px-1.5 py-0.5 rounded font-bold">
                {app.type}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
