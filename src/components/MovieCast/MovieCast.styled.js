import styled from "styled-components";

const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`;

const CastItem = styled.li`
  width: 100%;
  max-width: 400px;

  display: flex;
  flex-wrap: nowrap;
  gap: 20px;
`;

const CastImgThumn = styled.div`
  width: 100px;
`;

const CastImg = styled.img`
  display: block;
  width: 100%;
  object-fit: cover;
`;

const CastActor = styled.p`
  font-weight: 500;
  margin-bottom: 8px;
`;

const CastActorCaracter = styled.p``;

export {
  CastList,
  CastItem,
  CastImgThumn,
  CastImg,
  CastActor,
  CastActorCaracter,
};
