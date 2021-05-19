import Todo from "./pages/todo";
import store from "./store";
import { Provider } from "react-redux";
const AppTodo = () => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  );
};
export default AppTodo;
