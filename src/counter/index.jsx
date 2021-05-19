import React from "react";
import { Provider } from "react-redux";
import configureStore from "./store/config-store";
import AppCounter from "./containers/App";

const { store } = configureStore();
const Counter = () => {
  return (
    <Provider store={store}>
      <div style={{ textAlign: "center" }}>
        <AppCounter />
      </div>
    </Provider>
  );
};
export default React.memo(Counter);
