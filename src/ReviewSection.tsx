import React, { useState } from 'react';
import { Star, Send, CheckCircle2, MessageSquare } from 'lucide-react';

interface ReviewSectionProps {
  darkMode: boolean;
}

// Kuch dummy reviews jo pehle se website par dikhenge
const initialReviews = [
  { id: 1, name: "Aman Sharma", rating: 5, comment: "Brawl Stars MOD ekdum mast chal raha hai, no lag!", date: "Today" },
  { id: 2, name: "Rohit Verma", rating: 4, comment: "Minecraft ka latest version upload karne ke liye thanks team Takano3D.", date: "Yesterday" }
];

export const ReviewSection: React.FC<ReviewSectionProps> = ({ darkMode }) => {
  const [reviews, setReviews] = useState(initialReviews);
  const [rating, setRating] = useState(5);
  const [hover, setHover] = useState(0);
  const [formData, setFormData] = useState({ name: '', comment: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 🚀 Tumhari Web3Forms API par review bhej raha hai
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "9372fab7-4028-49ff-8d55-8b9d6aa556ff", // Tumhari active key
          subject: `New Website Review from ${formData.name}`,
          name: formData.name,
          stars: `${rating} Stars`,
          comment: formData.comment,
        }),
      });

      const result = await response.json();
      if (result.success) {
        // Instant screen par review jodhne ke liye
        const newReview = {
          id: Date.now(),
          name: formData.name,
          rating: rating,
          comment: formData.comment,
          date: "Just now"
        };
        setReviews([newReview, ...reviews]);
        setSubmitted(true);
        setFormData({ name: '', comment: '' });
        setRating(5);
      }
    } catch (error) {
      console.error("Review submit error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8 mt-10">
      
      {/* Review Submit Form */}
      <div className={`p-5 sm:p-6 rounded-2xl border ${
        darkMode ? 'bg-slate-900/40 border-slate-800' : 'bg-white border-slate-100'
      }`}>
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-store-accent" />
          Write a Review
        </h3>

        {submitted ? (
          <div className="text-center py-4 text-emerald-400 flex items-center justify-center gap-2">
            <CheckCircle2 className="w-5 h-5" />
            <span>Review submitted & sent to dashboard!</span>
          </div>
        ) : (
          <form onSubmit={handleReviewSubmit} className="space-y-4">
            {/* Star Rating Select */}
            <div className="flex items-center gap-1">
              <span className="text-xs text-slate-400 mr-2">Your Rating:</span>
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
                type="text" 
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full p-2.5 rounded-xl text-sm outline-none border ${
                  darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'
                }`}
              />
              <textarea 
                rows={3}
                required
                placeholder="Write your experience with Look MOD Store..."
                value={formData.comment}
                onChange={(e) => setFormData({...formData, comment: e.target.value})}
                className={`w-full p-2.5 rounded-xl text-sm outline-none border resize-none ${
                  darkMode ? 'bg-slate-950 border-slate-800 text-white' : 'bg-slate-50 border-slate-200'
                }`}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 rounded-xl font-semibold text-xs bg-store-accent hover:bg-blue-600 text-white transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>{loading ? 'Submitting...' : 'Post Review'}</span>
            </button>
          </form>
        )}
      </div>

      {/* Reviews Display List */}
      <div className="space-y-4">
        <h3 className="text-md font-bold text-slate-400 uppercase tracking-wider">User Feedbacks</h3>
        <div className="grid gap-3">
          {reviews.map((rev) => (
            <div key={rev.id} className={`p-4 rounded-xl border ${
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
              <p className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>{rev.comment}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
          
