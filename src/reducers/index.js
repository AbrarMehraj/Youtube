import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { videos, selectedVideo } from "./data";

export default combineReducers({
  form: formReducer,
  videos,
  selectedVideo,
});
