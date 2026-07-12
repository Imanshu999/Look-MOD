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

export const ReviewSection: React.FC<ReviewSectionProps> = ({ darkMode }) => {
  // 📥 Browser ke localStorage se purane reviews load karne ke liye
  const [reviews, setReviews] = useState<ReviewItem[]>(() => {
    const savedReviews = localStorage.getItem('look_mod_reviews');
    return savedReviews ? JSON.parse(savedReviews) : [];
  });

  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [formData, setFormData] = useState({ name: '', comment: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // 💾 Jab bhi naya review aaye, use localStorage me sync karne ke liye
  useEffect(() => {
    localStorage.setItem('look_mod_reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 🚀 Asli data Web3Forms ke dashboard par forward ho raha hai
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "9372fab7-4028-49ff-8d55-8b9d6aa556ff",
          subject: `New Look MOD Store Review from ${formData.name}`,
          name: formData.name,
          stars: `${rating} Stars`,
          comment: formData.comment,
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        // Tarikh dynamic formats me set karne ke liye
        const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        const formattedDate = new Date().toLocaleDateString('en-US', options);

        const newReview: ReviewItem = {
          id: Date.now(),
          name: formData.name,
          rating: rating,
          comment: formData.comment,
          date: formattedDate
        };

        // Naye review ko purane array me top par add kar rahe hain
        setReviews([newReview, ...reviews]);
        setSubmitted(true);
        setFormData({ name: '', comment: '' });
        setRating(5);
      } else {
        alert("API Verification failed.");
      }
    } catch (error) {
      console.error("Review submit error:", error);
      alert("Network connection down.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 mt-10 px-4 sm:px-0">
      
      {/* Review Writing Card */}
      <div className={`p-5 sm:p-6 rounded-2xl border ${
        darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'
      }`}>
        <h3 className="text-base sm:text-lg font-bold mb-4 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-store-accent" />
          Write a Customer Review
        </h3>

        {submitted ? (
          <div className="text-center py-6 space-y-3 animate-scale-up">
            <div className="mx-auto w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <p className="text-xs sm:text-sm text-emerald-400 font-medium">
              Thank you! Your review has been posted successfully.
            </p>
            <button 
              onClick={() => setSubmitted(false)}
              className="text-xs text-store-accent underline cursor-pointer hover:text-blue-400"
            >
              Write another review
            </button>
          </div>
        ) : (
          <form onSubmit={handleReviewSubmit} className="space-y-4">
            
            {/* Interactive Stars Selector */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs font-semibold text-slate-400 mr-1">Select Rating:</span>
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  type="button"
                  key={star}
                  className="cursor-pointer transition-all hover:scale-110 active:scale-95"
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
                type="text" 
                required
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full p-2.5 rounded-xl text-sm outline-none border transition-all ${
                  darkMode 
                    ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600 focus:border-store-accent' 
                    : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-store-accent focus:bg-white'
                }`}
              />
              <textarea 
                rows={3}
                required
                placeholder="Share your experience with our mods or platform features..."
                value={formData.comment}
                onChange={(e) => setFormData({...formData, comment: e.target.value})}
                className={`w-full p-2.5 rounded-xl text-sm outline-none border resize-none transition-all ${
                  darkMode 
                    ? 'bg-slate-950 border-slate-800 text-white placeholder-slate-600 focus:border-store-accent' 
                    : 'bg-slate-50 border-slate-200 text-slate-800 focus:border-store-accent focus:bg-white'
                }`}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-2.5 font-bold text-xs text-white rounded-xl bg-store-accent hover:bg-blue-600 transition-all flex items-center justify-center gap-2 cursor-pointer ${
                loading ? 'opacity-70 cursor-not-allowed' : 'active:scale-95 shadow-[0_2px_10px_rgba(59,130,246,0.15)]'
              }`}
            >
              <Send className="w-3.5 h-3.5" />
              <span>{loading ? 'Publishing Review...' : 'Submit Review'}</span>
            </button>
          </form>
        )}
      </div>

      {/* Real-time Feedbacks Counter & List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800/40 pb-2">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
            User Feedbacks ({reviews.length})
          </h3>
        </div>

        {reviews.length === 0 ? (
          <p className="text-center text-xs text-slate-500 py-6 italic">
            No reviews yet. Be the first to leave a feedback!
          </p>
        ) : (
          <div className="grid gap-3 max-h-[400px] overflow-y-auto pr-1 custom-scrollbar">
            {reviews.map((rev) => (
              <div key={rev.id} className={`p-4 rounded-xl border animate-scale-up ${
                darkMode ? 'bg-slate-900/20 border-slate-800/60' : 'bg-slate-50 border-slate-100'
              }`}>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-sm">{rev.name}</span>
                  <span className="text-[10px] text-slate-500 font-mono">{rev.date}</span>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-3.5 h-3.5 ${i < rev.rating ? 'text-amber-400 fill-amber-400' : 'text-slate-700'}`} />
                  ))}
                </div>
                <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'} break-words`}>
                  {rev.comment}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
};
