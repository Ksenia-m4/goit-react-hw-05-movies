import { Circles } from "react-loader-spinner";
import { Spinner } from "./LoaderStyled";

export const Loader = () => {
  return (
    <Spinner>
      <Circles height="80" width="80" ariaLabel="loading" color="#c00" />
    </Spinner>
  );
};
