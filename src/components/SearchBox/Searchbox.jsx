import Notiflix from "notiflix";
import PropTypes from "prop-types";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Searchbox = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const [inputValue, setInputValue] = useState(query);

  const handleChange = (evt) => {
    const searchQuery = evt.target.value;
    setInputValue(searchQuery);

    const nextParams = searchQuery !== "" ? { query: searchQuery } : {};
    setSearchParams(nextParams);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue.trim()) {
      Notiflix.Notify.failure("Please enter a search query.");
      return;
    }

    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        autoFocus
        placeholder="Search movies"
        onChange={handleChange}
        value={inputValue}
      />
      <button type="submit">Search</button>
    </form>
  );
};

Searchbox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbox;
