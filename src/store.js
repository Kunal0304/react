import { CounterReducer } from "./Redux/Reducers/CounterReducer";
import { createStore } from "redux";

export const store = createStore(CounterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__())