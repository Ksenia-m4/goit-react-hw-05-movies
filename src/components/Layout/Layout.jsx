import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Container, Header, HeaderLink, Navigation } from "./Layout.styled";

import { Loader } from "./../Loader/Loader";
const Layout = () => {
  return (
    <main>
      <Header>
        <Navigation>
          <HeaderLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </HeaderLink>
          <HeaderLink
            to="/movies"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Movies
          </HeaderLink>
        </Navigation>
      </Header>

      <Container>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </main>
  );
};

export default Layout;
