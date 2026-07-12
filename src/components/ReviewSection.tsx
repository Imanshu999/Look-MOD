import React, { useState, useEffect } from 'react';
import { Star, CheckCircle2, MessageSquare, Code2, Sparkles, ShieldCheck } from 'lucide-react';

interface ReviewSectionProps {
  darkMode: boolean;
}

interface ReviewItem {
  id?: number;
  name: string;
  rating: number;
  comment: string;
  created_at?: string;
}

const SUPABASE_URL = "https://xmsrjdoontlhfinmunnm.supabase.co";
const SUPABASE_KEY = "sb_publishable_IjIyBo-kFgoOEfrAvuua9Q_WG7GlYsv";

export const ReviewSection: React.FC<ReviewSectionProps> = ({ darkMode }) => {
  const [reviews, setReviews] = useState<ReviewItem[]>([]);
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [formData, setFormData] = useState({ name: '', comment: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  // 📥 Supabase Cloud DB se Live Data pull karne ke liye
  const fetchSupabaseReviews = async () => {
    try {
      const response = await fetch(`${SUPABASE_URL}/rest/v1/reviews?select=*&order=created_at.desc`, {
        method: "GET",
        headers: {
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
          "Prefer": "return=representation"
        }
      });

      if (response.ok) {
        const data = await response.json();
        setReviews(data);
      }
    } catch (err) {
      console.error("Supabase Fetch Error:", err);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchSupabaseReviews();
  }, []);

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const newReview = {
      name: formData.name,
      rating: rating,
      comment: formData.comment
    };

    try {
      // 1. 🚀 Direct Supabase Cloud Database me data insert karo
      const response = await fetch(`${SUPABASE_URL}/rest/v1/reviews`, {
        method: "POST",
        headers: {
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
          "Prefer": "return=representation"
        },
        body: JSON.stringify(newReview)
      });

      // 2. Backup notification tumhare Web3Forms par bhi chali jayegi
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "9372fab7-4028-49ff-8d55-8b9d6aa556ff",
          subject: `Global Supabase Review from ${formData.name}`,
          ...newReview
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', comment: '' });
        setRating(5);
        // Instant data sync call
        fetchSupabaseReviews();
      } else {
        alert("Database error: Make sure the 'reviews' table exists with columns: name, rating, comment.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Network action failed.");
    } finally {
      setLoading(false);
    }
  };

  // Helper to format date readable
  const formatDate = (isoString?: string) => {
    if (!isoString) return "Just now";
    const dateObj = new Date(isoString);
    return dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 mt-10 px-4 sm:px-0">
      
      {/* Badges Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
        <div className={`p-3 rounded-xl border flex items-center gap-3 ${darkMode ? 'bg-slate-900/40 border-slate-800 text-white' : 'bg-white border-slate-100'}`}>
          <Code2 className="w-5 h-5 text-blue-500" />
          <span className="text-xs font-semibold">Supported by Takano3D Studio</span>
        </div>
        <div className={`p-3 rounded-xl border flex items-center gap-3 ${darkMode ? 'bg-slate-900/40 border-slate-800 text-white' : 'bg-white border-slate-100'}`}>
          <Sparkles className="w-5 h-5 text-amber-500" />
          <span className="text-xs font-semibold">Premium Verified MODs</span>
        </div>
        <div className={`p-3 rounded-xl border flex items-center gap-3 ${darkMode ? 'bg-slate-900/40 border-slate-800 text-white' : 'bg-white border-slate-100'}`}>
          <ShieldCheck className="w-5 h-5 text-emerald-500" />
          <span className="text-xs font-semibold">SHA-256 Secure Check</span>
        </div>
      </div>

      {/* Form Container */}
      <div className={`p-5 sm:p-6 rounded-2xl border ${
        darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'
      }`}>
        <h3 className="text-base sm:text-lg font-bold mb-4 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-blue-500" />
          Write a Customer Review (Supabase Live)
        </h3>

        {submitted ? (
          <div className="text-center py-6 space-y-3">
            <div className="mx-auto w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <p className="text-xs sm:text-sm text-emerald-400 font-medium">
              Thank you! Your review is now persistent on Supabase DB for all users.
            </p>
            <button onClick={() => setSubmitted(false)} className="text-xs text-blue-500 underline cursor-pointer">
              Write another review
            </button>
          </div>
        ) : (
          <form onSubmit={handleReviewSubmit} className="space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold text-slate-400 mr-1">Select Rating:</span>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button" key={star} className="cursor-pointer transition-all"
                  onClick={() => setRating(star)} onMouseEnter={() => setHover(star)} onMouseLeave={() => setHover(0)}
                >
                  <Star className={`w-5 h-5 ${
                    star <= (hover || rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-600'
                  }`} />
                </button>
              ))}
            </div>

            <div className="space-y-3">
              <input 
                type="text" required placeholder="Enter Your Name" value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full p-2.5 rounded-xl text-sm outline-none border ${
                  darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-blue-500' : 'bg-slate-50 border-slate-200 focus:border-blue-500'
                }`}
              />
              <textarea 
                rows={3} required placeholder="Share your experience globally..." value={formData.comment}
                onChange={(e) => setFormData({...formData, comment: e.target.value})}
                className={`w-full p-2.5 rounded-xl text-sm outline-none border resize-none ${
                  darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-blue-500' : 'bg-slate-50 border-slate-200 focus:border-blue-500'
                }`}
              />
            </div>

            <button
              type="submit" disabled={loading}
              className="w-full py-2.5 font-bold text-xs text-white rounded-xl bg-blue-500 hover:bg-blue-600 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{loading ? 'Publishing Live...' : 'Submit Real Review'}</span>
            </button>
          </form>
        )}
      </div>

      {/* Database Feed Render */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Global Customer Feedbacks ({reviews.length})
        </h3>

        {fetching ? (
          <p className="text-center text-xs text-slate-500 py-4 animate-pulse">Fetching global database feed...</p>
        ) : reviews.length === 0 ? (
          <p className="text-center text-xs text-slate-500 py-6 italic">No live global reviews yet. Be the first!</p>
        ) : (
          <div className="grid gap-3 max-h-[400px] overflow-y-auto pr-1">
            {reviews.map((rev, index) => (
              <div key={rev.id || index} className={`p-4 rounded-xl border ${
                darkMode ? 'bg-slate-900/20 border-slate-800/60' : 'bg-slate-50 border-slate-100'
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-sm">{rev.name}</span>
                  <span className="text-[10px] text-slate-500">{formatDate(rev.created_at)}</span>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < rev.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-700'}`} />
                  ))}
                </div>
                <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'} break-words`}>{rev.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
