import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0;
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1100;

  margin-bottom: 20px;
  padding: 15px 150px;

  background-color: #f5f5f5;

  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const Navigation = styled.nav`
  display: flex;
  gap: 20px;
`;

const HeaderLink = styled(NavLink)`
  font-size: 18px;
  color: #000;
  text-decoration: none;
  transition: color 0.3s ease;

  &.active {
    font-weight: bold;
    color: #c00;
  }

  &:hover {
    color: #c00;
  }
`;

export { Container, Header, Navigation, HeaderLink };
