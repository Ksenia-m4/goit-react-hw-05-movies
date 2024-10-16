import PropTypes from "prop-types";

import { GoBackBtn, GoBackLink } from "./BackLink.styled";

const BackLink = ({ backLink, children }) => {
  return (
    <GoBackBtn>
      <GoBackLink to={backLink} className="back-button">
        {children}
      </GoBackLink>
    </GoBackBtn>
  );
};

BackLink.propTypes = {
  backLink: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      state: PropTypes.object,
    }),
  ]).isRequired,
  children: PropTypes.string.isRequired,
};

export default BackLink;
