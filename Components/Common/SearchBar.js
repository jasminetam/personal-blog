import React from 'react';

function SearchBar({searchInput, handleChange}) {
  return (
      <div className="searchBoxWrapper">
        <input
          className="searchBox"
          type="text"
          placeholder="Search Blog Post"
          value={searchInput}
          onChange={handleChange}
        />
      </div>
  );
}

export default SearchBar;
