import { Link } from "react-router-dom";
import styled from "styled-components";

const GoBackBtn = styled.div`
  width: 100px;
  padding: 10px 20px;
  margin-bottom: 12px;
  cursor: pointer;
`;

const GoBackLink = styled(Link)`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  color: black;

  &:hover {
    font-weight: 600;
  }
`;

export { GoBackBtn, GoBackLink };
