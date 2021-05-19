import { call, put, takeEvery } from "redux-saga/effects";
import { api } from "../services/api";
import * as actions from "../actions/index";
import { helpers } from "../helpers/common";
import { REQUEST_SERVER } from "../actions/type";

function* getDataCoronaSaga() {
  try {
    yield put(actions.loadingGetData(true));
    const virus = yield call(api.getDataFromApi);
    if (!helpers.isEmptyObject(virus)) {
      yield put(actions.getDataServerSuccess(virus));
    } else {
      yield put(
        actions.getDataServerFail({
          cod: 404,
          message: "Not Found",
        })
      );
    }
  } catch (e) {
    console.log(e);
  } finally {
    //dispatch action loadingGetData vao reducer
    // ket thuc viec call api
    yield put(actions.endLoadingGetData(false));
  }
}

export function* watchGetDataCorona() {
  yield takeEvery(REQUEST_SERVER, getDataCoronaSaga);
}
