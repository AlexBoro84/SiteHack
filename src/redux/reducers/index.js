import { combineReducers} from "redux";
import emailCheckReducer from "./emailCheckReducer";

export default combineReducers({
    emailCheck: emailCheckReducer
})