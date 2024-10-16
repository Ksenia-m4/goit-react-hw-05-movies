import styled from "styled-components";

const NotFoundContainer = styled.div`
  max-width: 100%;
  margin-top: 300px;
  margin-bottom: 0;
  margin-right: auto;
  margin-left: auto;
  text-align: center;

  color: #721c24;
  font-family: Arial, sans-serif;
  text-align: center;
`;

const NotFoundTitle = styled.h1`
  font-size: 48px;
  margin-bottom: 10px;
`;

const NotFoundMessage = styled.p`
  font-size: 24px;
  margin-bottom: 64px;
`;

const NotFoundLink = styled.a`
  color: black;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

export { NotFoundContainer, NotFoundTitle, NotFoundMessage, NotFoundLink };
