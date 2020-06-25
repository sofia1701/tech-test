import React, { useState } from "react";
import "../styles/SearchForm.css";
import getImages from "../requests/getImages";
import PropTypes from "prop-types";

const SearchForm = ({ setSearchResults }) => {
  const [value, setValue] = useState("");
  const [load, setLoad] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    setLoad(true);
    event.preventDefault();
    setSearchResults(await getImages(value));
    setLoad(false);
  };

  if (load) {
    return <div className="loading">Searching for images...</div>;
  }

  return (
    <div>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="input"
          data-testid="input-id"
          type="text"
          placeholder="Search.."
          value={value}
          onChange={handleChange}
        ></input>
        <button type="submit" className="button">
          Go!
        </button>
      </form>
    </div>
  );
};

SearchForm.propTypes = {
  setSearchResults: PropTypes.func,
};

export default SearchForm;
