import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementNumber } from "../actions";

const ButtonDecrement = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(decrementNumber(count))}>-</button>;
};
export default React.memo(ButtonDecrement);
