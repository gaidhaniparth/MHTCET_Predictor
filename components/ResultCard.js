export default function ResultCard({ result }) {
  const safetyConfig = {
    Safe: {
      bg: "bg-green-50",
      border: "border-green-200",
      icon: "🌟",
      description: "High chance of admission",
      progressBar: "bg-gradient-to-r from-green-500 to-emerald-500",
      text: "text-green-700"
    },
    Likely: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      icon: "⭐",
      description: "Good chance of admission",
      progressBar: "bg-gradient-to-r from-blue-500 to-indigo-500",
      text: "text-blue-700"
    },
    Borderline: {
      bg: "bg-yellow-50",
      border: "border-yellow-200",
      icon: "✨",
      description: "Moderate chance of admission",
      progressBar: "bg-gradient-to-r from-yellow-500 to-orange-500",
      text: "text-yellow-700"
    },
    Reach: {
      bg: "bg-red-50",
      border: "border-red-200",
      icon: "💫",
      description: "Lower chance of admission",
      progressBar: "bg-gradient-to-r from-red-500 to-rose-500",
      text: "text-red-700"
    }
  };

  const config = safetyConfig[result.safety];
  const chance = Math.round(result.pred_prob * 100);

  return (
    <div className={`card ${config.bg} p-6 border-2 ${config.border} hover:-translate-y-1 group`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-bold text-xl text-white mb-1 group-hover:text-blue-300 transition-colors">
            {result.college_name}
          </h3>
          <p className="text-white/70 font-medium">
            {result.branch}
          </p>
        </div>
        <div className={`h-12 w-12 rounded-full flex items-center justify-center text-2xl shadow-inner ${config.bg} backdrop-blur-sm border ${config.border}`}>
          {config.icon}
        </div>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-white/70">Admission Chance</span>
            <span className={`text-sm font-bold ${config.text}`}>{chance}%</span>
          </div>
          <div className="w-full bg-white/5 rounded-full h-3 p-0.5 backdrop-blur-sm">
            <div 
              className={`${config.progressBar} rounded-full h-2 transition-all duration-1000 ease-out`}
              style={{ width: `${chance}%` }}
            ></div>
          </div>
        </div>
        
        <div className={`${config.bg} rounded-xl p-4 text-sm backdrop-blur-sm border ${config.border}`}>
          <div className={`font-bold mb-1 flex items-center gap-2 ${config.text}`}>
            {config.icon} {result.safety}
          </div>
          <div className="text-xs text-white/70">{config.description}</div>
        </div>
      </div>
    </div>
  );
}