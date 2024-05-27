import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import history from "../utils/history";

const NotFound: React.FC = () => {
  useEffect(() => {
    history.replace("/notfound");
  }, []);
  return (
    <>
      <p>Not Found</p>
      <Link to="/">
        <button>Back Home</button>
      </Link>
    </>
  );
};
export default NotFound;
