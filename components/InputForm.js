import { useState } from "react";

export default function InputForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    percentile: "",
    category: "GEN",
    branch: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto transform hover:scale-[1.01] transition-all duration-300">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-8 rounded-t-2xl relative overflow-hidden shadow-lg">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-white/10 animate-shine"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.2),transparent)]"></div>
        </div>
        <h2 className="text-white text-3xl font-black mb-3 relative z-10">Enter Your Details</h2>
        <p className="text-blue-50 text-lg relative z-10">Fill in your MHT-CET score details to get college predictions</p>
      </div>
      
      <form onSubmit={handleSubmit} className="glass-white p-8 rounded-b-2xl shadow-lg">
        <div className="space-y-6">
          <div className="relative group">
            <label htmlFor="percentile" className="block text-gray-700 font-semibold mb-2 text-lg">
              Your Percentile Score
            </label>
            <div className="relative">
              <input
                type="number"
                id="percentile"
                name="percentile"
                value={formData.percentile}
                onChange={handleChange}
                step="0.01"
                min="0"
                max="100"
                required
                className="input-field"
                placeholder="Enter your percentile (e.g., 95.5)"
              />
              <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70">%ile</span>
            </div>
          </div>

          <div className="relative group">
            <label htmlFor="category" className="block text-gray-700 font-semibold mb-2 text-lg">
              Reservation Category
            </label>
            <div className="relative">
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="input-field appearance-none"
              >
                <option value="GEN" className="bg-gray-900">General</option>
                <option value="OBC" className="bg-gray-900">OBC</option>
                <option value="SC" className="bg-gray-900">SC</option>
                <option value="ST" className="bg-gray-900">ST</option>
                <option value="EWS" className="bg-gray-900">EWS</option>
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          <div className="group">
            <label htmlFor="branch" className="block text-gray-700 font-semibold mb-2 text-lg">
              Preferred Branch (Optional)
            </label>
            <input
              type="text"
              id="branch"
              name="branch"
              value={formData.branch}
              onChange={handleChange}
              className="input-field"
              placeholder="e.g., Computer, Mechanical"
            />
          </div>

          <button
            type="submit"
            className="w-full btn-gradient py-4 px-6 text-lg mt-8 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 animate-pulse"></div>
            <span className="relative z-10 flex items-center justify-center gap-2">
              ✨ Get College Predictions
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
}