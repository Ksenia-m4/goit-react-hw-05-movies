import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header">
        <nav className="nav">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Movies
          </NavLink>
        </nav>
      </header>
    </>
  );
};

export default Header;
