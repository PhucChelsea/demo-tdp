import AppCorona from "./page/App";
import { Provider } from "react-redux";
import configureStore from "./store";

const { store } = configureStore();
const Corona = () => {
  return (
    <Provider store={store}>
      <AppCorona />
    </Provider>
  );
};
export default Corona;
