import React from "react";
import { CiCircleRemove } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../state-manager/reducer/counter";
import { RootState } from "../state-manager/store";
import styled from "styled-components";
import { changeMode } from "../state-manager/reducer/theme";

const Title = styled.button`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.color};
`;

const Home: React.FC = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <h1>
      <h1>Welcome to App</h1>
      <Title onClick={() => dispatch(changeMode("dark"))}>dark</Title>
      <Title onClick={() => dispatch(changeMode("light"))}>light</Title>
      <CiCircleRemove />
      <div>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <span>{count}</span>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </h1>
  );
};
export default Home;
