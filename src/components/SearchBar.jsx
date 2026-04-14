function SearchBar({ value, onChange, onSearch }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search repositories..."
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
