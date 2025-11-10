export default function Loader() {
  return (
    <div className="flex flex-col justify-center items-center py-12 gap-4">
      <div className="relative">
        <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-gray-100"></div>
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
        <div className="animate-spin rounded-full h-16 w-16 border-4 border-indigo-500 border-t-transparent absolute inset-0" style={{ animationDirection: 'reverse', animationDuration: '1s' }}></div>
      </div>
      <div className="text-center space-y-2">
        <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
          Predicting colleges...
        </p>
        <p className="text-sm text-gray-500">This may take a moment</p>
      </div>
    </div>
  );
}