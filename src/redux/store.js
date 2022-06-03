import { legacy_createStore as createStore } from "redux";
import recuders from "./reducers/index";

const store = createStore(
    recuders,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;;