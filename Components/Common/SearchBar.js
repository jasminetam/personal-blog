import React from 'react';

function SearchBar({searchInput, handleChange}) {
  return (
      <div className="searchBoxWrapper" data-test="component-SearchBar">
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
