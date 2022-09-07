import { combineReducers } from "redux";
import counterReducer from "./redux/counter/counterReducer";
import DynamicCounterReducer from "./redux/dynamicCounter/dynamicCounterReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    dynamicCounter: DynamicCounterReducer,
})

export default rootReducer;