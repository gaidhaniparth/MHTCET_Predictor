import { useState } from "react";
import InputForm from "../components/InputForm";
import ResultCard from "../components/ResultCard";
import Loader from "../components/Loader";

export default function Home() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handlePredict(formData) {
    setLoading(true);
    const res = await fetch("/api/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    setResults(data);
    setLoading(false);
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-100/50 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-indigo-100/50 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 relative">
          <h1 className="text-7xl font-black mb-6 tracking-tight">
            <div className="flex items-center justify-center gap-4 mb-2">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 animate-gradient">
                🎓 MHT-CET
              </span>
            </div>
            <div className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 animate-gradient">
                College Predictor
              </span>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
            </div>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in mt-8">
            Enter your MHT-CET score details to get personalized college predictions based on your performance
          </p>
        </div>

        <InputForm onSubmit={handlePredict} />
        
        {loading ? (
          <Loader />
        ) : results.length > 0 ? (
          <div className="mt-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 via-indigo-100/50 to-blue-100/50 blur-2xl opacity-50 -z-10"></div>
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Your College Predictions
              </span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results.map((r, i) => (
                <ResultCard key={i} result={r} />
              ))}
            </div>
            <div className="mt-8 text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
              <p className="text-sm text-gray-600">
                Note: These predictions are based on historical data and should be used as a general guide only.
                Final admission decisions depend on various factors including seat availability and reservation policies.
              </p>
            </div>
          </div>
        ) : null}
      </div>
    </main>
  );
}