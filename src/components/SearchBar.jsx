function SearchBar({ value, onChange, onSearch }) {
  function handleKeyDown(e) {
    if (e.key === "Enter") onSearch();
  }

  return (
    <div className="flex gap-2 mb-5">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search repositories..."
        className="flex-1 px-4 py-2.5 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={onSearch}
        className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;