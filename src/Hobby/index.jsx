import { Provider } from "react-redux";
import Hobby from "./containers/index";
import store from "./store";

const AppHobby = () => {
  return (
    <Provider store={store}>
      <Hobby />
    </Provider>
  );
};
export default AppHobby;
