import React from "react";
import "../styles/SearchResults.css";

const SearchResults = ({ results }) => {
  if (!results) {
    return <p>No results</p>;
  } else {
    return (
      <div className="search-results">
        {results.map((img) => (
          <img 
            src={img} 
            alt="img" 
            key={img} 
          />
        ))}
      </div>
    );
  }
};

export default SearchResults;
