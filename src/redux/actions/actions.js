import {
  ADD_MOVIE_TO_LIST,
  GET_MOVIES,
  REMOVE_MOVIE_FROM_LIST,
} from "./actions-type";
import axios from "axios";
import { baseUrl } from "../constants";

export const getApi = async (searchLine) => {
  const apiKey = "2a52a2b1";
  const res = await axios.get(baseUrl + `?s=${searchLine}&apikey=${apiKey}`);
  const data = res.data.Search;
  if (!data) {
    throw console.log("Error");
  }
  return data;
};

export const addMovie = (payload) => ({
  type: ADD_MOVIE_TO_LIST,
  payload,
});

export const getMovies = (payload) => ({
  type: GET_MOVIES,
  payload,
});

export const removeMovie = (payload) => ({
  type: REMOVE_MOVIE_FROM_LIST,
  payload,
});
