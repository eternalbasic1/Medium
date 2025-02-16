export const TopBar = () => {
  return (
    <div className="bg-white text-black py-4 px-8 flex items-center justify-between shadow-md border-b-2 border-black">
      <img
        src="http://upload.wikimedia.org/wikipedia/commons/0/0d/Medium_%28website%29_logo.svg"
        alt="Medium Logo"
        className="h-8"
      />

      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center cursor-pointer">
        <span className="text-lg font-semibold text-gray-700">👤</span>
      </div>
    </div>
  );
};
