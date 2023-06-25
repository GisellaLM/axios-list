import {createStore,combineReducers} from "redux";
import rootReducer from "./rootReducers";

const reducers = combineReducers({
    app: rootReducer
})

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;