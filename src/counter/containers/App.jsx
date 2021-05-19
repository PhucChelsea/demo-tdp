import React from "react";
import ButtonIncrement from "../components/button-increment";
import ButtonDecrement from "../components/button-decrement";
import Results from "../components/results";

const AppCounter = () => {
  return (
    <>
      <Results />
      <ButtonIncrement />
      <ButtonDecrement />
    </>
  );
};
export default React.memo(AppCounter);
