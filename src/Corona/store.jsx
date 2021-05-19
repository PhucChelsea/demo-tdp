import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducer";
import rootSaga from "./saga";
import logger from "redux-logger";
const sagaMiddleware = createSagaMiddleware();
const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(logger, sagaMiddleware)
  );

  // then run the saga
  sagaMiddleware.run(rootSaga);
  return { store };
};

export default configureStore;
