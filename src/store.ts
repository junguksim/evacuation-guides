import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { GuideState } from './reducers/guide';
import reducer from "./reducers/reducer";

export interface RootState {
    guide : GuideState
}
const initialState = {};
const middleware = [thunk];
const store = createStore(reducer, initialState, applyMiddleware(...middleware));
export default store;
