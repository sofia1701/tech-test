import React from "react";
import "../styles/SearchResults.css";
import PropTypes from "prop-types";

const SearchResults = ({ results }) => {
  return (
    <div className="search-results">
      {results.map((img) => (
        <img src={img} alt="img" key={img} />
      ))}
    </div>
  );
};

SearchResults.propTypes = {
  results: PropTypes.array,
};

export default SearchResults;
