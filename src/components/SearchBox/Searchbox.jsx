import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { CiSearch } from "react-icons/ci";

import Notiflix from "notiflix";
import PropTypes from "prop-types";

import {
  SearchboxButton,
  SearchboxForm,
  SearchboxInput,
} from "./Searchbox.styled";

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
    <SearchboxForm onSubmit={handleSubmit}>
      <SearchboxInput
        type="text"
        autoFocus
        placeholder="Search movies"
        onChange={handleChange}
        value={inputValue}
      />
      <SearchboxButton type="submit">
        <CiSearch size={24} />
      </SearchboxButton>
    </SearchboxForm>
  );
};

Searchbox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbox;
