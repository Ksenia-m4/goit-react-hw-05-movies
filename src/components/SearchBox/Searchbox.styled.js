import styled from "styled-components";

const SearchboxForm = styled.form`
  margin-top: 32px;
  margin-bottom: 32px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  align-items: center;
  width: 100%;

  border: 1px solid #e8e8e8;
  border-radius: 3px;
  background-color: #f4f4f4;

  overflow: hidden;
`;

const SearchboxInput = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding: 10px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
    color: #737373;
  }
`;

const SearchboxButton = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: 0;
  &:hover {
    background-color: #c00;
    color: #fff;
    opacity: 1;
  }
`;

export { SearchboxForm, SearchboxInput, SearchboxButton };
