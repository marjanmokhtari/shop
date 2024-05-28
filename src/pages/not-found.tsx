import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import history from "../utils/history";
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f7f8ff;
`;

const ButtonMedium = styled.a`
  background-color: #406bd0;
  color: #f7f8ff;
  text-align: center;
  border-radius: 8px;
  padding: 18px;
  font-weight: 600;
  line-height: 100%;
  transition: background-color 0.2s, transform 0.2s, color 0.2s;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  width: 464px;
`;

const NotFound: React.FC = () => {
  useEffect(() => {
    history.replace("/notfound");
  }, []);
  return (
    <Wrapper>
      <h2>Page Not Found</h2>
      <p>The page you are looking for doesn't exist or has been moved</p>
      <Link to="/">
        <ButtonMedium>Return Home</ButtonMedium>
      </Link>
    </Wrapper>
  );
};
export default NotFound;
