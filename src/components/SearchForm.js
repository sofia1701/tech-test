import React, { useState } from "react";
import "../styles/SearchForm.css";
import getImages from "../requests/getImages";

const SearchForm = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getImages(value);
  };

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

export default SearchForm;
