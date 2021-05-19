import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { incrementNumber } from "../actions/index";

const ButtonIncrement = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(incrementNumber(count))}>+</button>;
};
export default React.memo(ButtonIncrement);
