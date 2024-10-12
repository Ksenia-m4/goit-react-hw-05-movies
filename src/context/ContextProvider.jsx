import React, { useState } from "react";
import PropTypes from "prop-types";

const ContextAlert = React.createContext();

const ContextProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  return (
    <ContextAlert.Provider value={{ movies, setMovies }}>
      {children}
    </ContextAlert.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ContextAlert, ContextProvider };
