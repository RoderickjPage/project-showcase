// SearchBar.jsx - controlled search input.
// `search` is the current text; `onSearchChange` reports each change to App.
function SearchBar({ search, onSearchChange }) {
  return (
    <div className="search">
      <input
        type="search"
        placeholder="Search Projects"
        aria-label="Search projects"
        value={search}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
