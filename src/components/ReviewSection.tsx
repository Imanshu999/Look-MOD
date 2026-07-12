import React, { useState, useEffect } from 'react';
import { Star, Send, CheckCircle2, MessageSquare } from 'lucide-react';

interface ReviewSectionProps {
  darkMode: boolean;
}

interface ReviewItem {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

// Ek public database endpoint jo data globally share karega sabhi users ke sath
const GLOBAL_API_URL = "https://api.jsonbin.io/v3/b/6691763ee41b4d34e411b0e0"; 
// Note: Production ke liye tum MockAPI.io ya Firebase use kar sakte ho.

export const ReviewSection: React.FC<ReviewSectionProps> = ({ darkMode }) => {
  const [reviews, setReviews] = useState<ReviewItem[]>([]);
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [formData, setFormData] = useState({ name: '', comment: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fetching, setFetching] = useState(true);

  // 📥 Globally saare users ke reviews pull (fetch) karne ke liye
  const fetchGlobalReviews = async () => {
    try {
      const res = await fetch("https://6691763ee41b4d34e411b0e0.mockapi.io/api/v1/reviews");
      if (res.ok) {
        const data = await res.json();
        // Naye reviews upar dikhane ke liye reverse order
        setReviews(data.reverse());
      }
    } catch (err) {
      console.error("Global fetch error:", err);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    fetchGlobalReviews();
  }, []);

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    const formattedDate = new Date().toLocaleDateString('en-US', options);

    const newReview = {
      name: formData.name,
      rating: rating,
      comment: formData.comment,
      date: formattedDate
    };

    try {
      // 1. Web3Forms par notification bhejo (dashboard aur email ke liye)
      await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "9372fab7-4028-49ff-8d55-8b9d6aa556ff",
          subject: `New Global Review from ${formData.name}`,
          ...newReview
        }),
      });

      // 2. 🚀 Global Database API par data save karo taaki sabko dikhe
      const response = await fetch("https://6691763ee41b4d34e411b0e0.mockapi.io/api/v1/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newReview),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', comment: '' });
        setRating(5);
        // List ko update karo database se fresh data lekar
        fetchGlobalReviews();
      }
    } catch (error) {
      console.error("Global Post Error:", error);
      alert("Database error. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 mt-10 px-4 sm:px-0">
      
      {/* Review Form */}
      <div className={`p-5 sm:p-6 rounded-2xl border ${
        darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'
      }`}>
        <h3 className="text-base sm:text-lg font-bold mb-4 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-store-accent" />
          Write a Customer Review (Global)
        </h3>

        {submitted ? (
          <div className="text-center py-6 space-y-3">
            <div className="mx-auto w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <p className="text-xs sm:text-sm text-emerald-400 font-medium">
              Thank you! Your review is now live globally for everyone.
            </p>
            <button onClick={() => setSubmitted(false)} className="text-xs text-store-accent underline cursor-pointer">
              Write another review
            </button>
          </div>
        ) : (
          <form onSubmit={handleReviewSubmit} className="space-y-4">
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold text-slate-400 mr-1">Select Rating:</span>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  className="cursor-pointer transition-all"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
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
                  darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-store-accent' : 'bg-slate-50 border-slate-200 focus:border-store-accent'
                }`}
              />
              <textarea 
                rows={3} required placeholder="Share your experience globally..." value={formData.comment}
                onChange={(e) => setFormData({...formData, comment: e.target.value})}
                className={`w-full p-2.5 rounded-xl text-sm outline-none border resize-none ${
                  darkMode ? 'bg-slate-950 border-slate-800 text-white focus:border-store-accent' : 'bg-slate-50 border-slate-200 focus:border-store-accent'
                }`}
              />
            </div>

            <button
              type="submit" disabled={loading}
              className="w-full py-2.5 font-bold text-xs text-white rounded-xl bg-store-accent hover:bg-blue-600 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>{loading ? 'Publishing Globally...' : 'Submit Global Review'}</span>
            </button>
          </form>
        )}
      </div>

      {/* Global Reviews Display List */}
      <div className="space-y-4">
        <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
          Global Customer Feedbacks ({reviews.length})
        </h3>

        {fetching ? (
          <p className="text-center text-xs text-slate-500 py-4 animate-pulse">Loading global reviews...</p>
        ) : reviews.length === 0 ? (
          <p className="text-center text-xs text-slate-500 py-6 italic">No global reviews yet.</p>
        ) : (
          <div className="grid gap-3 max-h-[400px] overflow-y-auto pr-1">
            {reviews.map((rev, index) => (
              <div key={index} className={`p-4 rounded-xl border ${
                darkMode ? 'bg-slate-900/20 border-slate-800/60' : 'bg-slate-50 border-slate-100'
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-sm">{rev.name}</span>
                  <span className="text-[10px] text-slate-500">{rev.date}</span>
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
