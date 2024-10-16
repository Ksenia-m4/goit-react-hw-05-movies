import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MovieListWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 20px;
`;

const MovieItem = styled.li`
  width: 200px;
  text-align: center;
`;

const MovieLink = styled(NavLink)`
  text-decoration: none;
  display: block;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
  }
`;

const MovieThumb = styled.div`
  position: relative;
  overflow: hidden;

  width: 200px;
  height: 300px;
`;

const MoviePic = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MovieTitle = styled.p`
  max-width: 300px;
  display: block;
  font-size: 16px;
  color: black;
  padding-top: 12px;
  padding-bottom: 20px;
`;

export {
  MovieListWrapper,
  MovieItem,
  MovieLink,
  MovieThumb,
  MoviePic,
  MovieTitle,
};
