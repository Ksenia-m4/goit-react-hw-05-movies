import {
  NotFoundContainer,
  NotFoundLink,
  NotFoundMessage,
  NotFoundTitle,
} from "./NotFound.styled";

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>404</NotFoundTitle>
      <NotFoundMessage>Page Not Found</NotFoundMessage>
      <NotFoundLink href="/">Go to Home page</NotFoundLink>
    </NotFoundContainer>
  );
};

export default NotFound;
