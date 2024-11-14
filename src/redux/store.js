import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import MovieReducer from "./reducers/MovieReducer";
import genreReducer from "./reducers/genreReducer";

const rootReducer = combineReducers({
  movies: MovieReducer,
  genres: genreReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
