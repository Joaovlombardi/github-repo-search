function SortButtons({ sort, onSortChange }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="text-sm text-gray-500">Sort by:</span>
      <button
        onClick={() => onSortChange("stars")}
        className={sort === "stars" ? "px-4 py-1.5 text-sm rounded-lg border bg-blue-600 text-white border-blue-600" : "px-4 py-1.5 text-sm rounded-lg border border-gray-300 text-gray-600"}
      >
        Stars
      </button>
      <button
        onClick={() => onSortChange("updated")}
        className={sort === "updated" ? "px-4 py-1.5 text-sm rounded-lg border bg-blue-600 text-white border-blue-600" : "px-4 py-1.5 text-sm rounded-lg border border-gray-300 text-gray-600"}
      >
        Last Updated
      </button>
    </div>
  );
}

export default SortButtons;