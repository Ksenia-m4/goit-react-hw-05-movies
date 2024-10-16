import { NavLink } from "react-router-dom";
import styled from "styled-components";

const MovieContainer = styled.div`
  display: flex;
  margin-bottom: 32px;
`;

const MoviePoster = styled.div`
  width: 300px;
  height: 450px;
  margin-right: 30px;
`;

const MoviePic = styled.img`
  width: 100%;
  display: block;
  object-fit: cover;
`;
const MovieInfo = styled.div`
  padding: 20px;
  max-width: 600px;
`;

const MovieTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 12px;
`;

const MovieScore = styled.p`
  font-size: 16px;
  margin-bottom: 32px;
`;

const MovieSubtitle = styled.h3`
  margin-bottom: 12px;
`;

const MovieOverview = styled.p`
  margin-bottom: 20px;
`;

const MovieGenresList = styled.ul`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  max-width: 400px;
`;

const MovieGenres = styled.li`
  padding: 5px 10px;
  background-color: #e5e5e5;
  border-radius: 5px;
`;

const AdditionalContainer = styled.div`
  margin-bottom: 20px;
`;

const AdditionalBtnGroup = styled.ul`
  display: flex;
  gap: 10px;

  list-style: none;
`;

const AdditionalLink = styled(NavLink)`
  display: block;
  padding: 5px 10px;

  text-decoration: none;
  font-size: 18px;
  font-weight: 400;
  color: #000;

  &.active {
    border: 1px solid #000;
    border-radius: 5px;
  }

  &:hover {
    font-weight: 600;
  }
`;

export {
  MovieContainer,
  MoviePoster,
  MoviePic,
  MovieInfo,
  MovieTitle,
  MovieScore,
  MovieSubtitle,
  MovieOverview,
  MovieGenres,
  MovieGenresList,
  AdditionalContainer,
  AdditionalBtnGroup,
  AdditionalLink,
};
