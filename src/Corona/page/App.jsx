import React from "react";
import Countries from "../components/countries";
import Global from "../components/global";

const AppCorona = () => {
  return (
    <>
      <Global />
      <Countries />
    </>
  );
};
export default React.memo(AppCorona);
