import React from 'react';
import { Link } from 'react-router-dom'; // Agar aap react-router-dom use kar rahe hain
import { AppItem } from '../types';
import { APPS_DATA } from '../data';

interface RecommendedAppsProps {
  currentCategory: string;
  currentAppId: string;
}

export const RecommendedApps: React.FC<RecommendedAppsProps> = ({ currentCategory, currentAppId }) => {
  // Same category ki dusri apps ko filter karna (current app ko chhodkar)
  const recommendations = APPS_DATA.filter(
    (app) => app.category === currentCategory && app.id !== currentAppId
  ).slice(0, 4); // Sirf 4 apps dikhane ke liye

  if (recommendations.length === 0) {
    return null; // Agar koi recommendation nahi hai toh kuch nahi dikhega
  }

  return (
    <div className="mt-8 border-t border-gray-8xl pt-6">
      <h3 className="text-xl font-bold text-white mb-4">Recommended Apps</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {recommendations.map((app) => (
          <Link
            key={app.id}
            to={`/app/${app.slug}`}
            className="bg-gray-900 p-4 rounded-xl flex flex-col items-center text-center hover:bg-gray-800 transition-all border border-gray-800"
          >
            <img
              src={app.icon}
              alt={app.name}
              className="w-16 h-16 rounded-2xl object-cover mb-3 shadow-md"
            />
            <h4 className="text-sm font-semibold text-gray-200 line-clamp-1 w-full">
              {app.name}
            </h4>
            <span className="text-xs text-green-400 mt-1 font-medium bg-green-500/10 px-2 py-0.5 rounded-full">
              ★ {app.rating}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
