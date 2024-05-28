import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import {
  addItem,
  removeItem,
  clearCart,
} from "../../state-manager/reducer/cart";
import { RootState } from "../../state-manager/store";

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

const PageOne: React.FC = () => {
  const count = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div>
      <ButtonMedium
        onClick={() =>
          dispatch(addItem({ name: "xxxx", quantity: 1, price: 23, id: "2" }))
        }
      >
        Add to Cart
      </ButtonMedium>
      <ButtonMedium
        onClick={() =>
          dispatch(addItem({ name: "yyyy", quantity: 1, price: 23, id: "23" }))
        }
      >
        Add to Cart
      </ButtonMedium>
      <ButtonMedium onClick={() => dispatch(removeItem("2"))}>
        Remove
      </ButtonMedium>
      <ButtonMedium onClick={() => dispatch(clearCart())}>clear</ButtonMedium>;
    </div>
  );
};

export default PageOne;
