import {
  ADD_MOVIE_TO_LIST,
  REMOVE_MOVIE_FROM_LIST,
  GET_MOVIES,
} from "../actions/actions-type";

const initialState = {
  linkActive: false,
  movies: [],
  listMovies: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_MOVIE_TO_LIST:
      const movie = state.movies.find((item) => item.imdbID === payload);
      return { ...state, listMovies: [...state.listMovies, movie] };
    case REMOVE_MOVIE_FROM_LIST:
      const newListMovies = state.listMovies.filter(
        (item) => item.imdbID !== payload
      );

      return { ...state, listMovies: newListMovies };
    case GET_MOVIES:
      return { ...state, movies: payload };

    default:
      return state;
  }
};
